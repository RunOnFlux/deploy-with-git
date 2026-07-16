import Redis, { type RedisOptions } from "ioredis";

const TODOS_INDEX_KEY = "flux:todos:index";

export { TODOS_INDEX_KEY };

type RedisGlobal = {
  redis?: Redis;
  redisReady?: boolean;
};

const globalForRedis = globalThis as unknown as RedisGlobal;

function logRedis(message: string): void {
  console.log(`[redis] ${message}`);
}

function logRedisError(message: string, error?: unknown): void {
  const detail =
    error instanceof Error ? `: ${error.message}` : error ? `: ${String(error)}` : "";
  console.error(`[redis] ${message}${detail}`);
}

function buildRedisOptions(url: string): RedisOptions {
  const options: RedisOptions = {
    maxRetriesPerRequest: null,
    enableReadyCheck: true,
    retryStrategy(times) {
      const delay = Math.min(times * 1000, 10000);
      logRedis(`Reconnect attempt ${times}, retrying in ${delay}ms`);
      return delay;
    },
    reconnectOnError(error) {
      logRedisError("Connection error, will reconnect", error);
      return true;
    },
  };

  // Flux managed Redis uses TLS (rediss://) with a self-signed certificate.
  if (url.startsWith("rediss://")) {
    const rejectUnauthorized = process.env.REDIS_TLS_REJECT_UNAUTHORIZED === "true";
    options.tls = { rejectUnauthorized };

    if (!rejectUnauthorized) {
      logRedis("TLS enabled with self-signed certificate support (rejectUnauthorized=false)");
    }
  }

  return options;
}

function createClient(url: string): Redis {
  const client = new Redis(url, buildRedisOptions(url));

  client.on("connect", () => {
    logRedis("Connected");
  });

  client.on("ready", () => {
    globalForRedis.redisReady = true;
    logRedis("Ready");
  });

  client.on("error", (error) => {
    globalForRedis.redisReady = false;
    logRedisError("Error", error);
  });

  client.on("close", () => {
    globalForRedis.redisReady = false;
    logRedis("Connection closed");
  });

  client.on("reconnecting", () => {
    globalForRedis.redisReady = false;
    logRedis("Reconnecting...");
  });

  return client;
}

export function getRedisClient(): Redis | null {
  const url = process.env.REDIS_URL;

  if (!url) {
    logRedisError("REDIS_URL is not set");
    return null;
  }

  if (!globalForRedis.redis) {
    globalForRedis.redis = createClient(url);
    globalForRedis.redisReady = false;
  }

  return globalForRedis.redis;
}

export type RedisStatus = "ready" | "connecting" | "unavailable";

export async function getRedisStatus(): Promise<RedisStatus> {
  const client = getRedisClient();

  if (!client) {
    return "unavailable";
  }

  const { status } = client;

  if (globalForRedis.redisReady && status === "ready") {
    return "ready";
  }

  if (status === "connect" || status === "wait" || status === "connecting" || status === "reconnecting") {
    return "connecting";
  }

  try {
    await client.ping();
    globalForRedis.redisReady = true;
    return "ready";
  } catch (error) {
    logRedisError("Ping failed", error);
    return "unavailable";
  }
}

export function todoKey(id: string): string {
  return `flux:todo:${id}`;
}

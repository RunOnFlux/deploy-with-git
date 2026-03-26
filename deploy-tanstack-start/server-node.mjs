import { serve } from "srvx/node";
import server from "./dist/server/server.js";

const port = parseInt(process.env.PORT || "3000", 10);

serve({
  fetch: server.fetch,
  port,
  hostname: "0.0.0.0",
});

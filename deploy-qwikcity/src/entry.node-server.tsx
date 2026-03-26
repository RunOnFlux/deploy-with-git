import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import render from "./entry.ssr";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const { router, notFound, staticFile } = createQwikCity({
  render,
  qwikCityPlan,
  manifest,
  static: {
    root: join(fileURLToPath(import.meta.url), ".."),
  },
});

const PORT = parseInt(process.env["PORT"] ?? "3000");

createServer((req, res) => {
  staticFile(req, res, () => {
    router(req, res, () => {
      notFound(req, res, () => {});
    });
  });
}).listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}/`);
});

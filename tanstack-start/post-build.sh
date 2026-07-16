#!/bin/bash
set -e
cat > dist/server-node.mjs << 'SERVEREOF'
import { serve } from "srvx/node";
import server from "./server/server.js";

const port = parseInt(process.env.PORT || "3000", 10);
serve({ fetch: server.fetch, port, hostname: "0.0.0.0" });
SERVEREOF

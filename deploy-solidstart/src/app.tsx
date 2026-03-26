import { Router } from "@solidjs/start/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

export default function App() {
  return (
    <Router>
      <Suspense>
        <FileRoutes />
      </Suspense>
    </Router>
  );
}

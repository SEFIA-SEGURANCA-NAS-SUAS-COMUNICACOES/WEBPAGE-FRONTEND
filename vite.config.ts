// Project Vite config — cleaned of third-party integration wrappers.
// You can add additional Vite options here as needed.
import { defineConfig } from "vite";

export default defineConfig({
  // Keep tanstackStart config key for downstream tooling that reads it.
  tanstackStart: {
    server: { entry: "server" },
  },
});

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [tailwindcss(), react()],
    resolve: {
      alias: {
        babylonjs:
          mode === "development" ? "babylonjs/babylon.max" : "babylonjs",
      },
    },
    optimizeDeps: {
      exclude: ["@babylonjs/havok"],
    },
  };
});

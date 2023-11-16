import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "/sneakers-byallmeans/",
    define: {
      "process.env": env,
    },
    plugins: [react()],
  };
});

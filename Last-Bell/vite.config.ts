import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      { find: "@apis", replacement: resolve(__dirname, "src/apis") },
      { find: "@assets", replacement: resolve(__dirname, "src/assets") },
      { find: "@hooks", replacement: resolve(__dirname, "src/hooks") },
      { find: "@utils", replacement: resolve(__dirname, "src/utils") },
      { find: "@layouts", replacement: resolve(__dirname, "src/layouts") },
      { find: "@styles", replacement: resolve(__dirname, "src/styles") },
    ],
  },
});

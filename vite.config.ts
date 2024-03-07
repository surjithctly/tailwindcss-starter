/** @type {import('vite').UserConfig} */
import { resolve } from "path";
import { glob } from "glob";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  // ...
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync(resolve(__dirname, "src", "**/*.html"))
      // output: {
      //   entryFileNames: () => "[name]/[name].[format].js",
      // },
    }
  },
  plugins: [tailwindcss()]
});

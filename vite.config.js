/** @type {import('vite').UserConfig} */
import { resolve } from "path";
import glob from "glob";

export default {
  // ...
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync(resolve(__dirname, "src", "**/*.html")),
      // output: {
      //   entryFileNames: () => "[name]/[name].[format].js",
      // },
    },
  },
};

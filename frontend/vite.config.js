import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import glob from "glob";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";

const template = fs.readFileSync("./src/templates/layout.tpl", "utf-8");

let resolvers = [];

let entries = glob.sync(path.resolve("src/pages/*.svelte")).map((file) => {
  return file.replace(path.join(path.resolve()), "");
});

entries.forEach((file) => {
  const entry = file.replace("/src", "");
  const tpl = template.replace(/\{entry\}/, entry);
  const out = file.replace(/^\/src\/pages\//, "").replace(/\.svelte$/, "");

  fs.writeFileSync(`./src/templates/${out}.html`, tpl, "utf-8");
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tsconfigPaths()],
  root: path.resolve("./src"),
  build: {
    emptyOutDir: true,
    outDir: path.join("../public"),
    rollupOptions: {
      input: glob.sync(path.resolve("src/templates/*.html")),
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        entryFileNames: "entry/[name].[hash].js",
        chunkFileNames: "vendor/[name].[hash].js",
      },
    },
  },
});

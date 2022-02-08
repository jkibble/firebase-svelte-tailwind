import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import glob from "glob";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";

const template = fs.readFileSync("./layout.html", "utf-8");

let resolvers = [];

let entries = glob.sync(path.resolve("src/pages/*.svelte")).map((file) => {
  return file.replace(path.join(path.resolve()), "");
});

entries.forEach((file) => {
  const entry = file.replace("/src", "");
  const tpl = template.replace(/\{entry\}/, entry);
  const out = file.replace(/^\/src\/pages\//, "").replace(/\.svelte$/, "");

  if (out === "index") {
    fs.writeFileSync(`./src/${out}.html`, tpl, "utf-8");
  } else {
    if (!fs.existsSync(`./src/${out}`)) {
      fs.mkdirSync(`./src/${out}`);
    }

    fs.writeFileSync(`./src/${out}/index.html`, tpl, "utf-8");
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tsconfigPaths()],
  root: path.resolve("./src"),
  build: {
    emptyOutDir: true,
    outDir: path.join("../dist"),
    rollupOptions: {
      input: glob.sync(path.resolve("src/**/*.html")),
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        entryFileNames: "entry/[name].[hash].js",
        chunkFileNames: "vendor/[name].[hash].js",
      },
    },
  },
});

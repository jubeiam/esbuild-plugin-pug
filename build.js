require("esbuild")
  .build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outfile: "./dist/index.js",
    platform: "node",
    plugins: [],
    external: ["pug"],
  })
  .catch(() => process.exit(1));

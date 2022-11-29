const { esbuildPluginPug } = require("../dist/index.js");
require("esbuild")
  .build({
    entryPoints: ["entry.js"],
    bundle: true,
    outfile: "out.js",
    plugins: [esbuildPluginPug()],
  })
  .catch(() => process.exit(1));

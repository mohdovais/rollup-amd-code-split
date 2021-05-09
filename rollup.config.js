import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const config = [
  {
    input: "src/index.js",
    output: {
      dir: "docs/build",
      format: "esm",
      entryFileNames: "main.esm.js",
      chunkFileNames: "chunk-[hash].esm.js",
    },
    plugins: [
      getBabelOutputPlugin({
        babelrc: false,
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                esmodules: true,
              },
            },
          ],
        ],
      }),
    ],
  },
  {
    input: "src/index.js",
    output: {
      dir: "docs/build",
      format: "esm",
      entryFileNames: "main.amd.js",
      chunkFileNames: "chunk-[hash].amd.js",
    },
    plugins: [
      getBabelOutputPlugin({
        babelrc: false,
        presets: [
          ["@babel/preset-env", { modules: "amd", targets: { ie: "11" } }],
        ],
      }),
    ],
  },
  {
    input: "src/index.js",
    output: {
      dir: "docs/build",
      format: "esm",
      entryFileNames: "main.system.js",
      chunkFileNames: "chunk-[hash].system.js",
    },
    plugins: [
      getBabelOutputPlugin({
        babelrc: false,
        presets: [
          ["@babel/preset-env", { modules: "systemjs", targets: { ie: "11" } }],
        ],
      }),
    ],
  },
];

export default config;

import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const config = [
  {
    input: "src/index.js",
    output: {
      dir: "output",
      format: "esm",
      name: "output",
      entryFileNames: "output.esm.js",
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
      dir: "output",
      format: "esm",
      name: "output",
      entryFileNames: "output.amd.js",
      chunkFileNames: "chunk-[hash].amd.js",
    },
    plugins: [
      getBabelOutputPlugin({
        babelrc: false,
        presets: [["@babel/preset-env", { modules: "amd" }]],
      }),
    ],
  },
];

export default config;

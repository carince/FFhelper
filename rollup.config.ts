import { defineConfig } from "rollup";
import { nodeResolve as node } from "@rollup/plugin-node-resolve";
import { typescriptPaths as paths } from "rollup-plugin-typescript-paths";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
    input: "src/index.ts",
    treeshake: true,
    external: ["inquirer"],
    cache: true,
    output: {
        dir: "dist",
        name: "bundle.js",
        dynamicImportInCjs: true,
        inlineDynamicImports: true,
        minifyInternalExports: true,
        compact: true,
        format: "cjs",
        strict: true,
        sourcemap: "hidden"
    },
    plugins: [
        paths({ preserveExtensions: true }),
        typescript(),
        commonjs(),
        terser({
            compress: true,
            mangle: true
        }),
        node({
            browser: false,
            preferBuiltins: true,
            extensions: [".ts", ".js"]
        })
    ]
})
const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = isProduction === false;

import browsersync from "rollup-plugin-browsersync";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import normalize from "postcss-normalize";
import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import noderesolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import injectEnvRollup from "rollup-plugin-inject-env";
import injectEnv from "inject-env";

export default {
  input: "src/scripts/index.js",
  output: {
    file: "public/giphy.js",
    format: "iife"
  },

  plugins: [
    injectEnv(),
    injectEnvRollup(),
    commonjs(),
    noderesolve(),
    babel(),
    isDevelopment && browsersync({ server: "public" }),
    isProduction && terser(),
    postcss({
      extract: true,
      plugins: [normalize, autoprefixer]
    })
  ]
};

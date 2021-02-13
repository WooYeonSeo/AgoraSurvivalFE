const widthBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const webpack = require("webpack");
const path = require("path");

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = {
  webpack(config, { isServer, buildId }) {
    config.resolve.modules.push(__dirname);

    console.log(
      'path.join(__dirname, "./common/*")',
      path.join(__dirname, "src/common")
    );
    config.resolve = {
      alias: {
        "@common/*": path.join(__dirname, "src/common"),
      },
      ...config.resolve,
    };

    return config;
  },
};

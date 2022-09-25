const { defineConfig } = require("@vue/cli-service");
const packageJSON = require("./package.json");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8099/",

  chainWebpack: (config) => {
    config
      .plugin("module-federation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          name: "home",
          remotes: {
            // "mscomponents": "mscomponents@https://devmsapi.officemate.cn/component/remoteEntry.js",
            mscomponents: "mscomponents@http://localhost:8082/remoteEntry.js",
          },
          shared: {
            "ofs-ui": {
              requiredVersion: packageJSON.devDependencies["ofs-ui"],
              singleton: true,
            },
            vue: {
              requiredVersion: packageJSON.devDependencies.vue,
              singleton: true,
            },
            "vue-router": {
              requiredVersion: packageJSON.dependencies["vue-router"],
              singleton: true,
            },
          },
        },
      ]);
  },

  devServer: {
    port: 8099,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
});

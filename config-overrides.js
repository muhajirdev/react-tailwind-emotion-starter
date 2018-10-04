const { injectBabelPlugin } = require("react-app-rewired");
const rewireEslint = require("react-app-rewire-eslint");
const tailwind = [
  "tailwind-components",
  {
    config: "./src/tailwind.js",
    format: "auto"
  }
];
const emotion = ["emotion"];
module.exports = function override(config, env) {
  config = injectBabelPlugin(tailwind, config);
  config = injectBabelPlugin(emotion, config);
  config = rewireEslint(config, env);
  return config;
};

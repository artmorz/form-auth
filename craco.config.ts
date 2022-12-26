const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@uikit": path.resolve(__dirname, "src/uikit"),
      "@components": path.resolve(__dirname, "src/uikit/components"),
      "@assets": path.resolve(__dirname, "src/uikit/assets"),
    },
  },
};

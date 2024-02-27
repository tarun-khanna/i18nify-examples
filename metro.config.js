// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = {
  ...getDefaultConfig(__dirname),
  resolver: {
    unstable_enablePackageExports: true,
    unstable_conditionNames: ["module", "import", "require", "react-native"],
  },
};

module.exports = config;

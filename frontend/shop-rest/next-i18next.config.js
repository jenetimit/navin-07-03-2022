const path = require("path");

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    // localeDetection: false,
  },
  react: { useSuspense: false },
  localePath: path.resolve("./public/locales"),
};

// @ts-nocheck
module.exports = {
  plugins: [
    require("postcss-spring-easing").default({
      easings: {
        bounceOut: (t) => {
          let pow2,
            b = 4;
          while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}
          return (
            1 / Math.pow(4, 3 - b) -
            7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2)
          );
        },
      },
    }),
    require("postcss-nested"),
    require("postcss-will-change"),
    require("autoprefixer"),
    require("cssnano"),
    require("postcss-atroot")(),
    require("postcss-for"),
    require("postcss-class-name-shortener"),
    // require("postcss-import"),
    // require("postcss-url"),
    // require("tailwindcss/nesting"),
    // require("tailwindcss")("./tailwind.config.mjs"),
    // require("postcss-combine-media-query"),
    require("postcss-sort-media-queries")({ sort: "mobile-first" }),
    require("postcss-combine-duplicated-selectors")({
      removeDuplicatedProperties: true,
      removeDuplicatedValues: false,
    }),
    require("list-selectors").plugin,
    require("doiuse"),
    require("postcss-browser-reporter")({
      selector: "body:before",
    }),
    require("postcss-reporter"),

    // require("postcss-reporter"),
  ],
};

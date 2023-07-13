/** @type {import("prettier").Config} */
const config = {
  singleQuote: true,
  jsxSingleQuote: false,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;

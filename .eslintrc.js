module.exports = {
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
};

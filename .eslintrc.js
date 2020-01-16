module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'react-hooks'],
  rules: {
    "comma-dangle": [1, "never"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
    "react/prefer-es6-class": [1, "always"],
    "react/display-name": [0],
    "react/prop-types": [0],
  }
};
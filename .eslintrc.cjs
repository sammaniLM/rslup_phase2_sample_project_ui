module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:angular/johnpapa',
  ],
  plugins: ['@typescript-eslint', 'angular'],
  rules: {
    'angular/service-name': 'off',
  },
};

module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-uses-vars': 'error',
    'import/order': 'error',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'no-shadow': 'off',
    'react/no-unescaped-entities': 'off',
    'react-native/no-inline-styles': 'off',
    'react/prop-types': 'off',
    radix: 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  globals: {
    setTimeout: false,
    clearInterval: false,
    setInterval: false,
    process: false,
    FormData: false,
    window: false,
  },
}

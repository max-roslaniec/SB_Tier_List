// Este arquivo configura o ESLint para encontrar erros e padronizar o código JavaScript.
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'prettier' // Adiciona a configuração do Prettier para evitar conflitos de regras
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Você pode adicionar regras customizadas aqui se desejar
  },
};

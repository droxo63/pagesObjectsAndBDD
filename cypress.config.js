const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

async function setupNodeEvents(on, config) {
  // Adiciona o plugin do Cucumber para pré-processamento
  await addCucumberPreprocessorPlugin(on, config);

  // Configuração do Webpack para processar arquivos .feature
  on('file:preprocessor', webpack({
    webpackOptions: {
      resolve: {
        extensions: ['.js', '.ts'], // Extensões de arquivo suportadas
      },
      module: {
        rules: [
          {
            test: /\.feature$/, // Processamento de arquivos .feature
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack', // Carregador para Cucumber
                options: config
              },
            ],
          },
        ],
      },
    },
  }));

  // Retorna a configuração final
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    specPattern: "**/*.feature", // Padrão de arquivos de teste .feature
    setupNodeEvents, // Passando a função de configuração dos eventos
  },
});
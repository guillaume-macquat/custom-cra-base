const {
  getLoaders,
  getPlugin,
  loaderByName,
  pluginByName,
} = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const babelMatches = getLoaders(webpackConfig, loaderByName('babel-loader')).matches;
      babelMatches.forEach((match) => {
        match.loader.options.cacheDirectory = '.cache/babel';
      });

      const eslintMatch = getPlugin(webpackConfig, pluginByName('ESLintWebpackPlugin')).match;
      eslintMatch.options.baseConfig = {};
      eslintMatch.options.cacheLocation = '.cache/eslint.json';

      return webpackConfig;
    },
  },
};

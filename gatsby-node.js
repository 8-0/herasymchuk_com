const path = require('path');

require('dotenv').config({
  path: '.env',
});

exports.onCreateWebpackConfig = function addPathMapping({
  stage,
  actions,
  getConfig,
}) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  });

  // Attempt to improve webpack vender code splitting
  if (stage === 'build-javascript') {
    const config = getConfig();

    config.optimization.splitChunks.cacheGroups = {
      ...config.optimization.splitChunks.cacheGroups,
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        enforce: true,
        chunks: 'all',
        priority: 1,
      },
    };

    // Ensure Gatsby does not do any css code splitting
    config.optimization.splitChunks.cacheGroups.styles.priority = 10;

    actions.replaceWebpackConfig(config);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  createRedirect({
    fromPath: '/stoimost',
    toPath: '/ru/pricing',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/pro-nas',
    toPath: '/ua/about',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/o-nas',
    toPath: '/ru/about',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/contacts',
    toPath: '/en/contact',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/kontakti',
    toPath: '/ru/contact',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/kontakty',
    toPath: '/ru/contact',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/expertice',
    toPath: '/en/expertise',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/cost-of-service',
    toPath: '/en/pricing',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/vartist',
    toPath: '/ua/pricing',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/ekspetiza',
    toPath: '/ru/expertise',
    isPermanent: true,
  });

  createRedirect({
    fromPath: '/ekspetyza',
    toPath: '/ru/expertise',
    isPermanent: true,
  });
};

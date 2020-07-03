require('dotenv').config({
  path: '.env',
});

const supportedLanguages = require('./src/utils/i18n/supportedLanguages');

const languages = supportedLanguages.map(language => language.languageTag);

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-typescript',
  'gatsby-plugin-emotion',
  'gatsby-plugin-remove-serviceworker',
  'gatsby-plugin-svgr',
  {
    resolve: 'gatsby-plugin-intl',
    options: {
      path: `${__dirname}/src/locales`,
      languages,
      defaultLanguage: 'uk',
      redirect: true,
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      policy: [{ userAgent: '*', disallow: '/' }]
    }
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [`Montserrat:300,500`],
      display: 'swap',
    },
  },
  'gatsby-plugin-client-side-redirect',
  'gatsby-plugin-cname',
];

// Bundle analyzer, dev only
if (process.env.ENABLE_BUNDLE_ANALYZER === '1') {
  plugins.push('gatsby-plugin-webpack-bundle-analyser-v2');
}

module.exports = {
  siteMetadata: {
    siteUrl: 'https://h.koncord.dp.ua/'
  },
  plugins,
};

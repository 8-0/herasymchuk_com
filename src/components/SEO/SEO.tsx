import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';
import { injectIntl, IntlShape } from 'gatsby-plugin-intl';
import { Location } from '@reach/router';

type Props = {
  /** Description text for the description meta tags */
  description?: string;
  intl: IntlShape;
} & HelmetProps;

/**
 * An SEO component that handles all element in the head that can accept
 */
const SEO: React.FC<Props> = ({
  children,
  description = '',
  title,
  intl: { locale },
}) => {
  const metaDescription = description || 'Welcome to my website';

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang: locale,
          }}
          title={title}
          titleTemplate="%s | Website"
        >
          <meta property="description" content={metaDescription} />

          {/* OG tags */}
          <meta
            property="og:url"
            content={process.env.GATSBY_SITE_URL + location.pathname}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:locale" content={locale} />
          {location.pathname.match(/\/contact$/) && (
            <link
              href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
              rel="stylesheet"
            />
          )}
          {children}
        </Helmet>
      )}
    </Location>
  );
};

export default injectIntl(SEO);

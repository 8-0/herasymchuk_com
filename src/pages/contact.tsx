import React from 'react';

import GoogleMapReact from 'google-map-react';

const isClient = typeof window !== 'undefined';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import {
  injectIntl,
  IntlShape
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
const API_KEY = 'AIzaSyDHuRkzMtkC6tu8Mxvp8xmz7iR9QqkBSvk';

const Contact: React.FC<{ intl: IntlShape }> = ({ intl: { formatMessage } }) => {
  return (
    <Layout>
      <SEO title={formatMessage({ id: 'contact.title' })} />
      <h1>{formatMessage({ id: 'contact.title' })}</h1>

      <section className="google-map">
      <div className="map">
        { isClient && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={[1, 1]}
            defaultZoom={1}
          >
            <div
              className="marker"
              lat={1}
              lng={1}
            />
          </GoogleMapReact>
        )}
      </div>
    </section>
    </Layout>
  );
};

export default injectIntl(Contact);

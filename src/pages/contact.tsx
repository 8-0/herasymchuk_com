import React from 'react';

import GoogleMapReact from 'google-map-react';
import { ReactComponent as Marker } from '~/icons/marker.svg';


const isClient = typeof window !== 'undefined';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import {
  IntlContextConsumer,
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
      {isClient && (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={[48.4691, 35.0235]}
            defaultZoom={15}
          >
            <div style={{position: 'absolute', transform: 'translate(-50%, -50%)'}}>
            <Marker/>
            <IntlContextConsumer>
              {({ language }) => <img src={`/logo_${language}.png`} alt='HSS logo' style={{ width: '3rem'}}/> }
            </IntlContextConsumer>
            </div>
          </GoogleMapReact>
        </div>
      )}
    </Layout>
  );
};

export default injectIntl(Contact);

import React from 'react';

import { ReactComponent as Mrker } from '~/icons/marker.svg';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const isClient = typeof window !== 'undefined';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import { IntlContextConsumer, injectIntl, IntlShape } from 'gatsby-plugin-intl';
const defaultCenter = [48.4691, 35.0235];

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

const Contact: React.FC<{ intl: IntlShape }> = ({ intl: { formatMessage } }) => {
  return (
    <Layout>
      <SEO title={formatMessage({ id: 'contact.title' })} />
      <h1>{formatMessage({ id: 'contact.title' })}</h1>
        <div style={{  width: '300px', height: '300px'  }}>
          <Map center={defaultCenter} zoom={14}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
        </div>
    </Layout>
  );
};

export default injectIntl(Contact);

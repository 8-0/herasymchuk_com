import React from 'react';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import {
  IntlContextConsumer,
  injectIntl,
  IntlShape
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { ReactComponent as MarkerIcon } from '~/icons/marker.svg';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZDFiIiwiYSI6ImNrYzYzaTAwZDBsOHIyenFwN2QwdXl2dzgifQ.N1j4A2iPdVmn2oiA43Rwaw'
});
const location = [35.0235, 48.4685];
const Contact: React.FC<{ intl: IntlShape }> = ({ intl: { formatMessage } }) => {
  return (
    <Layout>
      <SEO title={formatMessage({ id: 'contact.title' })} />
      <h1>{formatMessage({ id: 'contact.title' })}</h1>

      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={location}
        zoom={[11.5]}
        containerStyle={{
          height: '50vh',
          width: '50vw',
        }}
      >
        <Marker coordinates={location} anchor="bottom" style={{
          width: '2rem', height: '2rem',
          backgroundImage:'url("/marker.svg")'}}  >
        </Marker>
      </Map>
    </Layout>
  );
};

export default injectIntl(Contact);

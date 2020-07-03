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
const Contact: React.FC<{ intl: IntlShape }> = ({ intl: { formatMessage } }) => {
  return (
    <Layout>
      <SEO title={formatMessage({ id: 'contact.title' })} />
      <h1>{formatMessage({ id: 'contact.title' })}</h1>

      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[ 35.0235, 48.4691]}
        zoom={[13]}
        containerStyle={{
          height: '50vh',
          width: '50vw'
        }}
        >
        <Marker
          coordinates={[ 35.0235, 48.4691]}
          anchor="bottom">
              <div style={{width: '2.5rem'}}>
                <MarkerIcon style={{position: 'fixed', zIndex: 1}}/>
                <IntlContextConsumer>
                  {({ language }) => <img src={`/logo_${language}.png`} alt='HSS logo' style={{position: 'fixed', zIndex: 2, width:'1.3rem', left:'0.6rem',
    top: '0.15rem'}}/> }
                </IntlContextConsumer>
              </div>
        </Marker>
      </Map>
    </Layout>
  );
};

export default injectIntl(Contact);

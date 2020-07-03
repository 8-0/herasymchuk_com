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

const changeLocale = function(locale: any) {
  return function(map: MapboxGl.Map, evt: any) {
    const labelList = map.getStyle().layers.filter(layer => {
      return /-label/.test(layer.id);
    });
    for (let labelLayer of labelList) {
      map.setLayoutProperty(labelLayer.id, 'text-field', [
        'coalesce',
        ['get', 'name_' + locale],
        ['get', 'name'],
      ]);
    }
  };
};

const location = [35.0235, 48.4685];
const Contact: React.FC<{ intl: IntlShape }> = ({ intl: { formatMessage } }) => {
  return (
    <Layout>
      <SEO title={formatMessage({ id: 'contact.title' })} />
      <h1>{formatMessage({ id: 'contact.title' })}</h1>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <Map style="mapbox://styles/mapbox/streets-v11" onStyleLoad={changeLocale(currentLocale)} center={location} zoom={[11.5]} containerStyle={{  height: '50vh', width: '50vw'  }}>
            <Marker
              coordinates={location}
              anchor="bottom"
              style={{
                width: '4rem',
                height: '4rem',
                backgroundImage: 'url("/marker.svg")'}}/>
          </Map>
        )}
    </IntlContextConsumer>
    </Layout>
  );
};

export default injectIntl(Contact);

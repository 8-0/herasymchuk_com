import React from 'react';
import { Hero } from '../components/Hero'
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import {
  injectIntl,
  IntlShape
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

const Index: React.FC<{ intl: IntlShape }> = ({ intl: { formatMessage } }) => {
  return (
    <Layout>
      <SEO title={formatMessage({ id: 'homepage.title' })} />
      <Hero title={formatMessage({ id: 'home.hero.title' })} subtitle={formatMessage({ id: 'home.hero.subtitle' })} />
    </Layout>
  );
};

export default injectIntl(Index);

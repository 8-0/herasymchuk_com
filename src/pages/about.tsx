import React from 'react';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import {
  injectIntl,
  IntlShape
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

const Index: React.FC<{ intl: IntlShape}> = ({ intl: {formatMessage} }) => {
  return (
    <Layout>
      <SEO title={formatMessage({ id: 'about.title' })} />
      <h1>{formatMessage({ id: 'about.title' })}</h1>

      <pre>{formatMessage({ id: 'about.main' })}</pre>
    </Layout>
  );
};

export default injectIntl(Index);

import React from 'react';
// import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import {
  injectIntl,
  FormattedMessage,
  InjectedIntlProps,
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'contact.title' })} />
      <h1>{intl.formatMessage({ id: 'contact.title' })}</h1>
    </Layout>
  );
};

export default injectIntl(Index);

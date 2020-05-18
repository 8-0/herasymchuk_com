import { Theme } from '@theme/styled';

const theme: Theme = {
  color: {
    primary: '#f00',
    // secondary: '#008489',
    // secondary: 'rgb(237,31,36)',
    // tertiary: '#f39b84',
    secondary: 'rgb(237,31,36)',
    // tertiary: '#75706b',
    tertiary: '#fff',
    gray: {
      lightest: '#faf8f5',
      light: '#e2dedc',
      medium: '#aaa5a3',
      dark: '#75706b',
      darkest: '#463b36',
    },
    status: {
      error: {
        light: '#ffeeea',
        medium: '#ed6c4a',
        dark: '#ba3816',
      },
    },
    text: {
      heading: '#463b36',
      body: '#75706b',
    },
    disabled: '#aaa5a3',
  },
  spacing: {
    unit: 8,
  },
  shape: {
    borderRadius: {
      small: 0,
      medium: 0,
      large:  0,
    },
  },
};

export default theme;

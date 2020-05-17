import * as React from 'react'
import styled from '@emotion/styled'
import { IntlContextConsumer, Link, changeLocale, FormattedMessage } from 'gatsby-plugin-intl'
import SocialIcons from './SocialIcons'
import Button from '../Button/Button'
const StyledHeader = styled.header`
  color: rgba(255,255,255, 0.5); // FIXME
  background-color: rgb(47,47,47); // FIXME
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: nowrap;
`

const HeaderInnerFirst = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 100vw;
  & a {
    // cursor: pointer;
    color: lightgrey;
    flex-grow: 8;
    &: hover{
      color: white;
    }
  }

  &>*{
    flex-grow: 1
  }
  justify-content: space-between;
  padding: 0.3rem 2rem;

  // flex-direction: row;
  align-items: center;
  // align-self: stretch;
`

const HeaderInnerSecond = styled.div`
  padding: 0.5rem 2rem;
  background-color: white; // FIXME
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  align-content: stretch;
`

const HomepageLink = styled(Link)`
// color: white; // FIXME
// font - size: 1.5rem;
// font - weight: 600;

  height: 138px;
  display: block;

  & img {
    max-width: 100%;
    max-height: 100%;
  }
  // &: hover,
  // &: focus {
  // text - decoration: none;
}
`

const NavLink = styled(Link)`
padding: 1rem;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ }) => (
  <StyledHeader>
    <HeaderInnerFirst>
      <a href="tel:+380962897127">+38 (096) 289-71-27</a>
      <div>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map(language => (
              <a
                key={language}
                onClick={() => changeLocale(language)}
                style={{
                  color: currentLocale === language ? `yellow` : `white`,
                  margin: 10,
                  textTransform: 'uppercase',
                  cursor: `pointer`,
                }}
              >
                {language}
              </a>
            ))
          }
        </IntlContextConsumer>
      </div>
      <SocialIcons />
    </HeaderInnerFirst>
    <HeaderInnerSecond>
      <HomepageLink to="/">
        <IntlContextConsumer>
          {({ language }) => <img src={`/logo_${language}.png`} alt='HSS logo'/> }
        </IntlContextConsumer>
      </HomepageLink>
      <div>
        <Button as={Link} to='/about'><FormattedMessage id='about.title'/></Button>
        <Button as={Link} variant="outline" color="secondary" to='/contact'><FormattedMessage id='contact.title'/></Button>
        <Button as={Link} variant="outline" to='/expertise'><FormattedMessage id='expertise.title'/></Button>
        <NavLink to='/pricing'><FormattedMessage id='pricing.title'/></NavLink>
      </div>
    </HeaderInnerSecond>
    {/* <div>{title}</div> */}
  </StyledHeader >
)

export default Header

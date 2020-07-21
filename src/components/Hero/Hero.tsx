import * as React from 'react'
import styled from '@emotion/styled'

import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'


const StyledHero = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-size: 2rem;
padding: 10rem;

& h1 {
  font-weight: 500;

}
& h1,h2,h3,h4,h5 {
  color: white;
}
`

interface HeroProps {
  title: string;
  subtitle: string;
  className?: string
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, className }) => {
  const { desktop } = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "hero_bg.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag={`section`}
      id={`test`}
      className={className}
      fluid={desktop.childImageSharp.fluid}
    >
      <StyledHero>
        <h1>{title} </h1>
        <h3>{subtitle}</h3>
      </StyledHero>
    </BackgroundImage>
  )
}

export default Hero

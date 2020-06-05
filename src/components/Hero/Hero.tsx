import * as React from 'react'
import styled from '@emotion/styled'

const StyledHero = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-size: 2rem;
padding: 10rem;
background-color: rgb(126,102,90);
background-image: url(/hero_bg.jpg);
background-size: cover;
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
  // className?: string
}

const Hero: React.FC<HeroProps> = ({title, subtitle}) => (
  <StyledHero>
    <h1>{title} </h1>
    <h3>{subtitle }</h3>
  </StyledHero>
)

export default Hero

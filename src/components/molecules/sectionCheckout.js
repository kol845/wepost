import React, { useEffect, useState, useRef } from "react"
import { withPrefix } from "gatsby"
import styled from "styled-components"
import Seperator from "@assets/seperators/a-seperator-4.svg"
import Container from "@atoms/container"
import SliderTestimonials from "@molecules/sliderTestimonials"
import { media } from "@utils/media"
import Button from "@atoms/button"


const SectionCheckout = () => {
  const [loaded, setLoaded] = useState(false)
  const scriptEl = useRef(null)

  // only add moonclerk.js when component mounts
  // useEffect(() => {
  //   const checkoutScript = document.createElement("script")
  //   checkoutScript.id = "checkoutScript"
  //   checkoutScript.src = withPrefix("/moonclerk.js")
  //   scriptEl.current.appendChild(checkoutScript)
  //   setLoaded(true)
  // }, [])

  return (
    <Container content>
      <CheckoutContainer>
        <Content>
          <h6>Get started</h6>
          <h1>Take your first step and </h1><Button href="#checkout">Sign up</Button>
        </Content>

      </CheckoutContainer>
    </Container>
  )
}

export default SectionCheckout

const CheckoutContainer = styled(Container)`
  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.button.radius};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  grid-template-columns: var(--gridSplit);

  @media ${media.lg} {
    flex-direction: row;
  }
`

const Content = styled.div`
  padding: var(--spacingContent);
  width: 100%;



  h6 {
    color: ${props => props.theme.colors.lightGray};
    letter-spacing: 3px;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  h1 {
    color: ${props => props.theme.colors.white};
  }

  p {
    color: ${props => props.theme.colors.lightGray};
  }
`

const Form = styled.div`
  padding: var(--spacingContent);
  width: 100%;

  @media ${media.lg} {
    width: 50%;
  }

  a {
    display: none;
  }
`

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Logo = () => {
  const data = useStaticQuery(graphql`
  query NavLogoQuery {
    logo: file(relativePath: { eq: "company-logo-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }`)
  console.log(data)
  return (
    <StarterLogo>
      <Img fluid={data.logo.childImageSharp.fluid}/>
    </StarterLogo>
  )
}

export default Logo
const Image = styled.div``

const StarterLogo = styled.div`
  height: 40px;
  width: 150px;
  position: relative;
  top:-40px;
`


import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "@utils/layout"
import SEO from "@utils/seo"
import Img from "gatsby-image"
import Button from "@atoms/button"
import ContentBlock from "@atoms/contentBlock"
import Container from "@atoms/container"
import List from "@atoms/list"
import Subheading from "@atoms/subheading"
import SectionHeader from "@molecules/sectionHeader"
import SectionSetup from "@molecules/sectionSetup"
import SectionCheckout from "@molecules/sectionCheckout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexImagesQuery {
      saveMoney: file(relativePath: { eq: "accepting-payments.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      saveTime: file(relativePath: { eq: "fast-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sendMore: file(relativePath: { eq: "bermuda-message-sent.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SectionHeader />
      <SectionSetup />
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.saveMoney.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Save Money</Subheading>
          <h2>
            You don't need a printer, envelopes or stamps. We got all of that handled.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula purus quis elementum posuere. Praesent commodo, leo non dictum rhoncus, lectus mauris porta magna, eget tempor tellus ante ut lectus. Ut pretium, augue eget iaculis maximus, tortor ex rhoncus metus, in tincidunt erat neque a nulla. Ut sit amet lacus vel diam lacinia congue. Aliquam erat volutpat. Donec imperdiet libero ex, ac egestas massa porta eget. Nam vulputate, urna a volutpat maximus, lacus libero pretium nunc, sit amet ullamcorper quam metus viverra turpis. Morbi sit amet porta urna. Donec sit amet cursus diam. Vivamus in sollicitudin turpis.
          </p>
          <List>
            <li>Nam odio nisl, fermentum eget tincidunt a, volutpat nec lectus. </li>
            <li>Nulla neque lacus, rutrum ut auctor. </li>
            <li>Quisque libero arcu, tempor id mattis sed. </li>
            <li>Odio libero blandit nunc, a convallis eros tellus at justo. In risus risus.</li>
            <li>
              Vestibulum pellentesque, mi quis sodales mollis, odio libero blandit nunc, a convallis eros tellus at justo. In risus risus, sollicitudin non nulla et.
            </li>
          </List>
          <Button
            href="https://moonclerk.com"
            aria-label="Learn more about MoonClerk"
          >
            Learn More
          </Button>
        </ContentBlock>
      </ContentContainer>
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.saveTime.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Save Time</Subheading>
          <h2>
            No more trips from store to store. You are now just a click away from sending your physical mail!
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula purus quis elementum posuere. Praesent commodo, leo non dictum rhoncus, lectus mauris porta magna, eget tempor tellus ante ut lectus. Ut pretium, augue eget iaculis maximus, tortor ex rhoncus metus, in tincidunt erat neque a nulla. Ut sit amet lacus vel diam lacinia congue. Aliquam erat volutpat. Donec imperdiet libero ex, ac egestas massa porta eget. Nam vulputate, urna a volutpat maximus, lacus libero pretium nunc, sit amet ullamcorper quam metus viverra turpis. Morbi sit amet porta urna. Donec sit amet cursus diam. Vivamus in sollicitudin turpis.
          </p>
          <List>
            <li>Nam odio nisl, fermentum eget tincidunt a, volutpat nec lectus. </li>
            <li>Nulla neque lacus, rutrum ut auctor. </li>
            <li>Quisque libero arcu, tempor id mattis sed. </li>
            <li>Odio libero blandit nunc, a convallis eros tellus at justo. In risus risus.</li>
            <li>
              Vestibulum pellentesque, mi quis sodales mollis, odio libero blandit nunc, a convallis eros tellus at justo. In risus risus, sollicitudin non nulla et.
            </li>
          </List>
          <Button
            href="https://gatsby.org"
            aria-label="Learn more about Gatsby Js"
          >
            Learn More
          </Button>
        </ContentBlock>
      </ContentContainer>
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.sendMore.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Send More</Subheading>
          <h2>
            We all love a physical letter from time to time. Sending letter to loved ones and colleagues is a good way to strengthen our bonds. 
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula purus quis elementum posuere. Praesent commodo, leo non dictum rhoncus, lectus mauris porta magna, eget tempor tellus ante ut lectus. Ut pretium, augue eget iaculis maximus, tortor ex rhoncus metus, in tincidunt erat neque a nulla. Ut sit amet lacus vel diam lacinia congue. Aliquam erat volutpat. Donec imperdiet libero ex, ac egestas massa porta eget. Nam vulputate, urna a volutpat maximus, lacus libero pretium nunc, sit amet ullamcorper quam metus viverra turpis. Morbi sit amet porta urna. Donec sit amet cursus diam. Vivamus in sollicitudin turpis.
          </p>
          <List>
            <li>Nam odio nisl, fermentum eget tincidunt a, volutpat nec lectus. </li>
            <li>Nulla neque lacus, rutrum ut auctor. </li>
            <li>Quisque libero arcu, tempor id mattis sed. </li>
            <li>Odio libero blandit nunc, a convallis eros tellus at justo. In risus risus.</li>
            <li>
              Vestibulum pellentesque, mi quis sodales mollis, odio libero blandit nunc, a convallis eros tellus at justo. In risus risus, sollicitudin non nulla et.
            </li>
          </List>
          <Button
            href="https://netlify.com"
            aria-label="Learn more about Netlify"
          >
            Learn More
          </Button>
        </ContentBlock>
      </ContentContainer>
      <SectionCheckout />
    </Layout>
  )
}

export default IndexPage

const Image = styled.div``

const ContentContainer = styled(Container)`
  &:nth-of-type(odd) {
    direction: rtl;

    div {
      direction: ltr;
    }
  }
`

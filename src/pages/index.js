import * as React from 'react'
import Layout from '../components/layout'
import AboutMe from '../components/aboutme'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Education from '../components/education/education'
import Portfolio from '../components/portfolio/portfolio'
import Experience from '../components/experience/experience'
import { container, introduction, info } from './index.module.css'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className={container}>
        <div id={introduction}>
          <StaticImage
            alt='A picture of me, Malte, outside.'
            src='../images/profile-pic.jpg'
            style={{
              width: '30%',
              border: '2px solid rgb(235, 241, 248)',
              borderRadius: '50%'
            }}
          />
          <h1>Malte Nilsson</h1>
          <h2>.NET Developer</h2>
          <p
            style={{
              background: 'rgb(28, 27, 41, 0.7)',
              padding: '5px'
            }}
          >
            I'm looking for a new job! Available from June 2023.
          </p>
        </div>
      </div>

      <div className={container} id={info}>
        <AboutMe />
        <Skills data={data.allFile.nodes} />
        <Education />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </Layout>
  )
}

export const Head = () => <title>Malte Nilsson || .NET Developer</title>

export default IndexPage

export const query = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 50, placeholder: BLURRED)
        }
        name
      }
    }
  }
`

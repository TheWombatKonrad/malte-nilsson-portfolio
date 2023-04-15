import * as React from 'react'
import Layout from '../components/layout'
import AboutMe from '../components/aboutme'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Education from '../components/education/education'
import Portfolio from '../components/portfolio'
import Experience from '../components/experience'
import { container } from './index.module.css'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className={container} style={{ padding: '10%' }}>
        <StaticImage
          alt='A picture of me, Malte, outside.'
          src='../images/profile-pic.jpg'
          style={{
            width: '25%'
          }}
          imgStyle={{
            borderRadius: '50%'
          }}
        />
        <h1>Malte Nilsson</h1>
        <h2>.NET Developer</h2>
        <p>I'm looking for a new job! Available from June 2023.</p>
      </div>

      <div className={container} style={{ padding: '5%' }}>
        <AboutMe />
        <Skills data={data.allFile.nodes} />
        <Education data={data.allMdx.edges} />
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
      ...SkillsInfo
    }
    allMdx {
      ...EducationInfo
    }
  }
`

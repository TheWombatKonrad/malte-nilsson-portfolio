import React, { useEffect, useRef, useState } from 'react'
import Layout from '../components/layout'
import AboutMe from '../components/aboutMe'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Education from '../components/education/education'
import Portfolio from '../components/portfolio/portfolio'
import Experience from '../components/experience/experience'
import Header from '../components/header'
import Introduction from '../components/introduction'
import { container, info, introduction } from './index.module.css'
import { graphql } from 'gatsby'
import { Seo } from '../components/seo'

const IndexPage = ({ data }) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ])

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight])
      }

      window.addEventListener('resize', handleWindowResize)

      console.log(windowSize)
      console.log(typeof window)

      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    }
  }, [windowSize])

  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef()

  useEffect(() => {
    if (!headerRef?.current?.clientHeight) {
      return
    }
    setHeaderHeight(headerRef?.current?.clientHeight)
  }, [headerRef?.current?.clientHeight])

  return (
    <>
      {windowSize[0] < '800' && (
        <header className={introduction} id='header' ref={headerRef}>
          <Header />
        </header>
      )}
      <Layout height={windowSize[1] - headerHeight}>
        {windowSize[0] >= '800' && (
          <div
            className={container}
            style={{ height: '100vh', display: 'flex' }}
          >
            <div className={introduction}>
              <Introduction />
            </div>
          </div>
        )}

        <div className={container} id={info}>
          <AboutMe />
          <Skills data={data.allFile.nodes} />
          <Education />
          <Portfolio />
          <Experience />
          <Contact />
        </div>
      </Layout>
    </>
  )
}

export const Head = () => (
  <Seo>
    <script type='application/ld+json'>
      {`
    {
      "@context": "https://schema.org",
      "@type": "CV",
      "url": "https://malte-nilsson.se",
      "name": "Malte Nilsson || .NET Developer"
    }
  `}
    </script>
  </Seo>
)

export default IndexPage

export const query = graphql`
  query {
    allFile {
      nodes {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
        name
      }
    }
  }
`

import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { skillsList } from './skills.module.css'

const Skills = ({ data }) => {
  return (
    <div>
      <h2>Skills</h2>
      <ul className={skillsList}>
        {data.map((node) => (
          <li key={node.name}>
            <GatsbyImage
              alt={node.name}
              image={getImage(node.childImageSharp)}
              style={{
                width: '40px'
              }}
            />
          </li>
        ))}
        {/* //TODO fix formatting */}
      </ul>
    </div>
  )
}

export default Skills

export const query = graphql`
  fragment SkillsInfo on allFile {
    nodes {
      childImageSharp {
        gatsbyImageData(width: 50, placeholder: BLURRED)
      }
      name
    }
  }
`

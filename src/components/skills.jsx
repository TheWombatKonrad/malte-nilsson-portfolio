import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { infoBox } from './layout.module.css'

const Skills = ({ data }) => {

  return (
    <div className={infoBox}>
      <h3>Skills</h3>
      <ul style={{ 
        listStyleType: 'none', 
        display: 'flex', 
        justifyContent: 'space-evenly', 
        flexWrap: 'wrap', 
        marginLeft: '-40px' 
        }}>
        {data.map((node) => (node.childImageSharp != null && (
          <li key={node.name} style={{margin: '2px'}}>
            <GatsbyImage
              alt={node.name}
              image={getImage(node.childImageSharp)}
              style={{
                width: '40px'
              }}
            />
          </li>)
        ))}
        {/* //TODO fix formatting */}
      </ul>
    </div>
  )
}

export default Skills

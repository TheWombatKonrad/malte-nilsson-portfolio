import * as React from 'react'
import { infoBox } from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Contact = () => {
  return (
    <div className={infoBox}>
      <h3>Contact Me</h3>
      <p>Email: malte.nilsson95@gmail.com</p>
      <ul style={{display: 'flex', listStyleType: 'none', marginLeft: '-40px' }}>
        <li>
          <a href='https://www.linkedin.com/in/malte-nilsson/' target="_blank" rel="noreferrer"> 
            <StaticImage 
            alt='LinkedIn'
            src='../images/linkedin-icon-original.png'
            aspectRatio={1 / 1}
            loading='blurred'
            style={{width: '20px'}}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact

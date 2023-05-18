import * as React from 'react'
import { infoBox } from './layout.module.css'

const Contact = () => {
  return (
    <div className={infoBox}>
      <h3>Contact Me</h3>
      <p>Email: malte.nilsson95@gmail.com</p>
      <p>LinkedIn:<a href='https://www.linkedin.com/in/malte-nilsson/' target="_blank" rel="noreferrer">Malte Nilsson</a></p>
    </div>
  )
}

export default Contact

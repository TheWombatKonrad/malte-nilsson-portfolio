import * as React from 'react'
import { infoBox } from './layout.module.css'

const AboutMe = () => {
  return (
    <div className={infoBox}>
      <h3>About Me</h3>
      <p>
        I am studying to be a .NET developer at Teknikhögskolan and will
        be graduating in June, 2023.
      </p>
      <p>
        I'm inquisitive and am looking to develop my skills as a programmer.
      </p>
    </div>
  )
}

export default AboutMe

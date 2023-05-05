import * as React from 'react'
import Nonsultant from './nonsultant'
import Volvo from './volvo'
import { infoBox } from '../layout.module.css'

const Experience = () => {
  return (
    <div className={infoBox}>
      <h3>Experience</h3>
      <ul>
        <li>
          <Nonsultant />
        </li>
        <li>
          <Volvo />
        </li>
      </ul>
    </div>
  )
}

export default Experience

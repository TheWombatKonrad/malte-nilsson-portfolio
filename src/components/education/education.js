import * as React from 'react'
import BiologyMaster from './biologyMaster'
import DotNetDevloper from './dotNetDeveloper'
import { infoBox } from '../layout.module.css'

const Education = () => {
  return (
    <div className={infoBox}>
      <h3>Education</h3>
      <ul>
        <li>
          <BiologyMaster />
        </li>
        <li>
          <DotNetDevloper />
        </li>
      </ul>
    </div>
  )
}

export default Education

import * as React from 'react'
import CustomModal from '../customModal'

const DotNetDevloper = () => {
  return (
    <CustomModal
      link={'.NET Developer'}
      date={'September 2021 - June 2023'}
      title={'.NET Developer'}
    >
      <p>
        I'm studying to become a .NET developer at Teknikhögskolan. 
        Other than the courses listed below, I also did 23 weeks in total of internship
        at Nonsultant and Volvo.
      </p>

      <ul>
        <li>C#, programming in a context</li>
        <li>Databses in a context</li>
        <li>Frontend</li>
        <li>Backend</li>
        <li>Cloud-based applications</li>
        <li>Producing and delivering software</li>
      </ul>
    </CustomModal>
  )
}

export default DotNetDevloper

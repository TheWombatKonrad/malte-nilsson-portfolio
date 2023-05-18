import * as React from 'react'
import CustomModal from '../customModal'

const DotNetDevloper = () => {
  return (
    <CustomModal
      link={'Specgurka'}
      date={'date'}
      title={'Specgurka (BDD Gherkin Specflow)'}
    >
      <p>
        While doing an intership at Nonsultant, me and another student, with
        support form our supervisor, created Specgurka. It's a tool for syncing
        Gherkin feature files and Specflow test results to different services,
        e.g. Azure DevOps.
      </p>

      <a href='https://github.com/Nonsultant/specgurka' target="_blank">
        Link to the project on Github
      </a>
    </CustomModal>
  )
}

export default DotNetDevloper

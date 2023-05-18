import * as React from 'react'
import CustomModal from '../customModal'

const BiologyMaster = () => {
  return (
    <CustomModal
      link={'Internship at Volvo'}
      date={'February 2023 - May 2023'}
      title={'Intership at Volvo'}
    >
      <p>
        I did an intership at Volvo where I migrated a part of an existing application
        from AngularJS to React, integrating the new React component in the old code.
      </p>
    </CustomModal>
  )
}

export default BiologyMaster

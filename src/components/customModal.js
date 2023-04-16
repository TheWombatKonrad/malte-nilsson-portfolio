import * as React from 'react'
import { btn, arrow, modalStyle } from './customModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faXmark } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

const customStyles = {
  content: {
    height: '50%',
    width: '50%',
    margin: 'auto',
    padding: 0,
    borderRadius: '20px',
    boxSizing: 'border-box',
    position: 'fixed'
  }
}

const CustomModal = ({ date, title, children }) => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button type='text' onClick={openModal} className={btn}>
        <span>{title}</span>
        {/* <FontAwesomeIcon icon={faArrowRightLong} className={arrow} /> */}
      </button>
      <Modal
        contentLabel={title}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={modalStyle}>
          <div>
            <p>{date}</p>
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <h3>{title}</h3>
          {children}
        </div>
      </Modal>
    </div>
  )
}

export default CustomModal

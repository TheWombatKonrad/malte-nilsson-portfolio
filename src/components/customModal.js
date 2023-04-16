import * as React from 'react'
import { Button } from 'antd'
import { btn, arrow, modalStyle } from './layout.module.css'
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
      <Button
        type='text'
        onClick={openModal}
        className={btn}
        style={{ backgroundColor: 'inherit', color: 'inherit' }}
      >
        <span>{title}</span>
        <FontAwesomeIcon icon={faArrowRightLong} className={arrow} />
      </Button>
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

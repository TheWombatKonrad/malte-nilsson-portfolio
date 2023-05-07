import React, { useEffect, useState } from 'react'
import { btn, innerModal } from './customModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

const customStylesBig = {
  content: {
    height: '300px',
    width: '50%',
    margin: 'auto',
    padding: 0,
    borderRadius: '20px',
    boxSizing: 'border-box',
    position: 'fixed'
  }
}

const customStylesSmall = {
  content: {
    height: '300px',
    width: '90%',
    margin: 'auto',
    padding: 0,
    borderRadius: '20px',
    boxSizing: 'border-box',
    position: 'fixed'

    // top: '90%',
    // left: '90%',
    // right: 'auto',
    // bototm: 'auto',
    // marginRight: '-90%',
    // transform: 'translate(-90%, -90%)'
  }
}

if (typeof document != 'undefined') {
  Modal.setAppElement(document.getElementsByTagName('html'))
}
let subtitle

const CustomModal = ({ date, title, children }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [customStyles, setCustomStyles] = useState({})
  let startingWindowSize = [undefined]

  if (typeof window !== 'undefined') {
    startingWindowSize = [window.innerWidth, window.innerHeight]
  }

  const [windowSize, setWindowSize] = useState(startingWindowSize)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    if (windowSize[0] >= '800') {
      setCustomStyles(customStylesBig)
    } else {
      setCustomStyles(customStylesSmall)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowSize])

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
        <span>
          {title} <FontAwesomeIcon icon={faAnglesRight} size='sm' />
        </span>
      </button>
      <Modal
        contentLabel={title}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={innerModal}>
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

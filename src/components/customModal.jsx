import React, { useEffect, useState } from 'react'
import { btn, innerModal } from './customModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

const customStylesBig = {
  height: 'fit-content',
  width: '600px',
  margin: 'auto',
  padding: 0,
  borderRadius: '20px',
  boxSizing: 'border-box',
  border: 0,
  background: 'rgb(28, 27, 41)'
}

const customStylesSmall = {
  height: 'fit-content',
  margin: 'auto',
  padding: '0',
  borderRadius: '20px',
  boxSizing: 'border-box',
  border: 0,
  background: 'rgb(28, 27, 41)'
}

if (typeof document != 'undefined') {
  Modal.setAppElement(document.getElementsByTagName('html'))
}

const CustomModal = ({ link, date, title, children }) => {
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

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button type='text' onClick={openModal} className={btn}>
        <span>
          {link} <FontAwesomeIcon icon={faAnglesRight} size='sm' />
        </span>
      </button>
      <Modal
        contentLabel={title}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: { boxSizing: 'border-box', zIndex: 2, backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: customStyles
        }}
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

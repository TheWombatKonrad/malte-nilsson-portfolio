import * as React from 'react'
import { introPhoto } from './header.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >
        <div style={{ alignSelf: 'flex-end' }}>
          <h1>Malte Nilsson</h1>
          <h2>.NET Developer</h2>
        </div>

        <StaticImage
          alt='A picture of me, Malte, outside.'
          src='../images/profile-pic.jpg'
          aspectRatio={1 / 1}
          loading='blurred'
          className={introPhoto}
        />
      </div>
      <p
        style={{
          background: 'rgb(28, 27, 41, 0.7)',
          padding: '5px'
        }}
      >
        I'm looking for a new job! Available from June 2023.
      </p>
    </>
  )
}

export default Header

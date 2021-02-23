import React from 'react'
import Link from 'next/link'
import styles from './logo.scss'

export default () => (
  <div className='logo'>
    <style jsx>{styles}</style>
    <Link href='/'>
      <a aria-label="Link to home" rel="noopener">
        <img src='/static/logo-dark.svg' alt='HackYourFuture Copenhagen' />
      </a>
    </Link>
  </div>
)

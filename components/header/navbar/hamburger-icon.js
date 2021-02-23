import React from 'react'
import styles from './hamburger-icon.scss'

export default props => (
  <button aria-label="Open or close navigation" className='toggle-side-drawer' onClick={props.drawerClickHandler}>
    <style jsx>{styles}</style>
    <div />
    <div />
    <div />
  </button>
)

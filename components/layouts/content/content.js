import styles from './content.scss'
import React from 'react'

export default ({ children, id = '' }) => {
  return (
    <div className='content' id={id}>
      <style jsx global>{`
        .content h3 {
          margin: 18px 0 18px;
        }
      `}</style>
      <style jsx>{styles}</style>
      {children}
    </div>
  )
}

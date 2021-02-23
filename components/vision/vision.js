import React from 'react'
import styles from './vision.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default ({ title, content }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <section className='vision'>
        <h2>{title}</h2>
        <span>{documentToReactComponents(content)}</span>
      </section>
    </>
  )
}

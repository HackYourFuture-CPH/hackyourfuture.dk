import React from 'react'
import styles from './mission.scss'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default ({ title, content }) => {
  return (
    <>
      <style jsx>{styles}</style>
      {/* I hate this way of doing things */}
      <style jsx global>{`
        section.mission p {
          margin-bottom: 12px;
        }
        section.mission ul {
          list-style: disc;
          padding-left: 22px;
        }
        section.mission ul li {
          padding-left: 8px;
        }
      `}</style>
      <section className='mission'>
        <h2>{title}</h2>
        <span>{documentToReactComponents(content)}</span>
      </section>
    </>
  )
}

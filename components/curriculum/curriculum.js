import styles from './curriculum.scss'
import React from 'react'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

const Curriculum = () => {
  const curriculumEntryId = '5iMQfQkm1sJoBdiBZArNLE'

  const { content: modules } = useContentfulEntryId(curriculumEntryId)

  return (
    <div className='curriculum'>
      <style jsx>{styles}</style>

      {modules && (
        <ul>
          {modules.curriculum.map(module => (
            <li key={module.id}>
              <h3>{module.title}</h3>
              <span>{module.duration}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Curriculum

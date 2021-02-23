import React from 'react'
import styles from './values.scss'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

export default () => {
  const valuesEntryId = 'FDxG0apeGQvjsl4SkD1Gh'
  const values = useContentfulEntryId(valuesEntryId).content
  console.log(values)

  return (
    <>
      <style jsx>{styles}</style>
      {values && (
        <section className='partners'>
          <h2>{values && values.title}</h2>
          <ul>
            {values.values.map(({ fields }) => (
              <li>
                <h3>{fields.title}</h3>
                <p>{fields.content}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

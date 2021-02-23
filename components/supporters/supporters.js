import React from 'react'
import styles from './supporters.scss'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

export default () => {
  const supportersEntryId = '6GolXCuI0MOw3jVbSF9myN'
  const supporters = useContentfulEntryId(supportersEntryId).content

  return (
    <>
      <style jsx>{styles}</style>
      {supporters && (
        <section className='supporters'>
          <h2>{supporters.title}</h2>
          <ul>
            {supporters.images.map(supporterImages => (
              <li>
                <a target='_blank' href={supporterImages.fields.link}>
                  <img
                    src={supporterImages.fields.image.fields.file.url}
                    alt={supporterImages.fields.image.description}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

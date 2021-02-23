import React from 'react'
import styles from './sponsors.scss'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

export default () => {
  const sponsorsEntryId = '1guGHAmcIjYSvNOQ6NH6ur'
  const sponsors = useContentfulEntryId(sponsorsEntryId).content

  return (
    <>
      <style jsx>{styles}</style>
      {sponsors && (
        <section className='sponsors'>
          <h2>{sponsors.title}</h2>
          <ul>
            {sponsors.images.map(sponsorImages => (
              <li>
                <a target='_blank' href={sponsorImages.fields.link}>
                  <img
                    src={sponsorImages.fields.image.fields.file.url}
                    alt={sponsorImages.fields.image.description}
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

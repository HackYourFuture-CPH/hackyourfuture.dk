import React from 'react'
import styles from './press.scss'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

export default () => {
  const sponsorEntryId = 'LaHuXx6t6IJgELkgbsKhr'
  const pressPieces = useContentfulEntryId(sponsorEntryId).content

  return (
    <div className='press'>
      <style jsx>{styles}</style>
      <h2 className='center'>{pressPieces && pressPieces.headline}</h2>
      <div className='wrapper'>
        {pressPieces &&
          pressPieces.assets !== 0 &&
          pressPieces.assets.map(({ fields, sys }) => (
            <div className='press-item' key={sys.id}>
              <a
                aria-label='Media link'
                rel='noopener'
                target='_blank'
                href={fields.description}
              >
                <img alt={fields.title} src={fields.file.url} />
              </a>
            </div>
          ))}
      </div>
    </div>
  )
}

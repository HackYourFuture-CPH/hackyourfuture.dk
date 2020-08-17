import React from 'react'
import styles from './partners.scss'
import { useContentfulEntryId } from '../../contentful-hooks'

export default () => {
  const partnersEntryId = '3CEyXyD8onF9pJd1cMboxP'
  const sponsorEntryId = '3H7wmN35ixihm684bqeSea'
  const partners = useContentfulEntryId(partnersEntryId).content
  const sponsor = useContentfulEntryId(sponsorEntryId).content

  return (
    <>
      <style jsx>{styles}</style>
      {sponsor && partners &&
        <section className='partners'>
          <h2 className='center'>Sponsored by</h2>
          <a
            aria-label='Partner link'
            rel='noopener'
            target='_blank'
            href={sponsor.url}
            className='mollerske'
          >
            <img
              alt='Den A.P. Møllerske Støttefond logo'
              src={sponsor.logo.fields.file.url}
            />
          </a>
          <div>
            <h2 className='center'>{partners.headline}</h2>
            <div className='wrapper'>
              {partners.list.map(partner => (
                <div className='partner' key={partner.fields.id}>
                  <a
                    aria-label='Partner link'
                    rel='noopener'
                    target='_blank'
                    href={partner.fields.url}
                  >
                    <img alt={partner.fields.title} src={partner.fields.logo.fields.file.url} width='150vw' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    </>
  )
}
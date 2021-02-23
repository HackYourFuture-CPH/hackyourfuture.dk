import React from 'react'
import styles from './partners.scss'
import { useContentfulEntryId } from '../../contentful/contentful-hooks'

export default () => {
  const partnersEntryId = '01vaQwhCtWAhCpI24OScSq'
  const partners = useContentfulEntryId(partnersEntryId).content
  // console.log(partners)

  const goldPartners =
    partners &&
    partners.partners.filter(partner => partner.fields.type === 'gold')
  const silverPartners =
    partners &&
    partners.partners.filter(partner => partner.fields.type === 'silver')
  const bronzePartners =
    partners &&
    partners.partners.filter(partner => partner.fields.type === 'bronze')

  return (
    <>
      <style jsx>{styles}</style>
      {partners && (
        <section className='partners'>
          <h2>{partners.title}</h2>
          <ul>
            {goldPartners.map(partner => (
              <li className={partner.fields.type}>
                <a target='_blank' href={partner.fields.link}>
                  <img
                    src={partner.fields.logo.fields.file.url}
                    alt={partner.fields.logo.title}
                  />
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {silverPartners.map(partner => (
              <li className={partner.fields.type}>
                <a target='_blank' href={partner.fields.link}>
                  <img
                    src={partner.fields.logo.fields.file.url}
                    alt={partner.fields.logo.title}
                  />
                </a>
              </li>
            ))}
          </ul>
          <ul>
            {bronzePartners.map(partner => (
              <li className={partner.fields.type}>
                <a target='_blank' href={partner.fields.link}>
                  <img
                    src={partner.fields.logo.fields.file.url}
                    alt={partner.fields.logo.title}
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

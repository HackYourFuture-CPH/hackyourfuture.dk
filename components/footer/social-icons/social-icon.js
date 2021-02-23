import React from 'react'
import Icon from '@mdi/react'
import {
  mdiFacebook,
  mdiGithubCircle,
  mdiLinkedin,
  mdiTwitter,
  mdiYoutube
} from '@mdi/js'

import styles from './social-icon.scss'

const SocialIcons = () => (
  <div className='social-icons'>
    <style jsx>{styles}</style>
    <a
      href='https://www.youtube.com/channel/UCgWEvuTAyg7qbWcq0M8w4EQ'
      title='youtube'
      target='_blank'
      rel='noopener'
      aria-label='Hackyourfuture-cph Facebook link'
    >
      <Icon color='#fff' size={1} path={mdiYoutube} />
    </a>
    <a
      href='https://www.facebook.com/hackyourfuturecopenhagen/'
      title='facebook'
      target='_blank'
      rel='noopener'
      aria-label='Hackyourfuture-cph Facebook link'
    >
      <Icon color='#fff' size={1} path={mdiFacebook} />
    </a>
    <a
      href='https://twitter.com/HackyourfutureC'
      title='twitter'
      target='_blank'
      rel='noopener'
      aria-label='Hackyourfuture-cph Twitter link'
    >
      <Icon color='#fff' size={1} path={mdiTwitter} />
    </a>
    <a
      href='https://www.linkedin.com/school/hackyourfuture-copenhagen/'
      title='linkedin'
      target='_blank'
      rel='noopener'
      aria-label='Hackyourfuture-cph LinkedIn link'
    >
      <Icon color='#fff' size={1} path={mdiLinkedin} />
    </a>
    <a
      href='https://github.com/hackyourfuture-cph'
      title='github'
      target='_blank'
      rel='noopener'
      aria-label='Hackyourfuture-cph github link'
    >
      <Icon color='#fff' size={1} path={mdiGithubCircle} />
    </a>
  </div>
)

export default SocialIcons

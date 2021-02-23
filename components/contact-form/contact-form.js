import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiSend } from '@mdi/js'
import styles from './contact-form.scss'

export default ({ email }) => {
  const [inputEmail, setInputEmail] = useState('')

  return (
    <form
      action={`https://formspree.io/${email}`}
      className='contact-form'
      method='POST'
      autoComplete='off'
    >
      <style jsx>{styles}</style>

      {/*name*/}
      <label>
        <input type='text' name="name" required='required' />
        <span>Name</span>
      </label>

      {/*email*/}
      <label>
        <input
          className={inputEmail.length > 0 && 'hasText'}
          onChange={event => setInputEmail(event.target.value)}
          type='email'
          required='required'
          name="email"
        />
        <span>email</span>
      </label>

      {/*message*/}
      <label>
        <input type='text' name="message" required='required' />
        <span>message</span>
      </label>

      <button aria-label="Contact us" type='submit'>
        <Icon color='white' size={1} path={mdiSend} /> SEND
      </button>
    </form>
  )
}

import styles from './news-letter.scss'

export default () => (
  <form
    action='https://hackyourfuture.us18.list-manage.com/subscribe/post?u=3d0c0055da1f780c58ef56540&amp;id=e9cde1fe9a'
    method='post'
  >
    <style jsx>{styles}</style>
    <h3 className='header'>Sign up for our newsletter!</h3>
    <div className='description'>
      We will send a monthly update on the project and what new cool things we
      are doing at HackYourFuture.
    </div>
    <div className='submit-form'>
      <input
        type='email'
        name='EMAIL'
        className='email'
        placeholder='you@example.com'
      />
      <input
        type='submit'
        value='Subscribe'
        name='subscribe'
        className='submit'
      />
    </div>
  </form>
)

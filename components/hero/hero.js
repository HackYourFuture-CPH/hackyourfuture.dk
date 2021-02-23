import styles from './hero.scss'
import Flip from 'react-reveal/Flip'

const Hero = () => (
  <div className='container'>
    <style jsx>{styles}</style>

    <Flip top>
      <img src='/static/logo-light.svg' alt='HackYourFuture Copenhagen' />
    </Flip>
  </div>
)

export default Hero

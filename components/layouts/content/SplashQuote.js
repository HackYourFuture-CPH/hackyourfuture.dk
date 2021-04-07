import styles from './SplashQuote.scss'
export default function SplashQuote(props) {
  if (props.content) {
    return (
      <div className="splash-quote dark-theme-quote">
        <h3>{props.content}</h3>
        <h4>{props.heading}</h4>
        <style jsx>{styles}</style>
      </div>
    )
  }
    return (
      <div className="splash-quote">
        <h2>We believe talented newcomers are a great opportunity for society and we are here to give them a helping hand to make use of their potential.</h2>
        <style jsx>{styles}</style>
      </div>
    )
  }
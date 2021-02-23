import SocialIcons from './social-icons/social-icon'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

// Styling
const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#293a7d',
    paddingTop: '5px'
  },
  info: {
    fontSize: '0.8rem',
    color: '#fff',
    margin: '0.5rem 0.4rem'
  },
  link: {
    color: '#fff'
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      className={classes.footer}
    >
      <Grid item lg={8} md={7} sm={12}>
        <Typography align='center' className={classes.info}>
          Foreningen HackYourFuture | CVR: 38533193 |{' '}
          <Link
            className={classes.link}
            rel='noopener'
            href='mailto:cph@hackyourfuture.dk'
            style={{ wordBreak: 'break-word' }}
          >
            cph@hackyourfuture.dk
          </Link>
        </Typography>
      </Grid>
      <Grid item lg={4} md={5} sm={12}>
        <SocialIcons />
      </Grid>
    </Grid>
  )
}

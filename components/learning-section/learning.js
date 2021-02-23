import React from 'react'
import modulesTopics from './modules-topics'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { height } from '@material-ui/system'

// styling
const useStyles = makeStyles({
  title: {
    color: '#293a7d',
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  avatar: {
    borderRadius: '0px',
    width: '5rem',
    height: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 'bold',
    margin: '10px 0 10px 0'
  },
  descriptionOne: {
    textAlign: 'center',
    fontFamily: 'Work Sans, sans-serif'
  },
  descriptionTwo: {
    fontFamily: 'Work Sans, sans-serif',
    margin: '10px 0 50px 0'
  }
})

export default function learning({ title, content, skills }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <Typography className={classes.descriptionTwo}>{content}</Typography>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='stretch'
        spacing={3}
      >
        {skills.map(topic => {
          return (
            <Grid item key={topic.fields.title} lg={4}>
              <Avatar
                alt={topic.fields.image.fields.title}
                src={topic.fields.image.fields.file.url}
                className={classes.avatar}
              />
              <Typography className={classes.name}>
                {topic.fields.title}
              </Typography>
              <Typography className={classes.descriptionOne}>
                {topic.fields.content}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

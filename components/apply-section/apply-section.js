import React from 'react'
import '../content/_apply'
import { sectionTitle, contentOne, contentTwo } from '../content/_apply'

import { useContentfulEntryId } from '../../contentful/contentful-hooks'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// styling
const useStyles = makeStyles({
  stylePadding: {
    padding: '0px'
  },
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'green'
  },
  title: {
    color: '#293a7d',
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  listText: {
    fontFamily: "'Work Sans', 'sans-serif'",
    fontSize: '1rem'
  }
})

export default function applySection({ content, applyChecks, pointingImage }) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div>
        <style jsx global>
          {`
            #apply p {
              font-size: 1rem;
            }
          `}
        </style>
        {documentToReactComponents(content)}
      </div>

      <Grid
        container
        className={classes.stylePadding}
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Grid item md={7}>
          <Container className={classes.stylePadding}>
            <List className={classes.listText}>
              {applyChecks.map(check => {
                return (
                  <ListItem key={check} className={classes.stylePadding}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>&#10004;</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.listText}
                      disableTypography={true}
                    >
                      {check}
                    </ListItemText>
                  </ListItem>
                )
              })}
            </List>
          </Container>
        </Grid>
        <Grid item md={5}>
          <img alt={pointingImage.alt} src={pointingImage.src} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

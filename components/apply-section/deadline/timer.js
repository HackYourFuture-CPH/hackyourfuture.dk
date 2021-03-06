import React from 'react'
import countdown from './countdown'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // display: 'inline-block',
    float:"right",
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    marginRight:"2em",
    padding: 0,
    paddingTop:"0.25em",
    '@media (max-width:769px)': {
      float: 'none',
      marginBottom:"2em",
      marginRight:"0"
    }
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0rem',
    margin: '0 auto',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '45%',
    '@media (max-width:414px)': {
      boxSizing: 'content-box'
    }
  },
  listItem: {
    padding: '0 1rem 0 1rem ',
    marginBottom: 0,
    '@media (max-width:375px)': {
      padding: '0 0.8rem 0 0.8rem ',
      width: '140%'
    }
  },
  primaryText: {
    color: '#fff',
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'left',
    '@media (max-width:325px)': {
      fontSize: '1.6rem'
    }
  },
  secondaryText: {
    fontFamily: "'Space Mono', 'monospace'",
    fontSize: '1rem',
    color: "#fff",
    textAlign: 'center',
    '@media (max-width:325px)': {
      fontSize: '0.7rem'
    }
  }
}))

export default function Timer(props) {
  const classes = useStyles()
  const dateToCountDownFrom = props.date
  const countDownComponents = countdown(dateToCountDownFrom)
  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {countDownComponents.map(timeUnit => (
          <ListItem className={classes.listItem} key={timeUnit}>
            <ListItemText
              classes={{
                primary: classes.primaryText, //count of time unit
                secondary: classes.secondaryText // time unit name: days, hours, min, sec
              }}
              primary={timeUnit[0]}
              secondary={timeUnit[1]}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

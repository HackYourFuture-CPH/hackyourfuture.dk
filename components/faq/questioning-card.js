import React from 'react'
import { RichText } from '../../contentful/contentful-custom-rendering'

// import material UI
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Box from '@material-ui/core/Box'

// styling
const useStyles = makeStyles(theme => ({
  box: {
    margin: 'auto'
  },
  question: {
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '1.1rem',
    color: 'black'
  },
  answer: {
    fontFamily: 'Work Sans, sans-serif',
    color: 'black',
    fontWeight: 'bold'
  },
  card: {
    marginBottom: '10px',
    borderRadius: '0'
  },
  expand: {
    transform: 'rotate(-90deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(0deg)'
  }
}))

export default function Questioning(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box display='flex'>
          <Box flexGrow={1} className={classes.box}>
            <Typography className={classes.question}>
              {props.question}
            </Typography>
          </Box>
          <Box>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography className={classes.answer}>
            <Box>{<RichText document={props.answer} />}</Box>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

import React from 'react'
import Questioning from './questioning-card'
import { useContentfulLinkedContent } from '../../contentful/contentful-hooks'

// imports material UI
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

// styling
const useStyles = makeStyles(() => ({
  title: {
    color: '#293a7d',
    fontSize: '2rem',
    fontFamily: "'Space Mono', 'monospace'",
    fontWeight: 'bold',
    marginBottom: '30px'
  }
}))

export default function faq() {
  const classes = useStyles()
  const { content: questions } = useContentfulLinkedContent('list', '64KfjkPUfxgRzZU3AAj42L')

  return (
    <React.Fragment>
      <style jsx>{`
      @media screen and (max-width: 768px) {
        .faq-heading {
          text-align: center;
          margin-bottom: 1.5em;
        }
      }
      `}</style>
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {questions &&
        <Container>
          {questions.map(faq => (
            <Questioning key={faq.fields.id} question={faq.fields.question} answer={faq.fields.answer} />
          ))}
        </Container>}
    </React.Fragment>
  )
}

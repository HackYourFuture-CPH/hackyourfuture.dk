describe('Validate Apply Form - With Errors', () => {
  it('open apply page', () => {
    cy.visit('/apply').contains('Application Form')
  })

  it('find apply form', () => {
    cy.get('#apply-for-class')
      .scrollIntoView()
      .wait(5000)
      .should('be.visible')
  })

  const getIframe = () => {
    return cy
      .get('iframe')
      .scrollIntoView()
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap)
  }

  it('requires filled out all data', () => {
    cy.log('filling out first name')
    getIframe()
      .find('label')
      .contains('First Name')
      .click()
      .type('Test First Name')

    cy.log('filling out last name')
    getIframe()
      .find('label')
      .contains('Last Name')
      .click()
      .type('Test Last Name')

    cy.log('filling out email')
    getIframe()
      .find('label')
      .contains('Email')
      .click()
      .type('test@mail.com')

    cy.log('filling out phone number')
    getIframe()
      .find('label')
      .contains('Phone Number')
      .click()
      .type('28123456')

    cy.log('filling out municipality')
    getIframe()
      .find('label')
      .contains('Which municipality (kommune) do you live in?')
      .click()
      .type('Copenhagen')

    cy.log('filling out residence status')
    getIframe()
      .find('label')
      .contains('Asylum seeker')
      .click()

    cy.log('filling out educational background')
    getIframe()
      .find('label')
      .contains('Your Educational Background')
      .click()
      .type('Bachelor of Economics')

    cy.log('filling out gender')
    getIframe()
      .find('label')
      .contains('Female')
      .click()

    cy.log('submit form')
    getIframe()
      .find('form')
      .submit()
  })

  it('shows error messsage', () => {
    cy.wait(5000)
      .get('iframe')
      .scrollIntoView()
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .then(cy.wrap)
      .find('#errorLi')
      .should('be.visible')
      .contains('There was a problem with your submission')
  })
})

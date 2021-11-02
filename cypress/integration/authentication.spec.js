/// <reference types="cypress" />

const faker = require('faker')

describe('Authentication page', () => {
  it('Creating a new account', () => {
    cy.visit('/')
    cy.get('.login').click()
    cy.get('input[name=email_create]').type(
      faker.internet.email().toLowerCase()
    )

    cy.get('button[name=SubmitCreate]').click()

    cy.url().should('include', 'account-creation')

    cy.log('**Personal Information data**')
    cy.get('input#id_gender1').check()
    cy.get('input[name=customer_firstname]').type(faker.name.firstName())
    cy.get('input[name=customer_lastname]').type(faker.name.lastName())
    cy.get('input[name=passwd').type(faker.internet.password())
    cy.get('select#days').select('2')
    cy.get('select#months').select('May')
    cy.get('select#years').select('1990')

    cy.log('**Your Adress data**')
    cy.get('input#firstname').type(faker.name.firstName())
    cy.get('input#lastname').type(faker.name.lastName())
    cy.get('input#address1').type(faker.address.streetAddress())
    cy.get('input#city').type(faker.address.city())
    cy.get('select#id_country').select('United States')
    cy.get('select#id_state').select('Georgia')
    cy.get('input#postcode').type(faker.address.zipCode('#####'))
    cy.get('input#phone_mobile').type(faker.phone.phoneNumber('0165#######'))
    cy.get('button#submitAccount').click()

    cy.log('**Account successfully created**')

    cy.url().should(
      'eq',
      Cypress.config().baseUrl + 'index.php?controller=my-account'
    )
  })
})

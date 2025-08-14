/// <reference types="cypress" />

// Elementos
const elements = {
  buttons: {
    register: '#btnRegister',
    login: '#btnLogin'
  }
}
  
//Métodos e ações

Cypress.Commands.add('cadastro', (nome, email, senha) => {
    cy.get('.fa-lock').should('be.visible').click()
  if (nome) {
    cy.get('#user').type(nome);
  }
    cy.get('#email').type(email)
  if(senha) {
    cy.get('#password').type(senha);
  }
    cy.get(elements.buttons.register).click()
})

Cypress.Commands.add('Login', (email, senha) =>{
    cy.get('.fa-user').should('be.visible').click()
    if(email){
      cy.get('#email').type(email);
    }
    if(senha) {
      cy.get('#password').type(senha);
  }
    cy.get(elements.buttons.login).should('be.visible').click()
})

Cypress.Commands.add('checkRegisterSucess', (name) =>{
   cy.get('.swal2-popup').should('be.visible')
   cy.get('#swal2-html-container', { timeout: 3000 }).should('have.text', `Bem-vindo ${name}`);
})

Cypress.Commands.add('ErrorMessageRegister', (mensagem) => {
   cy.get(".errorLabel").should('have.text', mensagem)

})
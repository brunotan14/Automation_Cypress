/// <reference types="cypress" />
import pages from '../support/pages/pagesexport'
describe('Testes da área de login', () =>{
    beforeEach(() =>{
        cy.visit('./')
    })
    it('Teste 1 - Login realizado com sucesso', () =>{
      pages.Login('9vH9o@example.com', '123456')
      cy.get('.swal2-popup').should('be.visible')
    })
    it('Teste 2 - Login realizado com usuário não cadastrado', () =>{
      pages.Login('davidsilva@example.com', '123456')
      cy.get('.swal2-popup').should('be.visible')
    })
    it('Teste 3 - login com dados não preenchidos', () => {
      pages.Login('', '')
      cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    })
    
})
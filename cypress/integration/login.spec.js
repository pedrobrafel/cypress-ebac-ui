///  <reference types="cypress" />

context('Funcionalidade Login', function() {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    });
    
    afterEach(() => {
        cy.screenshot()
    });
    
    
    it('Deve fazer login com sucesso', () => {
       
       
        cy.get('#username')
        .type('aluno_ebac@teste.com')

        cy.get('#password')
        .type('teste@teste.com')

        cy.get('.woocommerce-form > .button')
        .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
        .should('contain','Olá, aluno_ebac')
    });

    it('Deve exibir uma mensagem de erro quando o usuario ou senha for invalido', () => {

        cy.get('#username')
        .type('aluno@teste.com')

        cy.get('#password')
        .type('teste')

        cy.get('.woocommerce-form > .button')
        .click()

        cy.get('.woocommerce-error')
        .should('contain','Erro: a senha')

    });

});
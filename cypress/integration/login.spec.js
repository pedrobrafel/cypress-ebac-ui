///  <reference types="cypress" />

context('Funcionalidade Login', function() {
    
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
       
        cy.get('#username')
        .type('aluno_ebac@teste.com')

        cy.get('#password')
        .type('teste@teste.com')

        cy.get('.woocommerce-form > .button')
        .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
        .should('contain','Olá, aluno_ebac')
    });

    it.only('Deve exibir uma mensagem de erro quando o usuario ou senha for invalido', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')

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
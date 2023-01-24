///  <reference types="cypress" />

context('Funcionalidade: Login', function() {
   
    let usuario = 'aluno_ebac@teste.com'
    let senha = 'teste@teste.com'

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
    }); 
    
    it('Deve fazer login com sucesso',  function() {
       
        cy.get('#username')
        .type(usuario)

        cy.get('#password')
        .type(senha)

        cy.get('.woocommerce-form > .button')
        .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
        .should('contain','Olá, aluno_ebac')
    });

    it('Deve exibir uma mensagem de erro quando o usuario for inválido', function() {

        cy.get('#username')
        .type('aluno@teste.com')

        cy.get('#password')
        .type(senha)

        cy.get('.woocommerce-form > .button')
        .click()

        cy.get('.woocommerce-error')
        .should('contain','Erro: a senha')

    });

    it('Deve exibir uma mensagem de erro quando a senha for inválida', function() {

        cy.get('#username')
        .type(usuario)

        cy.get('#password')
        .type('teste')

        cy.get('.woocommerce-form > .button')
        .click()

        cy.get('.woocommerce-error')
        .should('contain','Erro: a senha')

    });
});
///  <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade: Login', function () {

    let usuarioTeste = 'aluno_ebac@teste.com'
    let senhaTeste = 'teste@teste.com'

    beforeEach(() => {
        cy.visit('my-account/')
    });

    it('Deve fazer login com sucesso', function () {

        cy.get('#username')
            .type(usuarioTeste)

        cy.get('#password')
            .type(senhaTeste)

        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, aluno_ebac')
    });

    it('Deve fazer login com sucesso - Arquivo de Dados Fixture', function () {

        cy.get('#username')
            .type(perfil.usuario)

        cy.get('#password')
            .type(perfil.senha)

        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, aluno_ebac')
    });

    it.only('Deve fazer login com sucesso - Fixture direto no cenario', function () {

        cy.fixture('perfil').then(dados => {
            cy.get('#username')
                .type(dados.usuario)

            cy.get('#password')
                .type(dados.senha, { log: false })

            cy.get('.woocommerce-form > .button')
                .click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
                .should('contain', 'Olá, aluno_ebac')
        })

    });


    it('Deve exibir uma mensagem de erro quando o usuario for inválido', function () {

        cy.get('#username')
            .type('aluno@teste.com')

        cy.get('#password')
            .type(senhaTeste)

        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.woocommerce-error')
            .should('contain', 'Erro: a senha')

    });

    it('Deve exibir uma mensagem de erro quando a senha for inválida', function () {

        cy.get('#username')
            .type(usuarioTeste)

        cy.get('#password')
            .type('teste')

        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.woocommerce-error')
            .should('contain', 'Erro: a senha')

    });
});
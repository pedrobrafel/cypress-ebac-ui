///  <reference types="cypress" />

describe('Funcionalidade: Endereços de Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('my-account/')
        cy.fixture('perfil').then(dados => {
            cy.login('aluno_ebac@teste.com', 'teste@teste.com')
        })

    })

    it('Deve cadastrar endereço de faturamento com sucesso', () => {

    });
});
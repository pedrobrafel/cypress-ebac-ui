///  <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade: Endereços de Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('my-account/')
        cy.fixture('perfil').then(dados => {
            cy.login('pedro_teste@ebac.com', 'pedro@ebac.com')
        })

    })

    it('Deve cadastrar endereço de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Pedro', 'Henrique', 'CIA', 'Brasil', 'Rua alguma', 'Acrelandia', 'Acre', '00000001', '11999999999', 'pedro_teste@ebac.com')

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

    it('Deve cadastrar endereço de faturamento com sucesso - Usando arquivos de dados ', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empresa,
            dadosEndereco[0].pais,
            dadosEndereco[0].endereco,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].cep,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email)

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});
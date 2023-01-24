///  <reference types="cypress" />


describe('Funcionalidade Páfina de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .eq(2) // 3 item do array,lista
            .click()
    });

    it.only('Deve adicionar um produto ao carrinho', () => {

        let qnt = 5

        cy.get('[class="product-block grid"]')
            .eq(1)
            .click()

        cy.get('[class="variable-item button-variable-item button-variable-item-S"]').click()
        cy.get('[class="variable-item button-variable-item button-variable-item-Blue"]').click()
        cy.get('.input-text').clear().type(qnt)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qnt)
        cy.get('.woocommerce-message').should('contain', qnt + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    })


});

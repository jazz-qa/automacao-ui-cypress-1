/// <reference types="cypress"/>

describe('Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Selecionar um produto da lista', () => {
        cy.get('.product-block > .block-inner > .image > .product-image > .image-hover').first().click()
        cy.get('.product_title').should('exist')
    });
});

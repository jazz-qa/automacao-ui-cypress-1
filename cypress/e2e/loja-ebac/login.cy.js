/// <reference types="cypress"/>

describe('Login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('Login com sucesso', () => {
        cy.get('#username').type('jazzqa@gmail.com')
        cy.get('#password').type('abc123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta')
    });

    it('Usuário com senha inválida', () => {
        cy.get('#username').type('jazzqa@gmail.com')
        cy.get('#password').type('abc122')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail')
    });
    
    it('Usuário inválido', () => {
        cy.get('#username').type('jazzk@gmail.com')
        cy.get('#password').type('abc123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
    });
});

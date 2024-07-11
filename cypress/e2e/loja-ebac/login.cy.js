/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('Login', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('Login com sucesso - com massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta')
    });

    it.only('Login com sucesso - com cy.fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log:false})
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain', 'A partir do painel de controle de sua conta')
        })
        
    });
});

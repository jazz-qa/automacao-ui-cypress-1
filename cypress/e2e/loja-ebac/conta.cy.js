/// <reference types="cypress"/>

describe('Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
    });
    it('Completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Jessica', 'Oliveira', 'jazzQA')
        cy.get('.woocommerce-message').should('contain', "Detalhes da conta modificados com sucesso.")
    });
});
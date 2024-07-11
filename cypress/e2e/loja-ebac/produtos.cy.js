/// <reference types="cypress"/>
import ProdutosPage from "../../support/page-objects/produtos.page"

describe('Produtos', () => {
    beforeEach(() => {
        ProdutosPage.visitarUrl()
    });
    it('Selecionar um produto da lista', () => {
        ProdutosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        cy.get('.product_title').should('exist')
    });

    it.only('Buscar um produto com sucesso', () => {
        ProdutosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group').click()
        cy.get('.product_title').should('exist')
    });

    it('Visitar a página do produto', () => {
        
    });

    it('Adicionar produto ao carrinho', () => {
        
    });
});

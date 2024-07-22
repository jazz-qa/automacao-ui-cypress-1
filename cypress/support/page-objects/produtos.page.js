class ProdutosPage {
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
        .click()
    }

    visitarProduto() {
        
    }

    addProdutoCarrinho() {

    }
}

export default new ProdutosPage()
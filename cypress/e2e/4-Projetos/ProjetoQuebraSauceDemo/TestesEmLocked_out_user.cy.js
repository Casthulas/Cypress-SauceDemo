describe("O Teste vai efetuar login no site, incluir todos os itens no carrinho e finalizar a compra.", ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    }),
    it('Tenta efetuar login > Recebe Locked out', ()=>{
        cy.get('[data-test="username"]').clear().type('locked_out_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    })
})
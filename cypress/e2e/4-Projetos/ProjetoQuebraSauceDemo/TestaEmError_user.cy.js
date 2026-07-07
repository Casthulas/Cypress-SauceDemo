describe('Testes no usuário error_user', ()=>{

    beforeEach('Login', ()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').clear().type('error_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

    }),
    afterEach('Logout',()=>{
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
    }),
//****************************************
// user: error_user
// 
// Comportamento esperado:
// Falhar em todos os testes possíveis.
//  
//*************************************** 
    it('Loga, verifica as imagens e sai', ()=>{
        cy.checaImagem();
    }),
    it('Loga e finaliza a compra sem nenhum item no carrinho', ()=>{
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.contains('Thank you for your order!').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();
        cy.contains('Products').should('be.visible');
    })
    it('Coloca todos os itens no carrinho e finaliza a compra', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.checaImagem();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear().type('teste');
        cy.get('[data-test="lastName"]').clear().type('teste');
        cy.get('[data-test="postalCode"]').clear().type('1234567');
        cy.get('[data-test="continue"]').click();
        cy.contains('$140.34').should('be.visible');
        cy.get('[data-test="finish"]').click();
        cy.contains('Thank you for your order!').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();
        cy.contains('Products').should('be.visible');

    }),
    it('Coloca todos os itens no carrinho e remove todos os itens antes de seguir para o próximo passo', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="remove-sauce-labs-onesie"]').click();
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();

    }),
    it('Compra sem itens no carrinho?', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="remove-sauce-labs-onesie"]').click();
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear().type('teste');
        cy.get('[data-test="lastName"]').clear().type('teste');
        cy.get('[data-test="postalCode"]').clear().type('1234567');
        cy.get('[data-test="continue"]').click();
        cy.contains('$0.00').should('be.visible');
        cy.get('[data-test="finish"]').click();
        cy.contains('Thank you for your order!').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();
        

    })
    it('Verifica se consigo remover todos os itens no carrinho', ()=>{
        
        //adiciona
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        //remove
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="remove-sauce-labs-onesie"]').click();
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();

    }),
    it('Comprar sem First Name Falha', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear().type(' ');
        cy.get('[data-test="firstName"]').clear();
        cy.get('[data-test="lastName"]').clear().type('teste');
        cy.get('[data-test="postalCode"]').clear().type('1234567');
        cy.get('[data-test="continue"]').click();
        cy.contains('Error: First Name is required').should('be.visible');
    })
    it('Comprar sem Last Name Falha', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear().type('Teste');
        cy.get('[data-test="lastName"]').clear().type(' ');
        cy.get('[data-test="lastName"]').clear();
        cy.get('[data-test="postalCode"]').clear().type('1234567');
        cy.get('[data-test="continue"]').click();
        cy.contains('Error: Last Name is required').should('be.visible');
    }),
    it('Comprar sem Postal Code Falha', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear().type('Teste');
        cy.get('[data-test="lastName"]').clear().type('Teste');
        cy.get('[data-test="postalCode"]').clear().type(' ');
        cy.get('[data-test="postalCode"]').clear();
        cy.get('[data-test="continue"]').click();
        cy.contains('Error: Postal Code is required').should('be.visible');
    })

})
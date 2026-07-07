describe("O teste vai logar em todos os usuários", ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    })
    it('Efetua Login > Coloca todos os itens no carrinho > visualiza o carrinho > checa o valor total > vai para o checkout > finaliza a compra > volta para os produtos > efeuta logout',()=>{
        cy.get('[data-test="username"]').clear().type('standard_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        
    }),
    it('Tenta efetuar login > Recebe Locked out', ()=>{
        cy.get('[data-test="username"]').clear().type('locked_out_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    }),
        it('Efetua Login > Coloca todos os itens no carrinho > visualiza o carrinho> checa o valor total > Vai para o checkout > tenta visualizar a compra > falha > efetua logout', ()=>{ 
        cy.get('[data-test="username"]').clear().type('problem_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.checkImagem();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear().type('teste');
        cy.get('[data-test="lastName"]').clear().type('teste');
        cy.get('[data-test="postalCode"]').clear().type('1234567');
        cy.get('[data-test="continue"]').click();
        cy.contains('Error: Last Name is required').should('be.visible');
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
    }),
        it('efetuaLogin 4', ()=>{
        cy.get('[data-test="username"]').clear().type('performance_glitch_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
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
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
    }),
        it('efetuaLogin 5', ()=>{
        cy.get('[data-test="username"]').clear().type('error_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
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
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
    }),
 it('efetuaLogin 6', ()=>{
        cy.get('[data-test="username"]').clear().type('visual_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
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
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
    })



})
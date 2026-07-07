describe("Testes no usuário Problem", ()=>{
    beforeEach('efetua login', ()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').clear().type('problem_user');
        cy.get('[data-test="password"]').clear().type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    }),
    afterEach('efetua logout', ()=>{
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
    }),
    it('Imagens estão corretas', ()=>{
        
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'src', '/assets/sauce-backpack-1200x1500-CjRW-Djj.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').should('have.attr', 'src', '/assets/bike-light-1200x1500-DxcZRFOA.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').should('have.attr', 'src', '/assets/bolt-shirt-1200x1500-mR0ldpVS.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('have.attr', 'src', '/assets/sauce-pullover-1200x1500-BfbI-PSd.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').should('have.attr', 'src', '/assets/red-onesie-1200x1500-BrSuq0ic.jpg')
        
        cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('have.attr', 'src', '/assets/red-tatt-1200x1500-E-qp6aYf.jpg')
        
    }),
    it('Imagens são Bulldogs', ()=>{
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'src', '/assets/sl-404-Cq1a9k9X.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').should('have.attr', 'src', '/assets/sl-404-Cq1a9k9X.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').should('have.attr', 'src', '/assets/sl-404-Cq1a9k9X.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('have.attr', 'src', '/assets/sl-404-Cq1a9k9X.jpg')

        cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').should('have.attr', 'src', '/assets/sl-404-Cq1a9k9X.jpg')
        
        cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('be.visible');
        cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('have.attr', 'src', '/assets/sl-404-Cq1a9k9X.jpg')

    }),
    it('Verifica se consigo incluir todos os itens no carrinho', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    }),
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

        it('Coloca todos os itens que funcionam no carrinho e finaliza a compra', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear().type('teste');
        cy.get('[data-test="lastName"]').clear().type('teste');
        cy.get('[data-test="postalCode"]').clear().type('1234567');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.contains('Thank you for your order!').should('be.visible');
        cy.get('[data-test="back-to-products"]').click();
        cy.contains('Products').should('be.visible');

    }),
     it('Coloca todos os itens que funcionam no carrinho e não finaliza a compra sem lastName', ()=>{
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').clear().type('teste');
        cy.get('[data-test="lastName"]').clear().type('teste');
        cy.get('[data-test="postalCode"]').clear().type('1234567');
        cy.get('[data-test="continue"]').click();
        cy.contains('Error: Last Name is required').should('be.visible');
    })
})
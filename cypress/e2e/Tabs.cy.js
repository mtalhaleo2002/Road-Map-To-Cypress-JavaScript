describe('Handling Tabs',() => {

    it.skip('Approach 1',() => {
        // So we can open window with the same tab by changing the attribute 

        cy.visit('https://the-internet.herokuapp.com/windows')  //Parent Tab

        cy.get('.example >a').invoke('removeAttr','target').click()  // Clicking On Link

        // Invoke method shoude be used for remove attributes 
        // So after geeting this element , we're removing this element,so the target attribute will remove in Developer Html doc

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);  //5 Seconds wait
        
        // Operations
        cy.go('back');  // Back to parent tab        
     })

    //  By default Cypress cannot the handle the child window like new tabs 

    it('Approach 2',() => {
        // So we can open window with the same tab by using jQuery functin in JavaScript by access the anchor href tag 

        cy.visit('https://the-internet.herokuapp.com/windows')  //Parent Tab

        cy.get('.example >a').then((e) => {

            let url = e.prop('href');

            cy.visit(url);

            // So In this particular case , first we get an element of New tab and that tab stores in 'e' function
            // And statement says that url is equal to new tab properties of href ,it means that url are now this href link which is in anchor tag 
            // Now in the next statement ,you visit url ,not parent tab , your change url ink which you've mentioned in Query
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);  //5 Seconds wait
        
        // Operations
        cy.go('back');  // Back to parent tab    
        
        // LIMITATION :
        // If the url in 'e' function does contain its original domain or url then this will not work , it means that when your href is competely diferent than original domain and in the next assertion where it should be verified that 'url' doesn't contains its original value ,then this will not work
     })

    


    })

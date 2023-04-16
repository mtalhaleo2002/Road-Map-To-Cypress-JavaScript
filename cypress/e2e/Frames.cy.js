import 'cypress-iframe';    //Or you can use the method by using npm docs

describe("Handling Frames", () => {

    it('Approach 1', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        let iframe = cy.get("#mce_0_ifr")
           .its('0.contentDocument.body')
           .should('be.visible')
           .then(cy.wrap);

        //    So basically first we create a function iframe in which we get the element of iframe , then we can go with '.its' method in which call (0) means first document which are in the iframe and then specify the file that we access the body of contentDocument
        // And then check should method used for check the visibility
        // And then method apply , in which cy.wrap .It means that all of the body elements which rae wrap in cy.wrap.

           iframe.clear()
           .type("Welcome")
           .type('{selectall}');

           cy.get("[aria-label='Bold']").click();

        //    Now we can create custom commands by open command.js

    })

    it('Approach 2 -- By Using Custom Command', () => {

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe('#mce_0_ifr').clear()
        .type("Welcome")
        .type('{selectall}');    //We can already create custom command which I use in here and pass the id  (locator of iframe)

        cy.get("[aria-label='Bold']").click();

        // So this is another approach by creating  custom command

     })

     it.only('Approach 3 -- By Using Cypress-iframe plugin', () => {
        // By install iframe plugin

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr')     //Load the frame
        // So this command is basically loading the frame,but we're not interacting with that .

        cy.iframe('#mce_0_ifr')
        .clear()
        .type("Welcome")
        .type('{selectall}'); 

        cy.get("[aria-label='Bold']").click();

     })

})
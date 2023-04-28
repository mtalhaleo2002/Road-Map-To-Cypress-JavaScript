
// go()     //With this command,we can navigate between multiple pages
//reload()  //Reload the page
describe('MySuite', () => {

    it('NavigationTest', () => {
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq','Your Store');   //Home Page
        // title() method returns the title of the page 
        cy.get(':nth-child(7) > .nav-link').click();
        cy.get("div[id='content'] h2").should('have.text','Cameras');  //Cameras Page

        cy.go('back');   // Go back to Home Page
        cy.title().should('eq','Your Store');
        // ('back') for back the page indicates the left arrow on your browser to move back

        cy.go('forward');  //Again back to Cameras Page
        cy.get("div[id='content'] h2").should('have.text','Cameras');
        // ('forward') for forward the page indicates the right arrow on your browser to move forward/next to the page

        cy.go(-1);  //Home Page
        // This command will also go back to Home page
        cy.title().should('eq','Your Store');

        cy.go(1);  //Cameras Page
        cy.get("div[id='content'] h2").should('have.text','Cameras');

        cy.reload();  //This command will reload the page 
        // By default Cypress will reload the page when you move back and forwards the page
    })
})
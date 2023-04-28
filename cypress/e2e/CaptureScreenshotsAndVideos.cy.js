describe('MySuite', () => {
    it('Capture Screeshots & Videos', () => {
        // Cypress by default capture the screenshots whenever the failures are happened but if you want to capture screensht intentionally then use this command cy.screenshot().

        cy.visit("https://demo.opencart.com/");
        /*cy.screenshot("Home Page");  //Home Page Screenshot
        // It can capture screenshot and namin called Home Page
        cy.wait(3000);
        // Suppose I want to capture the logo and specific element of the page then: 
        cy.get('#logo').screenshot("logo");  //Capture Logo Screenshot*/

        // And by default these screenshots will be available in screenshot folder 

        // Automatically capture screenshot and video on failure --only when you execute through CLI (Command-line Interface/Command Prompt)

        cy.get("li:nth-child(7) a:nth-child(1)").click();  //Cameras Page
        cy.get("div[id='content'] h2").should('have.text','Tablets');
        // This will definitely failed my test and capture the screenshot and video
        // Only Command Prompt will capture the screenshots and videos when your test gonna failed , not through Cypress App

    })
})
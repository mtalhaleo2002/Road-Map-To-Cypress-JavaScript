import 'cypress-iframe'; 
require('@4tw/cypress-drag-drop') //This can be specify in testScripts or also commands.js 
// import '@4tw/cypress-drag-drop'  //This can also be used 

describe("Mouse Operations", () => {

    it('Mouse Hover', () => {
        // So whenever our mouse can hover the function , it populated other options, means when we fly our mouse arrow and at particular type of field , some elements are populated ,basically called mouse over action

        cy.visit("https://demo.opencart.com/")

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible')
    });

    it('Right Click', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        // Approach 1
        /*
        cy.get('.context-menu-one').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible');
        */

        // Approach 2
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
    });

    it('Double Click', () => {

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.wait(6000);

        cy.frameLoaded('#iframeResult');    //Load The Frame

        // Approach 1 -- trigger()
        /*
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');    //So this particular event will be trigered by event triggered method
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
        */

        // Approach 2 -- dblclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();    //So this particular event will be happen by event dblclick method
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    });

    it('Drag and Drop using plugin', () => {
        // First you can download plugin and follow the plugin docs

        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.wait(3000);
        cy.get('#box6').drag('#box106',{force:true})
        // Force parameter apply because sometimes cypress cannot held the test due to hidden some elements sometimes, so it will get that elements forcefully and then perform the drag and drop
    });

    it('Scrolling Page', () => {

        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");

        // Pakistan Flag
        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').scrollIntoView({duration:3000});   //Duration parameter slows down the process ,because you can see what happens?
        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').should('be.visible');

        // Afghanistan Flag
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').scrollIntoView({duration:3000}); 
        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').should('be.visible');

        cy.wait(2000);
        cy.get('#footer').scrollIntoView({duration:3000});

    });
})
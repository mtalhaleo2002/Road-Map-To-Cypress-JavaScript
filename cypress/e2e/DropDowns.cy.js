/* Automate DropDowns
------------------

In this we're going to test the drop down , you can see selected tag and and we can call them as a bootstrap or drop downs, sometimes we see a static drop downs, dynamic drop downs ,auto suggested drop downs, so we can see and test various types of drop downs.*/





/// <reference types = "Cypress"/>

describe('handle dropdowns', () => {

    it.skip('Dropdown with select', () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        // Select dropdown box 
        cy.get("#zcf_address_country")
        .select('Pakistan')
        .should('have.value','Pakistan')

    })  // '.skip' in it block skips the test in it  block.It can not be supported.

    it.skip ('Dropdown without select', () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        //In this we have different type of drop down which does'nt have any selected tag now we'll see how we can handle this  
        
        // Select dropdown box 
        cy.get("#select2-billing_country-container").click()

        // Select Input box under Drop Down Box
        cy.get(".select2-search__field").type('Pakistan').type('{enter}')
        // {enter} for press enter in web page 

        // Verify that that element have the same text 
        cy.get("#select2-billing_country-container").should('have.text','Pakistan')
        // So you know that 'have.value' can use in basic dropdown and 'have.type' is use in that type of drop down boxes which are currently test
    })

    it.skip('Auto-Suggestion Drop Down/Static Drop Down', () => {

        cy.visit("https://www.wikipedia.org/")
        // So now this is a web page in which you can search place like Karachi in drop down and you can check that auto suggestions are available 
        // In the suggestions ,I can verify like how many Auto searches are provide here, and we select one of the options from the list, and once you got selected ,we can verify that these thing open or not/ select or not 

        // Select Dropdown Box and Type 
        cy.get('#searchInput').type('Karachi')

        // Check How many suggestions & Contains/Check One Suggestion & Click and get the targeting page
        cy.get('.suggestion-link').contains('Karachi Kings').click()

    })


    it('Dynamic Drop Down', () => {

        cy.visit("https://www.google.com/")

        // Inspect search box and type 
        cy.get("input[name='q']").type('cypress automation')

        // Wait for 3 seconds
        cy.wait(3000)

        // Check that suggestions options should be 11
        cy.get("div.wM6W7d>span").should('have.length',12)

        cy.get("div.wM6W7d>span").each( ($el, index, $list ) => {
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })
        // We can check another suggestion inspect , and then check under div tag has a same class which I was mention in assertion , and also check span(which is a child tag of div ).Here div is a tag name and class is an attribute

        // And if you want to iterate all the options one after another ,we can also write jQuery function, this is an alternative way which is avialable 

        // '.each' is a function in which have 3 parameters 
        // .each(($el, index, $list).First Parameter is $ el means element ,second index of the array like 1,2,3 and so on , third $list means arrays that how many suggestions are thre in array 

        // FIrst in this assertions , we have all the suggestion in one element {div.wM6W7d>span},so now it will get all elements into this array {$list}, now from this array  by using {index} , it will read one by one into this particular variable($el) and that variable/element{$el} we are getting the text which is equal to this or not,we are comparing if it is equal and get that element and perform the click action
        // This is basically jQuery function

        // Check value of cypress autmation tutorial
        cy.get("input[name='q']").should('have.value','cypress automation tutorial')

    })
} )
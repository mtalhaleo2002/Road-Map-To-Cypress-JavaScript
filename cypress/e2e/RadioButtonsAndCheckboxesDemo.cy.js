/*Automate Radio Button & CheckBoxes
----------------------------------

We're gonna start different types of UI element.On the web page ,there are so many elements on web page , every element having their own attriibutes and their own behaviour and functionality*/

/// <reference types = "Cypress"/>
// I add this manually because you will automatically get all the auto suggestions 

describe('Check UI Elements', () => {


    it('Checking Radio Buttons' , () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Check Visibility of Radio Buttons
        cy.get("#female").should('be.visible')
        cy.get("#male").should('be.visible')

        // Selecting Radio Buttons
        cy.get("#male").check().should('be.checked')
        cy.get("#female").should('not.be.checked')

        cy.get("#female").check().should('be.checked')
        cy.get("#male").should('not.be.checked')
    })

    it('Checking Check Boxes', () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Check Visibility of Check Boxes
        cy.get("#monday").should('be.visible')

        // Selecting Single Check Box - monday
        cy.get("#monday").check().should('be.checked')

        // Unselecting Check Box
        cy.get("#monday").uncheck().should("not.be.checked")

        // Selecting All The Checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // Select First and Last Check Boxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    })
})
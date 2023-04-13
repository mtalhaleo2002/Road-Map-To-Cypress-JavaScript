/*
Alerts
------

Cypress is by default handle the alerts.We don't need to write any separate script for that .
But for sometimes if you want to do some validations on a alert window like what is a message displayed on alert window or if you want to pass some text ,we have to write a code and we have to write certain events.
So whenever the alert window is open ,Cypress will automatically close it , we don't need to write a separate code for that ,but if you want to do some validations on a alert window ,we have to rise or we have to trigger some event through our cypress and that particular event will validate .
So if I look cypress official docs ,and search cypress events you can check through docs. 
Event is basically before and after alert window is open  the event will be triggered and docs provide events like app events , you see cypress events and so many types of events.
By rising these events ,we will be able to validate the alert boxes ,for example If I just look through the docs,
(uncaught:exception) (window:confirm)especially this is use for confirmational at window and (window:alert)so this we will use for alerted type of window 
There are so many types of events they have provided ,we have to trigger then we will able to validate alert windows 


*/



describe('Alerts', () => {



    // 1) Javascript Alert: It will have some text and 'OK'button
    it.skip('JS Alert', () => {

        // Here you can find 3 different types of Alerts
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // Js Alert Button Element Click
        cy.get("button[onclick='jsAlert()']").click()
        // We don,t need to any action to write more code.Cypress will automatically close the alert
        // Ok so now it is started see now we are clicking on the button but we will not see any alert window here, we successfully click on that button but we haven't seen a talent window ,why?
        // Because alert window is automatically handled by the cypress so we can see the result 
        // Once you can clicked on alert, the cypress will automatically close its alert window


        // But I want to validate that ,whenever I want to validate the alert window, so I want to validate this message so for that what we can do  we need to trigger one event
        
        cy.on('window:alert',(t) => {
            // Here we have cy.on method to trigger the event 
            // window:alert is the event ,so this ia basically an alert window,and we will store that window in function called(t)
            // (t) is an arrow function in this t is representing some alert window now this is a simple variable we are passing into method 
            // Now inside this we need to write /validate  one assertion like expect :
            expect(t).to.contains('I am a JS Alert')
        })

        // Alert window automatically closed by cypress

        // Result Verifying
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })



    // 2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' buttons

    it.skip('JS Confirm Alert-Ok Button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        // You know cypress will handle alerts by default with 'Ok' button but if you want to close the alert with 'Cancel' button, we need to validate the event.
        cy.on('window:confirm',(t) => {
            // So here another event confirm for second type of alerts
            expect(t).to.contains('I am a JS Confirm')
        })
        // Cypress Automatically closed alert window by using ok button-default
        // And you checked the screen results: You clicked ok.

        // Result Verifying
        cy.get("#result").should('have.text','You clicked: Ok')
    })

    it.skip('JS Confirm Alert-Cancel Button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click();

        // You know cypress will handle alerts by default with 'Ok' button but if you want to close the alert with 'Cancel' button, we need to validate the event.
        cy.on('window:confirm',(t) => {
            // So here another event confirm for second type of alerts
            expect(t).to.contains('I am a JS Confirm');
        })
        
        cy.on('window:confirm', () => false);  //Cypress closes alert window using cancel button
        // And if I type true ,by default it will be go through with Ok button

        // Result Verifying
        cy.get("#result").should('have.text','You clicked: Cancel')
    })



    // 3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' and 'Cancel' buttons
    
    it.skip('JS Prompt Alert Button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win) => {

            cy.stub(win, 'prompt').returns('Welcome')

        })
        // We casn use method 'window' because this event should be triggered before opening the alert window .

        // If window is open ,then I,m capturing the window in this variable (win).
        // And this is a prompt method , and we use a sub method called stub.
        // Inside this we have to pass this window and also specify what type of window it is , that is called prompt and then we have to pass some value into the input box and called one method called returns and here we can pass the text

        cy.get("button[onclick='jsPrompt()']").click()

        // Cypress will automatically close prompted alert - it will use OK button

        cy.get('p#result').should('have.text','You entered: Welcome')
    })


    

    // 4) Authenticated Alert is having some kind f username and password, once you are authenticated then you are able to log into the application. 

    it.only('Authenticated Alert', () => {

        // Approach 1 (It can do with the url,you see that )
        /*
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth: 
        {username: "admin",
        password: "admin"}
            } );

        cy.get("div[class='example'] p").should('have.contain',"Congratulations")
        */

        // Approach 1 (It can do along with the url,you see that URl )
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth") 

        cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    })
} )
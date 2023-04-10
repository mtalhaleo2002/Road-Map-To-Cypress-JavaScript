
describe("Assertions demo", () => {

    it("Implicit Assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")   //To launch our web page

        // Suppose I want to test the url that url contains some text or not , or url equal to my expected url ,so I want to verify I want to add some assertions on this particular url 

        // 'should' 'and' . We will use both of these in implicit assertions

        /*  // In this 'url' is a function 
        // .should is a keyword and here we can pass some parameters so what we are expecting in this url and what should the url ,should contains that we need to specify two parameters we have to pass. The First parameter of key that is include , 'include' is a keyword and (we,ll see that what are the keywords that supported in should ) ,what the url should include that expected value we have to specify as part of second parameter so i'm expecting this should be part of the url. 

        cy.url().should('include','orangehrmlive.com')
        // And This Is One Implicit Assertion
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //So I want to check equality the same url i want to check my expected url 
        cy.url().should('contain','orangehrm')*/

        //Basically 'contain' and 'include' doing the same thing 

              // Here's another face of coding

        /*cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')*/

        // If you want to add multiple assertions then you can simply say and instead of should :

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm')   //This is a negative assertion in which that url does'nt contain greenhrm


        // Suppose I want to add more assertions on the title of the web page so first we need to call the title of the current webpage 

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')   

        // And if you want the title logo , then not doing this inspect criteria(like you go to inspect ,Selector hub like things) you can see that in Cypress bowser window where test runs , test run window have a scope like sign, in left top view of the test window you can click on that and then the arrow of your mouse drop down their in main logo ,you can see the path of get logo on top.

        cy.get('.orangehrm-login-branding > img').should('be.visible')   // 'be.visible' parameter basically check the get element is visible or not .It can be any element.

        cy.get('.orangehrm-login-branding > img').should('exist')   //There is one more method available that is 'exist' parameter . This will check the element exist on page or not.   

            //  Second face of coding 

        cy.get('.orangehrm-login-branding > img').should('be.visible')   //Logo Visible Or Not
        .and('exist')   //Logo Exist Or Not

        // Some time we need to check multiple web elements .On my web page ,how many no of links are presented ,so we use xpath and by using anchor tag , we can capture all the links .But once you capture all the links then you can find out how many links are available according to my expectation is correct or not .

        cy.xpath('//a').should('have.length','5')   // No of Links
        // '//a' , so every link is having anchor tag and this '//a' match all the links available in the webpage

        // This particular statement will return all the all the links which are present on the webpage .But what is my assertion here I want to check how many links are present so i can use again '.should' assertion in which two parameters has passed 'have.length', '5' to check the no of links

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')  

        //This is actually chained CSS path ,ok so instead of doing this we can directly get the xpath pf this or css of this element and then we will try to use it so I,m gonna go back the web page and inspect the user name through selectorHub we get the xpath of Username.

        cy.get("input[placeholder='Username']").type("Admin")  //Provide a value into Input Box

        cy.get("input[placeholder='Username']").should('have.value','Admin')   //Value Checked

        //So these are all under Implicit Assertions

    })


    it("Explicit Assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")   //To launch our web page

        // Now I will provide username and password into the input boxes and we will do some kind of flow we will automate some steps and then we will add explicit assertions 

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        // When you can give them to username and password on the web page and click on sumit button then new window appears like a account open window and you can see that right on the page of the user something else like "Peter Philips" , and everytime you can login, everytime you see the different name 

        // So what we need to check that right username displayed or not 

        // Here we need JavaScript function
        // Explicit Assertions , we cannot directly use , we need to create our own customized functions because the explicit assertions are the customized assertions
        // They're not built in cypress
        // So let me create a variable 

        let expName = " % Collings"; 

        // So I want to check this name after successfully login or not .So for that we need to write JavaScript function, but we first get the locator of the element so move on to the account page and right you see username and and inspect process you can get the CSSSelector through SelectorHub .In which the actual user name presents

        cy.get(".oxd-userdropdown-name").then(  (x) => {

                let actName = x.text()

                // BDD Style
                expect(actName).to.equal(expName)
                expect(actName).to.not.equal(expName)

                // TDD Style
                assert.equal(actName,expName)
                assert.notEqual(actName.expName,'these numbers are not equal')
                 })

        // First we need to capture the element 
        // And here I want to store this element  in some variable and later I will get the test value of that element
        // So I can use 'then' keyword and then specify something called 'x'

        // Now create arrow function in parameter 'then'
        // Inside arrow function what I am going to do is whatever element I am capturing from this text/statement, I will store that element in a variable  ,let me call that as a 'x'

        // So this elemnt  [cy.get(".oxd-userdropdown-name")] is stored in this variable and that variable , I'm passing as a parameter into the function

        // Now we will capture the text from this variable ,there is the actual name of the person and then we will compare with your expected name.
        
        // So how to capture the text value from this variable?

        //    Simply we can say x.text() .This is JS function .This will return you the actual name of the person which is there in your application 

        // Here we know the actual and expected name ,now I'm going to use bdd assertions 'expect'
        
        //  expect(actName).to.equal(expName).And this is one explicit type assertion  in BDD approach

        // And similarly we also have negative /opposite assertions that have in explicit assertions (you can see the explicit assertion no two).There are so many options provides you can see on official docs of cypress assertions and these assertions are basically derived from chai library/framework
        // Chai is a JS framework ,so all assertions are implemented in cypress

        // Refer this official docs to check particular parameters are supported in every type of Assertions

    })

})
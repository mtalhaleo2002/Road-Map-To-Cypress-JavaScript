
describe('MyTestSuite', () => {

    /*

    // Direct Access from fixture files
    it('FixturesDemoTest', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then( (data) => {

            cy.get("input[placeholder='Username']").type(data.username);
        cy.get("input[placeholder='Password']").type(data.password);

        cy.get("button[type='submit']").click();

        cy.get(".oxd-topbar-header-title").should('have.text',data.expected)

        // This is how we can capture the data from the fixture file and use it in your test

        })

    })
    
    */


    // Access through Hook -- for multiple it blocks

    let userdata;
    before( () => {

        cy.fixture("orangehrm").then((data) => {
            userdata = data;
        })
    })
    // We already captured the data into the variable that is userdata , so this userdata we have to refer here in following 'it' block

    it('FixturesDemoTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();
        cy.get(".oxd-topbar-header-title").should('have.text',userdata.expected)
    })
    // So in the actually 'it' block , we're not loading the fixture file for that we have created  separate before block which is basically a hook , which will execute only once before executing all 'it' blocks, so this is another approach 

    // So this is how we can parameterize the data into the test by using fixture file 

    // Suppose I want to test the same thing with multiple sets of data so I want to test the logins with multiple sets of data and two things we need to do , so we need to add some more data like multiple username and multiple passwords and at the same time we need to also repeat this test multiple times with different dets of data and that is basically called as a DATA DRIVEN TESTING. Now we'll see how we can achieve this , so how we can add multiple data sets in the json file called fixture file and based on the data how many times we can repeat this with multiples test 

    // So you created one more file in fixture folder 
    // I created a file name orangehrm2
});
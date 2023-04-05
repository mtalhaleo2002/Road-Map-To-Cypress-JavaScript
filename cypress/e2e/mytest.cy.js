



describe('My First Test', () => {
  it('verify title-positive', () => {


    // So this 'cy' is the root model of Cypress,by using 'cy' we be able to access all the commands from Cypress 


    // So 'title' is method ,in this 'title', 'title' will be written and once you return the 'title' that 'title' should be equal to something else we need to compare that.
    // So for that we need to call one more method called 'should'.
    // And here we need to specify one keyword called equal 'eq'( as a parameter).
    // And here in the second parameter, we can specify the title of the current web page 

    // You can use single/double quotations in parameters and others ,no difference in JavaScript

    // cy.title().should('eq','OrangeHRM')
    // This is one Assertin


      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')

  })


  // Here one test should be passed and one test should be failed

  it('verify title-negative', () => {     
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM123')
  })


  // And when you open cypress in browser, you see specs on browser mytest.cy.js .You can click it once ,it will start running your test. And You can check that one test should be passed and second one got failed











//  Suppose you have to write another test same thing you can just copy here and write another entry 

})


// So One Spec file have nth number of suite number of describe sections or we can say describe block can have multiple it blocks and every it block is representing one test














// When you come to browser there are two types of specs
  // 1: Scaffold example specs (When you create specs , sample examples files should you see in E2E testing)


  //  2: Create new empty spec (When you want to ceate a spec, and you can give any name to the file with extension spec cy.js)   Or Either you can create empty specs directly under your E2E folder.

// Extension Spec File ('fileName.cy.js')
      //  .cy.js is extension
describe("MyTestSuite", () => {
  // Before it block test, there's a pre-requisit, which you have mention before executing all the tests and that you can specify as a Hook
  // There are Four different types of Hook:
  // 1: before
  // 2: after
  // 3: beforeEach
  // 4: afterEach

  // And (before and after) hooks can be executed only once before and after all executions of 'it' blocks
  // beforeEach hook can be execute multiple times before 'it' block
  // afterEach hook can be execute multiple times after 'it' block

  before(() => {
    cy.log("******    Launch App   ******");
  }); //You can see that only once at start of the test

  after(() => {
    cy.log("******    Close App   ******");
  });
  //You can see that only once at last of the test

  beforeEach(() => {
    cy.log("******    Login   ******");
  });

  afterEach(() => {
    cy.log("******    Logout   ******");
  });

  it("Search", () => {
    cy.log("******    Searching   ******");
  });

  it.skip("Advanced Search", () => {
    cy.log("******    Advanced Searching   ******");
  });

  it.only("Listing Product", () => {
    cy.log("******    Listing Product   ******");
  });
//   Tags 
// There are multiple tags ,but we discuss only two tags:
// 1: .only   (for only one 'it' block executed)
// 2: .skip   (skip that one 'it' block ,it'll not executed)
});

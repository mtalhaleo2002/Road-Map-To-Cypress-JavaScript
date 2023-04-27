describe("MyTestSuite", () => {
  // So what is Fixtures?
  // Fixtures are basically files which contains a test data so which we can parameterize to the Cypress test .And most of time we use JSON formats ,and you can use other formats like CSV and HTML format ,different formats will be supported .But most popular is JSON file.
  it("DataDrivenTest", () => {
    // We have to iterate the loop which will capture every data in every time for that we have to use something

    cy.fixture("orangehrm2").then((data) => {
      // So from the fixture folder ,we're getting entire data (orangehrm2) into the variable called data.
      // Now this data contains three sets of data. Now we need to iterate each and every set by using data.foreach , in which arrow function is applied and that data variable in which data is stored comes into userdata another varaibale ,and this "userdata" we use in our script

      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );
      //   We're launching our application only one time

      data.forEach((userdata) => {
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        if (userdata.username == "Admin" && userdata.password == "admin123") {
          cy.get(".oxd-topbar-header-title").should(
            "have.text",
            userdata.expected
          ); //Dashboard Validation

          cy.get(".oxd-userdropdown-tab").click(); //logout
          cy.get(":nth-child(4) > .oxd-userdropdown-link").click(); //logout
        } else {
          cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should(
            "have.text",
            userdata.expected
          );
        }
      });
    });
  });
});

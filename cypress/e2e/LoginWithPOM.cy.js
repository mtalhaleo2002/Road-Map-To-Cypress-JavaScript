///<reference types="Cypress" />
import Login from "../PageObjects/LoginPage";
import Login2 from "../PageObjects/LoginPage2";

describe("pom", () => {
  // General Approach
  it("LoginTest", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
  });

  // Using POM With Approach 1
  it("LoginTest", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    const ln = new Login();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ln.verifyLogin();
  });

  // Using POM With Approach 2
  it("LoginTest", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    const ln = new Login2();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ln.verifyLogin();
  });

  // Using POM With Fixtures
  it.only("LoginTest", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.fixture("orangehrm").then((data) => {
      const ln = new Login();
      ln.setUserName(data.username);
      ln.setPassword(data.password);
      ln.clickSubmit();
      ln.verifyLogin();
    });
  });
});

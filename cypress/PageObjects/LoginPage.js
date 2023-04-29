class Login {
  setUserName(username) {
    cy.get("input[placeholder='Username']").type("Admin");
  }

  setPassword(password) {
    cy.get("input[placeholder='Password']").type("admin123");
  }

  clickSubmit() {
    cy.get("button[type='submit']").click();
  }

  verifyLogin() {
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
  }
}

export default Login;

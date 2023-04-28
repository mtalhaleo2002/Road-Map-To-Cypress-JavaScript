// Cick on link using label
// Over writing existing contains() command
// Re-usable Custom Command

describe("Custom Commands", () => {
  // We can create our own command "Custom Commands"
  // To do this cypress is provide one file called command.js in the support folder
  // You can see the example templates in the commands.js

  // Why we use custom command ?
  // I'll teach you by example that visit "https://demo.nopcommerce.com/" .You can see the the devices .You can access by one by one by using each and every selectorHub CSS.Sow that,s why we cannot again and agin relocate the element ,we need only one custom command to do this

  it("Handling Links", () => {
    cy.visit("https://demo.nopcommerce.com/");

    // Direct Approach -- without using Custom Commands
    // cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();

    // Using Custom Commands
    cy.clickLink("Apple MacBook Pro 13-inch");
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });

  it("Overwriting Existing Command", () => {
    cy.visit("https://demo.nopcommerce.com/");
    // Using Custom Commands
    cy.clickLink("APPLE MACBOOK PRO 13-INCH");
    // Why should they not handle that ?
    // Because we are passing the uppercase characters. contains method used in command.js looking for exact alphabets
    // So now I want to customize it or I want to override this contains method which will take alphabets like both uppercase or lowercase will should read some way
    // Basically this block can ignore case sensitivity of the label
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });

  it("Login Command", () => {
    cy.visit("https://demo.nopcommerce.com/");

    cy.clickLink("Log in"); //Custom Command
    cy.wait(3000);
    cy.loginapp("peviro8474@jobbrett.com", "peviro123"); // But before do this , you can register/Sign Up.

    cy.get(".ico-account").should("have.text", "My account");
  });
});

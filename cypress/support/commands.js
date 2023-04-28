// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types="Cypress" />
//for Cypress
// /<reference types="cypress-xpath"/>
// for xpath

Cypress.Commands.add("getIframe", (iframe) => {
  return cy
    .get("#mce_0_ifr")
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
}); //For example if we create multiple test iframes ,so for this we create custome commands for iframe.And this option is available in cypress.



// Create Custom Command for Clicking on Link Using Label
Cypress.Commands.add("clickLink", (label) => {
  //   In this "clickLink" is a custom command and we are passing the "label" into this by using arrow function
  cy.get("a").contains(label).click(); //   And inside this ,it is internally find all the links inside this {cy.get('a)}, inside this whichever link is having label or this link text.
}); //   And then it will perform the click action .contains method will check label all through the links in "a" tag.
// So this is method we use in to create custom commands
// And this ( label ) is case sensitive , it will be different from lowercase and uppercase character, you see the issue if you don,t exact type the same chracters.



// Overwriting Existing Command -- contains()
Cypress.Commands.overwriteQuery(
  "contains",
  function (originalFn, filter, text, options = {}) {
    // And by default contains() method by default have different parameters we need to pass the some parameters and after completion we need to create one simple function ,you cannot create Arrow function , because it can be support by call back function and call back function can good with simple function() .If you can use Arrow Function , you may have a type Error, so that,s why I can use simple function() to do this.
    // originalFn {Means Original Function finally after overwriting this function,
    // Determine if a filter argument was passed
    if (typeof text === "object") {
      // So basically we are checking something here , type of text is equals to object ( Means what ever the text we are passing inside the conatins method while calling this contains we need to pass some text  right ,and that is equal to object )
      options = text; // And then here we are storing the text into options
      text = filter; // And again the filter into text
      filter = undefined; // And here filter is we're making undefined
    }
    options.matchCase = false; // This is main part { What is this options} {The text whatever we,re passing here is method , by default it is true now we can said that it is false}
    let originalFn0 = originalFn.bind(this); // This line fixes the error () .By binding originalFn0 to this with the line let originalFn0 = originalFn.bind(this), we ensure that the query is properly bound to the Cypress context.
    return originalFn0(filter, text, options); // And now we return  function by passing the filter, text, options you can see we are again returning that function}
    // This is a default declaration of a contains method
  }
);
/*
        THIS IS ANTOTHER APPROACH OF CODING IF THIS NOT WORKS ,THEN YOU CAN USE THE FOLLOWING CODE

        The main problem is the this binding of originalFn not being set, can be fixed with originalFn.bind(this).Otherwise you see an issue.

        I took the parameter naming and resolution from the source, and defaulted the options (aka userOptions) to {} in case they are not passed.

        There is a weird thing - the prevSubject type Error is no longer present. That might have happened when contains changed from a command to a query, but haven't figured out how it get's the prevSubject(s) yet.
        In any case, this is passing with cy.get('a').contains('').

        */
// Cypress.Commands.overwriteQuery(
//     "contains",
//     function (contains, filter, text, userOptions = {}) {

//       // This is parameter resolution from Cypress v12.7.0 source
//       if (Cypress._.isRegExp(text)) {
//         // .contains(filter, text)
//         // Do nothing
//       } else if (Cypress._.isObject(text)) {
//         // .contains(text, userOptions)
//         userOptions = text
//         text = filter
//         filter = ''
//       } else if (Cypress._.isUndefined(text)) {
//         // .contains(text)
//         text = filter
//         filter = ''
//       }

//       userOptions.matchCase = false;

//       let contains0 = contains.bind(this)    // this line fixes the error

//       return contains0(filter, text, userOptions)
//     }
//   )
/* 
         Understand How This Code Work:

         This code overwrites the existing contains query command in Cypress with a custom implementation. It allows you to add additional options to the contains command, such as a matchCase option. The custom implementation also fixes the hasPreviouslyLinkedCommand error that can occur when overwriting contains command.

         The Cypress.Commands.overwriteQuery function is used to overwrite the contains query. The function takes two arguments: the name of the query to overwrite (contains in this case) and a callback function that implements the new behavior.

         The callback function takes four parameters: contains, filter, text, and userOptions. contains is the original contains query function that is being overwritten, filter is the element or selector to filter by, text is the text to search for, and userOptions is an object that contains any additional options passed to the contains command.

         The function checks the type of the text parameter to determine how to handle the arguments. If text is a regular expression, it does nothing. If text is an object, it assumes that the filter parameter was omitted and assigns text to filter. If text is undefined, it assumes that the filter parameter was omitted and assigns text to filter.

         The function then sets the matchCase option to false, which is the default value for this option. It creates a new function contains0 that is bound to the context (this) and returns the result of calling contains0 with the modified parameters.

         The let contains0 = contains.bind(this) line is necessary to fix the hasPreviouslyLinkedCommand error that can occur when overwriting the contains command. This error occurs because the contains function is already linked to other commands, and overwriting it directly can break those links. Binding contains to the context (this) creates a new function that preserves those links.
         */



// Customize Component For Login App
Cypress.Commands.add("loginapp", (email, password) => {
  cy.get("#Email").type(email);
  cy.get("#Password").type(password);
  cy.get("button[class='button-1 login-button']").click();
});

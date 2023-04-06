describe('CSSLocators',  () => {
    it("csslocators", () => {

        cy.visit("http://automationpractice.pl/index.php")

        // cy .get("#search_query_top").type("T-Shirts")  //id    tag is optional

        // cy .get(".search_query").type("T-Shirts")  //class   tag is optional

        // cy .get("[name ='search_query']").type("T-Shirts")  //attribute   tag is optional

        // cy .get(".search_query[name ='search_query']").type("T-Shirts")  //class with attribute   tag is optional

        cy .get("input.search_query[name ='search_query']").type("T-Shirts")  //tag with class and attribute   

        // .type is a method .So her I,m searching for T-Shirts.So in this we use id locator as a css

        cy.get("[name='submit_search']").click()

        //And we use the attribute for the submit on search box and we can inspect the submit element on inspect window and we find attribte and confirm through selector hub 

        //.click() . So this is how we perform the click action .

        // So after clicking on search buttn we need to some validations .For example type T-Shirts on search button and click then I want to verify the message.So to verify this message ,first we need to identify and then checkthe value is correct or not.Assertion we need to validate .So we need to inspect the element and process through selector hub .

        cy.get(".lighter").contains("T-Shirts")  // Assertion  

        // .comtains method used for verify some text in the element

        // So id ,class,attribute locator we have covered

    })
})
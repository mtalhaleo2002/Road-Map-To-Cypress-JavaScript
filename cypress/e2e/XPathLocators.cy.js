

describe('XpathLocators', () => {

    it('find no of products', () => {

        cy.visit("http://automationpractice.pl/index.php?id_category=3&controller=category")

        // So first you can inspect the element and you find that 'li' tag presents the every product and all these list items under the 'ul' tag. By the help of inspect element section and Selector Hub .

        cy.xpath("//ul[@class='product_list grid row']/li").should('have.length',7)

        // For Xpath locator we need to go to xpath method xpath(), get method only applicable for CSS locators

        // .should method and have.length easily understood 


    })


    it('chained xpath', () => {

        cy.visit("http://automationpractice.pl/index.php?id_category=3&controller=category")

        cy.xpath("//ul[@class='product_list grid row']").xpath("./li").should('have.length',7)

        // This is chained xpath , you can right n number of xpath function like this 


    })
})
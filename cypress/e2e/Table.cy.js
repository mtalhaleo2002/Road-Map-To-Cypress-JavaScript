
describe('Handle Tables', () => {

    beforeEach('Login', () => {
        // For login the page by using beforeEach function

        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get('#input-username').type("demo");
        cy.get('#input-password').type("demo");
        cy.get("button[type='submit']").click();

        // Alerts will be handled by cypress itself
        // For close the window which will sometimes appear or sometimes not .
        cy.get('.btn-close').click();
        // Customers ----> Customers (In navigation bar)

        cy.get('#menu-customer>a').click();     //Customers Main Menu

        cy.get('#menu-customer>ul>li:first-child').click();    //Customers Sub/Child Item
    })
    // So this particular piece of code execute before 'it' block.So this is a First Hook Block 



    it('Check Number Rows & Column', () => {

        cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length', '10')
        cy.get('.table.table-bordered.table-hover>thead>tr>td').should('have.length', '7')

    })


    it('Check Cell Data from specific Row & Column', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains('princytrainings4@gmail.com');

    })


    it('Read all the Rows & Columns data in the First page', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
             .each( ($row, index, $rows) => {

                cy.wrap($row).within ( () => {

                    cy.get("td").each( ($col, index, $cols) => {
                        cy.log($col.text());
                    })
                })
             })

        // First we have to capture all rows
        // Now this outer 'each' block/function contain each and every row ,pass 3 parameters inside 'each', $rows(capture all the rows), index(index of row like 1,2,3 and so on), $row(represents the current row)
        // Now we're wrapping this current row and use 'within' method and within that row 
        // We're getting all the 'tds' means all the cols, and we're repeating each and every TD by 'each' function. Now all the columns and rows, we're reading First row and column to extract the data.
        // And now we're printing the data by cy.log, in this we pass $col.text() to give you text value of this particular TD

    })


    it('Pagination', () => {

        

        //Find Total Number OF Pages
        let totalPages;
        cy.get(".col-sm-6.text-end").then(   (e) => {
            // From this Locator we cannot directly extract the text, so we need a function
            // First we need to extract the element and from that element, we extract the text, so we use '.then'.
            //And inisde this we need a Arrow Function(variable name called "e" where we get that element) , and inside that Arrow Function we need to capture the text .

            // "e.text();"  This particular method will return the text value and string that value in a variable called "mytext" 
            let mytext = e.text();    // Showing 1 to 10 of 12119 (1212 Pages)

    
            // Now we need substring method used in JS,extracts from start to end 
            // "mytext.substring" whenever we use , we have to pass starting and ending index of the element.

            // And inside this , we have to pass starting value mytext.indexOf("(")+1, in this "(" defnes constant value you can see in total pages (559 Pages) , "(" is at position index no '0', and we add + 1 to return the starting index of this number .
            // NOW second parameter, we have to pass ending value mytext.indexOf("Pages")-1, in this "Pages" defnes constant value you can see in total pages (559 Pages) , "Pages" is at ending of the index , and we subtract - 1 ,because there's a space before 'Pages'. 
            // It means that "(" index no = 0, next value has index number  = 1 and before Pages space -1 scenario already deines properly above comment.

            //And all of this scenario capture in the totalPages, which I define before we getting the element (means outside the function)
             totalPages = mytext.substring( mytext.indexOf("(")+1,   mytext.indexOf("Pages")-1);

            //  Now simple called "log" method to print the total no of pages and here we print inside commas just like alert message in JavaScript with a variabe 

             cy.log("Total number of pages in a table ===========> " +  totalPages);
        })

        

        let tPages = 5;
        // 5 pages we will read the data

        for(let p=1; p<=tPages ; p++)  //p=1, Pagination starts from 1     // p<=tPages, I want to read 5 pages (less than or equal to pages = 5)    //p++, means loop starts with 1 addition .Pagination starts 1 by 1 
         {
              if(tPages > 1)  //If the total pages should be greater than 1 ,there's a prerequisite
               {
                cy.log("Active Page is ====> " + p);  //Then I,m printing the page no .Here 'p' represents active page number 

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click(); 
                //So every iteration it will go and click on every page unitl it reaches 5(that,s the limit for the "for" loop) ."+p+" in CSS/Xpath for the nth child value reprents that runs 1 by 1 and p represents pagination
                // And Click option wiil be able to click on page option in pagination element
                // And which option it will click(initially it starts from 1 which I mentioned in for loop)


                cy.wait(3000);
                // Wait for sometimes 
                // Wait for 3 seconds when 1 page loaded and 2nd process

                // And once page is open now we need 

               cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            //    This example show in earlier examples
               .each( ($row, index, $rows) => {
  
                  cy.wrap($row).within ( () => {
  
                        cy.get("td:nth-child(3)").then( (e) => {
                        cy.log(e.text() );   //E-Mail
                         })
                        //  We can read 3rd column email of 5 pages.
                   })
                       
                 })
              }
         }
    })
})
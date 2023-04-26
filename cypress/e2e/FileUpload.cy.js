
import 'cypress-file-upload';

describe('File Uploads',  () => {

    it('Single File Upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get('#file-upload').attachFile('test1.pdf');
        // Attachfile() is a method , and whichever file we are going to upload so those files have to keep inside the fixtures , you can see that default flder (fixtures) .In fixtures folder ,we will maintan the test data files so here you can keep all the files because this paticular method(.attachFile()) wil read the file or will identify the file only from the fixtures folder
        
        // So I have my already created file which I moved to desktop to fixture folder 
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it('File Upload - Rename', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get('#file-upload').attachFile('test1.pdf');
        // It will autmatically rename the file name through path and presents you with the new file name 
        cy.get('#file-submit').click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    })

    it('File Upload - Drag and Drop', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get('#drag-drop-upload').attachFile('test1.pdf', { subjectType: 'drag-n-drop' }); 
        // Subject type defines the drag and drop the file 
        cy.wait(3000);

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.pdf')
    })

    it('Multiple Files Upload', () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        cy.get('#filesToUpload').attachFile(['test1.pdf','test2.pdf']);
        cy.wait(3000);

        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
    })

    it.only('File Upload - Shadow DOM', () => {
        // Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree 

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        // In this page browse option unders the shadow dom by checking through the inspect and other sub methods under the browse options also under the shadow dom.

        cy.get('.smart-browse-input', { includeShadowDom: true}).attachFile('test1.pdf');
        // includeShadowDOM parameter defines the shadow dom ,otherwise not automate properly

        cy.wait(3000);

        cy.get('.smart-item-name', { includeShadowDom: true}).contains('test1.pdf');
    })
})
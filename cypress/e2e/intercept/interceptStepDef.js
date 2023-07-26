When("Actor click on virtual Library and intercept API", () => {
    cy.intercept{{
        method : 'Get', 
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
{
    statuscode :200, 
    body : [{
        'book_name': 'Cypress with Javascript and Typescript', 
        'isbn': 'InfoOrigin',
        'aisle': '441601'
    }]
}).as('bookretrivals')
cy.get("button[class='btn btn-primary']").click()
//this will wait untill the response is intercepted
cy.wait('@bookreterivals')
cy.get('p').should('have.text'),'Oops only 1 Book Avaliable')
})
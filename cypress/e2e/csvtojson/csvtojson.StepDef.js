it ("Open File", ()=>{
    const filePath = Cypress.config("fileServerFolder")+"/downloads/Testing/employee.csv"
    cy.task ('csvToJsonConverter', filePath).then(jsonResult =>{
        cy.log(jsonResult)
    })  
})
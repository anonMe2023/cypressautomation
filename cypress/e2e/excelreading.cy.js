it ("Open File", ()=>{
    const filePath = Cypress.config("fileServerFolder")+"/downloads/Testing/employee.xlsx"
    cy.task ('excelToJsonConverter', filePath).then(jsonResult =>{
        cy.log(jsonResult)
    })  
})
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

Given("Actor pass excel file and validate data")
it ("Open File", ()=>{
    const filePath = Cypress.config("fileServerFolder")+"/downloads/Testing/employee.xlsx"
    cy.task ('excelToJsonConverter', filePath).then(jsonResult =>{
        cy.log(jsonResult)
    })  
})
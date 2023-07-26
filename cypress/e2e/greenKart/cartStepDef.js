/// <reference types ="Cypress"  />

describe('My Intercept test', function()
{
    it('My Intercept test', function (){
        cy.intercept{{
            method : 'Get', 
            url : 'https://rahulshettyacademy.com/seleniumPractise/#/'
        },
    {
        statuscode :200, 
        body : [{
            'product-name': 'Brocoli', 
            'product-price': '120', 
        }]
    }
}
    }
})
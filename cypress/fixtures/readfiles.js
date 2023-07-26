

cy.readFile('hello world.json')

//other than json

cy.readFile('path/to/message.txt').should('eq', 'My first read ') // true

//json 

cy.readFile('path/to/example.json').its('name').should('eq', 'Dipesh') // true
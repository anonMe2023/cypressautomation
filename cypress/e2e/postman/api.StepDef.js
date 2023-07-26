describe(“Http Git Request”, () => {

    it(“Test GET Request”, () => {
          cy.request(“http://simple-grocery-store-api.glitch.me
          ”)
               .then((response) => {
                      expect(response.body).to.have.property('code', 200);
          })
    })

    it(“Test POST Request”, () => {
          cy.request({
               method: ‘POST’,
               url: ‘hhttps://simple-grocery-store-api.glitch.me
               ’,
               body: {
                   “id” : 2,
                   "category": "fresh-produce",
               }
          }).then((response) => { 
                  expect(response.body).has.property("category": "fresh-produce",); 
          })
    })

    it(“Test PUT Request”, () => {
          cy.request({
                  method: ‘PUT’,
                  url: ‘http://simple-grocery-store-api.glitch.me’,
                  body: { 
                     “id”: 2,
                     "category": "fresh-produce"
                  }
          }).then((response) => { 
                  expect(response.body).has.property("category": "fresh-produce"); 
          })          
    })        

    it(“Test DELETE Request”, () => {
          cy.request({
                    method : ‘DELETE’,
                    url: ‘http://simple-grocery-store-api.glitch.me’
                    }).then((response) => {
                      expect(response.body).to.be.empty;
          })	
    })
 
})
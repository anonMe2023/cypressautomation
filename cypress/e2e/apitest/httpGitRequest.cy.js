describe('simpleGroceryStoreAPI', () => {

  let authToken=null;

  let cartId=null;

  let itemId=null;

  let orderId=null;

  it("simpleGroceryStoreAPI", () => {

      cy.request({

          method: 'GET',

          url: 'https://simple-grocery-store-api.glitch.me/status',

          headers: {

              'Content-Type': 'application/json'

          },

      })

          .its('status')

          .should('equal', 200)

  })

  it("getfewproducts", () => {

      cy.request({

          method: 'GET',

          url: 'https://simple-grocery-store-api.glitch.me/products?category=fresh-produce&results=20&available=true',

          headers: {

              'Content-Type': 'application/json'

          },

       })

      cy.wrap({ category: 'fresh-produce' }).its('category').should('equal', 'fresh-produce')

      cy.wrap({ results: '20' }).its('results').should('equal', '20')

      cy.wrap({ avilable: 'true' }).its('avilable').should('equal', 'true')





  })

  it("getaSingleproduct", () => {

      cy.request({

          method: 'GET',

          url: 'https://simple-grocery-store-api.glitch.me/products/4646',

          headers: {

              'Content-Type': 'application/json'

          },

      })




          .its('status')

          .should('equal', 200)




  })

  it("createnewcart", () => {

      cy.request({

          method: 'post',

          url: 'https://simple-grocery-store-api.glitch.me/carts',

          headers: {

              'Content-Type': 'application/json'

          },

      }).then((response) => {

          cartId = response.body.cartId;

          cy.log(cartId)

      })




  })

  it("Additemincart", () => {

      cy.request({

          method: 'POST',

          url: 'https://simple-grocery-store-api.glitch.me/carts/Gb-Cvu5zT3POqyLgbwXz3/items',

          headers: {

            "Content-Type": "application/json",

            "cartid":cartId

          },

          body:{

              "productId":3674

           }

      }).then((response) => {

          itemId = response.body.itemId;

          cy.log(itemId)

      })  

  })

  it("Getcartitems", () => {

      cy.reload({

          method: 'GET',

          url: 'https://simple-grocery-store-api.glitch.me/carts/Gb-Cvu5zT3POqyLgbwXz3/items',

          headers: {

              'Content-Type': 'application/json'

          }




      })

  })

  it("Udatecartitems", () => {

      cy.reload({

          method: 'PATCH',

          url: 'https://simple-grocery-store-api.glitch.me/carts/?/items/?',

          headers: {

              'Content-Type': 'application/json'

          },

      })

  })

  it("DeleteItemsintheCart", () => {

      cy.reload({

          method: 'DELETE',

          url: 'https://simple-grocery-store-api.glitch.me/carts/?/items/?',

          headers: {

              'Content-Type': 'application/json'

          },

      })

  })

  it("gettoken", () => {
      cy.request({

          method: 'POST',

          url: 'https://simple-grocery-store-api.glitch.me/api-clients',

          headers: {

              'Content-Type': 'application/json'

          },

          body: {

              clientName: 'aaaa',

              clientEmail: Math.random().toString(5).substring(2) + "@gmail.com"
          }

      }).then((response) => {

          authToken = response.body.accessToken;

          cy.log(authToken)

      })

  })

  it("creatingneworder", () => {

      cy.request({

          method: 'POST',

          url:'https://simple-grocery-store-api.glitch.me/orders',

          headers: {

              "Content-Type": "application/json",

              'Authorization':  authToken,

           },

      }).then((response) => {

          expect(response.status).to.eq(201)

          expect(respose.body.created).to.eq(true);

      })

  })

  // it("GETORDERS", () => {

  //     cy.request({

  //         method: 'GET',

  //         url: 'https://simple-grocery-store-api.glitch.me/orders',

  //         headers: {

  //             'Content-Type': 'application/json',

  //             'Authorization':  authToken

  //         },




  //     }).then((response) => {

  //         Id = response.body.orderid;

  //         cy.log(Id)

  //     })

     




  // })

  // it("Updatingorder", () => {

  //     cy.request({

  //         method: 'PATCH',

  //         url: 'https://simple-grocery-store-api.glitch.me/carts//DXmdoRo60UG0SNkk_KmMM/items/817160687',

  //         headers: {

  //             'Content-Type': 'application/json'

  //         },




  //     })

  //     cy.wrap({ cartId: 'DXmdoRo60UG0SNkk_KmMM' }).its('cartId').should('equal', 'DXmdoRo60UG0SNkk_KmMM')




  // })

})
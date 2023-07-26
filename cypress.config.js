const { defineConfig } = require("cypress");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

const mysql = require("mysql");

// required for Excel to json conversion

const excelToJson = require('convert-excel-to-json');

const fs = require('fs');


async function setupNodeEvents(on, config) {

  // implement node event listeners here

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;

}





module.exports = defineConfig({

  e2e: {

    setupNodeEvents(on, config) {

      //below is required to use NodeJS instead of brower to read the file




on('task', {







  excelToJsonConverter(filePath)




  {




    const result = excelToJson({




      source: fs.readFileSync(filePath)




    });




    return result;




  }




});

      on("task", {

        querydb: (query) => {

          return queryTestDb(query, config);

        }

      })

    },

    "env": {

      "groceryurl":"https://simple-grocery-store-api.glitch.me",

     

      "db": {

        "host": "127.0.0.1",

        "user": "root",

        "password": "admin",

        "database": "country"

      }

    },

  },

});






function queryTestDb(query, config) {

  // creates a new mysql connection using credentials from cypress.json env's

  const connection = mysql.createConnection(config.env.db);

  // start connection to db

  connection.connect();

  // exec query + disconnect to db as a Promise

  return new Promise((resolve, reject) => {

    connection.query(query, (error, results) => {

      if (error) reject(error);

      else {

        connection.end();

        // console.log(results)

        return resolve(results);

      }

    });

  });

}
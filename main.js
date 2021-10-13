const helpers = require("./helpers");
const moreHelpers = require("./moreHelpers");
const evenMoreHelpers = require("./evenMoreHelpers");
const { first, second, third } = require("./models");
const pets = require('./petsFolder/pets');

helpers.sayHi();

console.log(moreHelpers.firstName);
moreHelpers.sayHello();
moreHelpers.sayGoodbye();

evenMoreHelpers();
pets();
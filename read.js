const fs = require("fs");

fs.readFile("data.txt", function(err, data) {
    console.log(data.toString());
});

fs.readFile("anotherData.txt", function(err, data) {
    console.log(data.toString());
});
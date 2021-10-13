const request = require("request");
const process = require("process");
const fs = require("fs");

var term = process.argv.slice(2);


const options = {
    url: `https://icanhazdadjoke.com/search?term=${term}`,
    headers: {
        'User-Agent': 'request',
        'Accept': 'application/json'
    }

};


function requestCallBack(error, response, body) {
    if (!error && response.statusCode === 200) {
        response = body;

        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        fs.appendFile("data.txt", response, function(err) {
            fs.readFile("data.txt", function(err, data) {
                var res = JSON.parse(data);
                if (res.total_jokes) {

                    var max = res.total_jokes;
                    var num = randomNumber(0, max);
                    var joke = res.results[num].joke;
                    console.log(joke);
                } else {
                    console.log("No jokes were found for that search term! :(");
                }
            });
        });
        fs.writeFile('data.txt', "", function() {

        });

    }
}
request(options, requestCallBack);
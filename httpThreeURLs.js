var http = require('http');

var urlArray = process.argv.slice(2);

var results = {}


urlArray.forEach(function(url, index) {
    var request = http.get(url, function (response) {
    var body = ""

    response.on('data', function (data) {
        body += data.toString()
    })

    response.on('end', function () {
        if (response.statusCode === 200) {
            try {
                results[index] = body;
                if (results[0] && results[1] && results[2]) {
                    console.log(results[0]);
                    console.log(results[1]);
                    console.log(results[2]);
                }                
            } catch(error) {
                console.error(error);
            }
        } else {
            console.error('Status Code not 200,' + http.STATUS_CODES[response.statusCode])
        }

        })
    })
})


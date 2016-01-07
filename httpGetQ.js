var http = require('http');

var url = process.argv[2];

var request = http.get(url, function (response) {
    var body = []

    response.on('data', function (data) {
        body.push(data.toString());
    })

    response.on('end', function () {
        if (response.statusCode === 200) {
            try {
                for (var i = 0; i < body.length; i++) {
                    console.log(body[i]);
                };
            } catch(error) {
                console.error(error);
            }
        } else {
            console.error('Status Code not 200,' + http.STATUS_CODES[response.statusCode])
        }

    })
})
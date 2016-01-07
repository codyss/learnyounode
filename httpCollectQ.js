var https = require('https');

var url = process.argv[2];

var request = https.get(url, function (response) {
    var body = ""

    response.on('data', function (data) {
        body += data.toString()
    })

    response.on('end', function () {
        if (response.statusCode === 200) {
            try {
                console.log(body.length);
                console.log(body);
            } catch(error) {
                console.error(error);
            }
        } else {
            console.error('Status Code not 200,' + http.STATUS_CODES[response.statusCode])
        }

    })
})
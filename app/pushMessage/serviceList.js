const https = require('https');

let address = 'https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=Reduf2F_blUOZQ7RC5oG6gENO92WbCWJpiFQlCj7N1I_jh389nxNZaqSxE6O9dbz7qYWGb7mR53SP7sEZxl9Dxowb78_DakcvfFAXFbXMsEVODgAFAMFU';



https.get(address, res => {
    res.setEncoding('utf8');
    const result = [];
    res.on('data', function(data) {
        result.push(data);
        console.log(data);
    })
    res.on('end', function() {
        console.log(JSON.parse(result.join('')));
    })
})
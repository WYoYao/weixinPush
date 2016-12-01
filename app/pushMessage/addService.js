const https = require('https');
const url = require('url');
const queryString = require('querystring');


let content = queryString.stringify({
    "kf_account": "test1@test",
    "nickname": "客服1",
    "password": "pswmd5",
});

let str = 'https://api.weixin.qq.com/customservice/kfaccount/add?access_token=Reduf2F_blUOZQ7RC5oG6gENO92WbCWJpiFQlCj7N1I_jh389nxNZaqSxE6O9dbz7qYWGb7mR53SP7sEZxl9Dxowb78_DakcvfFAXFbXMsEVODgAFAMFU';

const body = url.parse(str);

const options = {
    hostname: body.hostname,
    port: body.port || 80,
    path: body.path,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': content.length,
    }
};

const request = https.request(options, res => {
    console.log(res);
    res.setEncoding('utf8');
    const result = [];
    res.on('data', (d) => {
        result.push(d);
    })
    res.on('end', () => {
        console.log(result.join(''));
    })
});

request.write(content);
request.end();

request.on('error', (e) => {
    console.error(e);
});
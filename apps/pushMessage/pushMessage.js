const https = require('https');
const url = require('url');
const queryString = require('querystring');


let content = JSON.stringify({
    "touser":"OPENID",
    "msgtype":"text",
    "text":
    {
         "content":"Hello World"
    }
});

let str = 'https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=QLdRgckgjI6MCwMuIT56DpgicdcjwUDYkb7pYJU_ZErUAXuHorney86wWJGZG31wzQMtDFlhoSM056xQYqA82-GRt6j-dV0Wuv5TyZwp3kPVNfIOHSN7uPNWOr5EljgSQLWaAFAIDO';

const body = url.parse(str);

const options = {
    host: body.hostname,
    path: body.path,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': content.length,
    }
};

const request = https.request(options, res => {
    res.setEncoding('utf8');
    const result = [];
    res.on('data', (d) => {
        result.push(d);
    })
    res.on('end', () => {
        console.log(result.join(''));
    })
});

console.log(content);

request.write(content);
request.end();

request.on('error', (e) => {
    console.error(e);
});
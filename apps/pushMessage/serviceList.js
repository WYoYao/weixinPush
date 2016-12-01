const https = require('https');

let address = 'https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=QLdRgckgjI6MCwMuIT56DpgicdcjwUDYkb7pYJU_ZErUAXuHorney86wWJGZG31wzQMtDFlhoSM056xQYqA82-GRt6j-dV0Wuv5TyZwp3kPVNfIOHSN7uPNWOr5EljgSQLWaAFAIDO';

let infomation='https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=QLdRgckgjI6MCwMuIT56DpgicdcjwUDYkb7pYJU_ZErUAXuHorney86wWJGZG31wzQMtDFlhoSM056xQYqA82-GRt6j-dV0Wuv5TyZwp3kPVNfIOHSN7uPNWOr5EljgSQLWaAFAIDO';


https.get(address, res => {
    res.setEncoding('utf8');
    const result = [];
    res.on('data', function(data) {
        result.push(data);
    })
    res.on('end', function() {
        console.log(JSON.parse(result.join('')));
    })
})
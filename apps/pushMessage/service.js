const https = require('https');
const config = require('./../Url_Enum.js');
const { https_Method } = require('./get.js');
const { kf } = require('./model.js');


// 获取客服列表
function getkflist(cb) {
    https_Method(config.getkflist, 'GET', data => cb(JSON.parse(data)));
}


// 添加客服
function add(cb, kf_account, nickname, password) {
    https_Method(config.add, 'POST', data => cb(JSON.parse(data)), JSON.stringify(new kf(kf_account, nickname, password)));
}

// 修改客服
function update(cb, kf_account, nickname, password) {
    https_Method(config.update, 'POST', data => cb(JSON.parse(data)), JSON.stringify(new kf(kf_account, nickname, password)));
}

// 删除客服
function del(cb, kf_account, nickname, password) {
    https_Method(config.del, 'POST', data => cb(JSON.parse(data)), JSON.stringify(new kf(kf_account, nickname, password)));
}

// 发送消息

// 发送消息
function send(cb, content) {
    https_Method(config.send, 'POST', data => cb(JSON.parse(data)), JSON.stringify(content));
}

// 获取素材列表
function getMEDIA(cb, type, offset, count) {
    https_Method(config.batchget_material, 'POST', data => cb(JSON.parse(data)), JSON.stringify({ type, offset, count }));
}


// getkflist(item => console.log(item));

// update(item => console.log(item), 'leo@164', 'abcabc', 'abcabc');

send(item => console.log(item), {
    touser: "oyyUMj13dd_rY8Ip1a2sjOXENvS0",
    msgtype: 'text',
    text: {
        "content": "Hello World"
    }
});

// 获取所有的 素材
// getMEDIA(data => console.log(JSON.stringify(data)), 'news', 0, 20);

// send(item => console.log(item), "oyyUMj13dd_rY8Ip1a2sjOXENvS0", "mpnews", "Hello World");

// send(item => console.log(item), {
//     touser: "oyyUMj13dd_rY8Ip1a2sjOXENvS0",
//     msgtype: 'text',
//     text: {
//         "content": "Hello World"
//     }
// });

send(item => console.log(item), {
    "touser": "oyyUMj13dd_rY8Ip1a2sjOXENvS0",
    "msgtype": "mpnews",
    "mpnews": {
        "media_id": "G-0Y2ALUg58CCQfR_Qdg7oeg5QwNzjhDEmv7us1ypUk"
    }
});
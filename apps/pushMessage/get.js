const https = require('https');
const url = require('url');

// 接受返回的函数
const responseCliet = function(...obj) {
    const [cb, res] = obj;
    res.setEncoding('utf8');
    const result = [];
    res.on('data', function(data) {
        result.push(data);
    });
    res.on('end', function() {
        cb(result.join(''));
    });
}

// 返回一个可以传入的回调函数的
const createResponse = function(cb) {
    return responseCliet.bind(null, cb);
}

// 生成地址对应的options
const createOptions = function(uri, method = 'GET', data = '') {
    console.log(uri);
    const { host, path } = url.parse(uri);

    return {
        host,
        path,
        method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': data.length,
        }
    };
}


// 进行Https 请求
function https_Method(uri, type = "GET", cb, data) {
    // 创建options
    const options = createOptions(uri, type, data);
    //创建的请求返回回调
    const resClient = createResponse(cb);
    // 创建请求
    const request = https.request(options, resClient);
    // 写入数据
    if (type === "POST") {
        request.write(data);
    }
    // 发送请求
    request.end();
}

exports.https_Method = https_Method;
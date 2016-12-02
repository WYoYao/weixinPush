/**
 * 微信调用地址枚举
 * 
 * 
 */
const { appid, appsecrect, access_token, openid } = require('./config.js');

const Url_Enum = {
    //获取access_token
    access_token: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecrect}`,
    //获取客服账号列表
    getkflist: `https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=${access_token}`,
    //添加客服
    add: `https://api.weixin.qq.com/customservice/kfaccount/add?access_token=${access_token}`,
    //编辑客服
    update: `https://api.weixin.qq.com/customservice/kfaccount/update?access_token=${access_token}`,
    //删除客服
    del: `https://api.weixin.qq.com/customservice/kfaccount/del?access_token=${access_token}`,
    //发送客服消息
    send: `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${access_token}`,
    // 素材列表
    batchget_material: `https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=${access_token}`,
}

module.exports = Url_Enum;
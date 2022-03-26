/*
 * @Author: willwil
 * @Date: 2021-12-29 20:37:01
 * @LastEditors: willwil
 * @LastEditTime: 2022-03-27 00:58:04
 * @Description: 业务文件
 */
const querystring = require('querystring');
const handlerBlogRouter = require('./src/routes/blog');

const serverHandler = (req, res) => {
    // 响应头
    res.setHeader('Content-Type', 'application/json');
    const url = req.url;
    // 自定义属性
    req.path = url.split('?')[0];

    req.query = querystring.parse(url.split('?')[1]);

    const data = handlerBlogRouter(req, res);
    if (data) {
        res.end(
            JSON.stringify(data)
        );
        return;
    }

    // 异常
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found!');
    res.end();
}

module.exports = serverHandler;
/*
 * @Author: willwil
 * @Date: 2021-12-29 20:30:58
 * @LastEditors: willwil
 * @LastEditTime: 2021-12-29 21:40:18
 * @Description: 
 */
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    console.log(req.method)
    if (req.method === 'get') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(
            JSON.stringify({
                id: 1,
                name: '张三'
            })
        );
    }
})
server.listen(3000, () => {
    console.log(`server running at 3000`)
})
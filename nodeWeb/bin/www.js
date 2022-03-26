/*
 * @Author: willwil
 * @Date: 2021-12-29 20:36:47
 * @LastEditors: willwil
 * @LastEditTime: 2021-12-29 20:43:31
 * @Description: 
 */
const http = require('http');

const serverHandler = require('../app');

const PORT = 8000;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
    console.log(`server running at ${ PORT }`)
})


// nodemon 热更新
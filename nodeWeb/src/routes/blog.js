/*
 * @Author: willwil
 * @Date: 2021-12-29 20:52:13
 * @LastEditors: willwil
 * @LastEditTime: 2021-12-29 21:09:26
 * @Description: 
 */
const { getList } = require('../controllers/blog');
const { SuccessModel } = require('../model/responesModel');

const handlerBlogRouter = (req, res) => {
    // 命中路由 api/list
    const method = req.method;

    if (method === 'GET' && req.path === '/api/blog/list') {
        const name = req.query.name || '';
        const keyword = req.query.keyword || '';
        // 连接数据库
        const listData = getList(name, keyword);
        return listData
    }

    if (method === 'POST' && req.path === '/api/blog/new') {
        return getList(name, keyword)
    }

};

module.exports = handlerBlogRouter;
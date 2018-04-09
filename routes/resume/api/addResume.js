var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../../../db/DBConfig');
var resumeSql = require('../../../db/resume/resumeSql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '-200',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};
router.post('/', function(req, res, next) {
  // responseJSON(res, {
  //   code: 200,
  //   msg: 'ok'
  // });
  // return false;
  pool.getConnection(function(err, connection) {
    var param = req.body;
    var timestamp = new Date().getTime();
    connection.query(resumeSql.insert, [param.username, param.sex, param.born, param.id_card, param.nation, param.school, param.major, param.education, param.degree, param.political, param.work_year, param.title, param.position, param.department, param.program_list, param.education_list, param.work_list, timestamp], function(err, result) {
      // console.log(result,err);
      if (result) {
        result = {
          code: 200,
          msg: 'ok',
          data: {
            id: result.insertId
          }
        };
      }
      responseJSON(res, result);
      connection.release();
    });
  });
});

module.exports = router;
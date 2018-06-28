var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../../../db/DBConfig');
var articleSql = require('../../../db/article/articleSql');
var pool = mysql.createPool(dbConfig.mysql);
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

  pool.getConnection(function(err, connection) {
    var param = req.body;
    var timestamp = new Date().getTime();
    if(param.id){
      connection.query(articleSql.update, [param.title, param.content, timestamp, param.id], function(err, result) {
        if (result) {
          result = {
            code: 200,
            msg: 'ok',
            data: {
              id: param.id
            }
          };
        }
        connection.release();
        responseJSON(res, result);
      });
    }else{
      connection.query(articleSql.insert, [param.title, param.content, timestamp, timestamp], function(err, result) {
        if (result) {
          result = {
            code: 200,
            msg: 'ok',
            data: {
              id: result.insertId
            }
          };
        }
        connection.release();
        responseJSON(res, result);
      });
    }
  });
});

module.exports = router;
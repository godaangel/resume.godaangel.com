var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbConfig = require('../../../db/DBConfig');
var resumeSql = require('../../../db/resume/resumeSql');

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
    connection.query(resumeSql.delete, [param.id], function(err, result2) {
      if(result2){
        result2 = {
          code: 200,
          msg: 'ok'
        }
      }
      responseJSON(res, result2);
      connection.release();
    });
  });
});

module.exports = router;
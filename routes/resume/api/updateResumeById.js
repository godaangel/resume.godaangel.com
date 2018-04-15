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
    var timestamp = new Date().getTime();
    connection.query(resumeSql.update, [param.username, param.sex, param.born, param.id_card, param.nation, param.school, param.major, param.education, param.degree, param.political, param.work_year, param.title, param.position, param.department, param.program_list, param.education_list, param.work_list, timestamp, param.id], function(err, result) {
      // console.log(err)
      if (result) {
        result = {
          code: 200,
          msg: 'ok',
          data: {
            id: param.id
          }
        };
      }
      responseJSON(res, result);
      connection.release();
    });
  });
});

module.exports = router;
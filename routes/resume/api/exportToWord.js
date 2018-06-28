var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var dbConfig = require('../../../db/DBConfig');
var resumeSql = require('../../../db/resume/resumeSql');
var wordTemplate  = require('../common/docxTemplate');

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
  console.log('-------------start exportWord-------------');
  pool.getConnection(function(err, connection) {
    var param = req.body;
    connection.query(`select * from resume_list where id in(${param.id})`, [], function(err, result) {
      if(result){
        wordTemplate(res, result)
        .then((url) => {
          connection.release();
          responseJSON(res, {
            code: '200',
            msg: 'ok',
            data: {
              url: url
            }
          });
        })
        .catch((err) => {
          console.log(err);
          connection.release();
          responseJSON(res);
        })
      }else{
        console.log(err);
      }
    });
  });
});

module.exports = router;
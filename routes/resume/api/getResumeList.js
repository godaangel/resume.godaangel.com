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

  /**
   * 获取简历列表
   */
  function getResumeList(connection, param){
    return new Promise((resolve, reject) => {
      var pageSize = param.page_size?param.page_size:20;
      connection.query(resumeSql.queryAll, [(param.current_page?(param.current_page - 1):0)*pageSize, pageSize], function(err, result) {
        console.log(err)
        if (result) {
          var list = result;
          resolve(list);
        }else{
          reject();
        }
        // connection.release();
      });
    });
  }

  /**
   * 获取简历总数
   */
  function getTotal(connection, list, param){
    return new Promise((resolve, reject) => {
      var pageSize = param.page_size?param.page_size:20;
      connection.query('select found_rows() as total', function(err, result) {
        if(result){
          var total = result[0].total || 0;
          result = {
            code: 200,
            msg: 'ok',
            data: {
              list: list,
              pagination: {
                current_page: param.current_page?parseInt(param.current_page):0,
                page_size: pageSize,
                total: total
              }
            }
          };
        }
        resolve(result);
        // connection.release();
      });
    });
  }

  // 从连接池获取连接 
  pool.getConnection(function(err, connection) {
    // 获取前台页面传过来的参数  
    var param = req.body;
    // 建立连接 增加一个信息 
    var timestamp = new Date().getTime();

    /**
     * async/await 获取整个信息
     * @Author   Warrenyang
     * @DateTime 2018-03-11
     */
    let getMyList = async function() {
      let reportList = await getResumeList(connection, param);
      let result = await getTotal(connection, reportList, param);
      responseJSON(res, result);
      
    }

    getMyList().catch((result) => {
      console.log(result);
      responseJSON(res, result);
      // connection.release();
    });
  });
});

module.exports = router;
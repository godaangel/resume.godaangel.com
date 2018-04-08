var express = require('express');
var router = express.Router();
var wordTemplate  = require('../common/wordTemplate');

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
// 添加会议室
router.get('/', function(req, res, next) {
  console.log('-------------start exportWord-------------');
  wordTemplate(res, {})
  .catch((err) => {
    responseJSON(res);
  })
});

module.exports = router;
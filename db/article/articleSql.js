var articleSql = {
  insert: 'INSERT INTO article(title,content,create_time,update_time) VALUES(?,?,?,?)',
  update: 'update article set title = ?, content = ?, update_time = ? where id=?',
  queryAll: 'select SQL_CALC_FOUND_ROWS id,title,content,update_time from article limit ?, ?',
  queryByTitle: "select SQL_CALC_FOUND_ROWS id,title,content,update_time from article where title like ? limit ?, ?",
  getArticleById: 'select * from article where id = ? ',
  delete: 'delete from article where id=?'
};
module.exports = articleSql;
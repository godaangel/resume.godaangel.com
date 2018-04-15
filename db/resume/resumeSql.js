var resumeSql = {
  insert: 'INSERT INTO resume_list(username,sex,born,id_card,nation,school,major,education,degree,political,work_year,title,position,department,program_list,education_list,work_list,create_time,update_time) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
  update: 'update resume_list set username = ?, sex = ?, born = ?, id_card = ?, nation = ?, school = ?, major = ?, education = ?, degree = ?, political = ?, work_year = ?, title = ?, position = ?, department = ?, program_list = ?, education_list = ?, work_list = ?, update_time = ? where id=?',
  queryAll: 'select SQL_CALC_FOUND_ROWS id,username,work_year,title,position,department,update_time from resume_list limit ?, ?',
  exportByTime: 'select * from resume_list where timerange >= ? and timerange <= ?',
  exportMyByTime: 'select * from resume_list where timerange >= ? and timerange <= ? and user_id = ?',
  getResumeById: 'select * from resume_list where id = ? ',
  delete: 'delete from resume_list where id=?'
};
module.exports = resumeSql;
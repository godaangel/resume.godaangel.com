use resume_center;
create table resume_list
(
  id int auto_increment comment '订单ID' primary key,
  user_id varchar(20) default '' not null comment '用户id',
  username varchar(20) default '' not null comment '姓名',
  sex varchar(10) default '' not null comment '性别',
  born varchar(20) default '' not null comment '出生年月',
  id_card varchar(18) default '' comment '身份证号',
  nation varchar(20) default '' comment '民族',
  school varchar(40) default '' comment '毕业学校',
  major varchar(40) default '' comment '专业',
  education varchar(20) default '' comment '学历',
  degree varchar(20) default '' comment '学位',
  political varchar(20) default '' comment '政治面貌',
  work_year int default 0 comment '工作年限',
  title varchar(40) default '' comment '职称',
  position varchar(20) default '' comment '职位',
  department varchar(40) default '' comment '所在部门',

  program_list text comment '项目经历',
  education_list text comment '教育经历',
  work_list text comment '工作经历',

  create_time varchar(255) comment '创建时间'
)
comment '简历列表';
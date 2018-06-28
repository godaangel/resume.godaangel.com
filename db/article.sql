use resume_center;
create table article
(
  id int auto_increment comment '资源文章ID' primary key,
  title varchar(20) default '' not null comment '资源文章名称',
  content text comment '资源文章内容',

  create_time varchar(255) comment '创建时间'
  update_time varchar(255) comment '更新时间'
)
comment '资源文章';
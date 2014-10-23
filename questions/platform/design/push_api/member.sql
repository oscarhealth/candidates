create table member_device
(
	mem_id varchar(7) not null,
  installation_id int not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into member_device (mem_id, installation_id) VALUES('R987654', 1);
insert into member_device (mem_id, installation_id) VALUES('R987655', 2);
insert into member_device (mem_id, installation_id) VALUES('R987656', 3);
insert into member_device (mem_id, installation_id) VALUES('R987657', 4);

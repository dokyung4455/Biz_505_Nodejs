/*
node는 아이디 이고 @ 는 서버를 적는곳 뒤의 %는 모든 서버 라는 뜻
identified by 는 비밀번호
*/
CREATE USER 'node'@'%' identified by '12345';

GRANT ALL privileges ON *.* TO 'node'@'%';
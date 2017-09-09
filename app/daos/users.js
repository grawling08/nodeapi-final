'use strict';

var mysql = require('mysql');
var Database = require('../../app/utils/database').Database;
var db = new Database();

exports.getAllUser = (next) => {
	var strSQL = mysql.format('SELECT U.*, MD5(U.user_id) as _id FROM users U;');
	db.query(strSQL, next);
};

exports.createUser = (user, next) => {
	var strSQL = mysql.format('INSERT INTO users(firstname, lastname, username, password) VALUES(?,?,?,?)', [
			user.firstname, user.lastname, user.username, user.password
	]);
	db.insertWithId(strSQL, next);
};

exports.checkUsernameDuplicate = (username, next) => {
	var strSQL = mysql.format('SELECT * FROM users WHERE username = ?', [username]);
	db.query(strSQL, next);
};

exports.checkUsernameDuplicate2 = (_id, username, next) => {
	var strSQL = mysql.format('SELECT * FROM users WHERE username = ? AND MD5(user_id) <> ?', [username, _id]);
	db.query(strSQL, next);
}

exports.getUser = (user_id, next) => {
	var strSQL = mysql.format('SELECT *, MD5(user_id) as _id  FROM users WHERE MD5(user_id)=? LIMIT 1', [user_id]);
	db.query(strSQL, next);	
};

exports.deleteUser = (user_id, next) => {
	var strSQL = mysql.format('DELETE FROM users WHERE MD5(user_id)=?', [user_id]);
	db.actionQuery(strSQL, next);	
}

exports.updateUser = (user_id, user, next) => {
	var strSQL = mysql.format('UPDATE users SET firstname=?, lastname=?, username=?, password=? WHERE MD5(user_id)=? LIMIT 1', [
		user.firstname, user.lastname, user.username, user.password, user_id
	]);
	db.actionQuery(strSQL, next);	
}

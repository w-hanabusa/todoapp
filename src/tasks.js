// 新規登録

const mysql = require("mysql2/promise");
const config = require("../config.js");

/**
 * タスクを新規登録する　API
 * 
 * @returns レスポンス　JSON
 * */
postTasks = async function (body) {
  let connection = null;
  try {
    connection = await mysql.createConnection(config.dbSetting);
    //
    const sql =
     "INSERT INTO todoapp.t_task (task_name, deadline, category_id) VALUES (?,?,?);";
    let d = [body.task, body.limit, body.category];
    const [rows, fields] = await connection.query(sql, d);

    // console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
  }
};

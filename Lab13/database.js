import mysql from 'mysql2';
import 'dotenv/config'
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();

async function getNotes() {
  const [rows] = await pool.query("select * from note");
  return rows;
}

async function getNote(id) {
  const [rows] = await pool.query(`select * from note where id=?`, [id]);
  return rows[0];
}

async function createNote(title, contents) {
  const [result] = await pool.query(`insert into note(title,contents) values(?,?)`, [title, contents]);
  const id = result.insertId;
  return getNote(id);
}

async function deleteNote(id) {
  const [result] = await pool.query('DELETE FROM note WHERE id = ?', [id]);
  if (result.affectedRows === 1) {
    return 'Note deleted successfully';
  } else {
    return 'Note not found or deletion failed';
  }
}

async function updateNote(id, newTitle, newContents) {
  const [result] = await pool.query('UPDATE note SET title = ?, contents = ? WHERE id = ?', [newTitle, newContents, id]);

  // Check the result object for success or error
  if (result.affectedRows === 1) {
    return 'Note updated successfully';
  } else {
    return 'Note not found or update failed';
  }
}

// const notes= await getNotes();
// console.log(notes);

// const note=await getNote(2);
// console.log(note);

// const result=await createNote('Note 3','This is my Note 3 fo the app');
// console.log(result);

// const result = await updateNote(3, 'Updates Note', 'This note is updated.');
// const notes = await getNotes();
// console.log(notes);

// const result=await deleteNote(2);
// const notes= await getNotes();
// console.log(notes);
const pool = require("./pool");

async function findUser(username) {
    const user = await pool.query("SELECT * FROM users WHERE username=$1", [username]);
    return user.rows[0];
}

async function findUserById(id) {
    const user = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    return user.rows[0];
}

async function insertUser(first_name, last_name, username, password) {
    await pool.query("INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)", 
        [first_name, last_name, username, password]);
  }

async function getAllMessages() {
  const messages = await pool.query("SELECT * FROM messages JOIN users ON messages.user_id = users.id ORDER BY time_posted DESC");
  return messages.rows;
}

async function insertMessage(title, user_id, text) {
    await pool.query("INSERT INTO messages (title, user_id, text) VALUES ($1, $2, $3)",
        [title, user_id, text]
    )
}

async function deleteMessage(id) {
    await pool.query("DELETE FROM messages WHERE id=$1", [id]);
}

async function updateAdmin(id) {
    await pool.query("UPDATE users SET admin = true WHERE id=$1", [id]);
}

async function updateMembership(id) {
    await pool.query("UPDATE users SET membership_status = true WHERE id=$1", [id]);
}

module.exports = {
findUser,
findUserById,
insertUser,
  getAllMessages,
  insertMessage,
  deleteMessage,
  updateAdmin,
  updateMembership
};

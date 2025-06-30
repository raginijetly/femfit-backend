const pool = require("./pool");

// USER QUERIES

async function createUser(fullName, username, email, password) {
  try {
    await pool.query(
      "INSERT INTO users (full_name, username, email, password) VALUES ($1, $2, $3, $4)",
      [fullName, username, email, password]
    );
    return true;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

async function getUserById(id) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error getting user by ID: ${error.message}`);
  }
}

async function getUserByUsername(username) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error getting user by username: ${error.message}`);
  }
}

async function getUserByEmail(email) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows[0];
  } catch (error) {
    throw new Error(`Error getting user by email: ${error.message}`);
  }
}

async function updateUserPassword(userId, password) {
  try {
    await pool.query("UPDATE users SET password = $1 WHERE id = $2", [
      password,
      userId,
    ]);
    return true;
  } catch (error) {
    throw new Error(`Error updating user password: ${error.message}`);
  }
}

module.exports = {
  createUser,
  getUserById,
  getUserByUsername,
  getUserByEmail,
  updateUserPassword,
};

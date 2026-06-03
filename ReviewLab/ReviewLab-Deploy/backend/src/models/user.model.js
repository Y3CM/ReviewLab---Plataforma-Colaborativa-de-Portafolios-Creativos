const pool = require('../config/database');

class UserModel {
  static async findByEmail(email) {
    const result = await pool.query(
      'SELECT id, name, email, created_at, updated_at FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0] || null;
  }

  static async findById(id) {
    const result = await pool.query(
      'SELECT id, name, email, created_at, updated_at FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  static async create(name, email, passwordHash) {
    const result = await pool.query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email, created_at, updated_at',
      [name, email, passwordHash]
    );
    return result.rows[0];
  }

  static async findByEmailWithPassword(email) {
    const result = await pool.query(
      'SELECT id, name, email, password_hash, created_at, updated_at FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0] || null;
  }
}

module.exports = UserModel;
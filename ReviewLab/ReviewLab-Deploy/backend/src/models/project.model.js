const pool = require('../config/database');

class ProjectModel {
  static async create(userId, title, description, category, imageUrl) {
    const result = await pool.query(
      'INSERT INTO projects (user_id, title, description, category, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [userId, title, description, category, imageUrl]
    );
    return result.rows[0];
  }

  static async getAll() {
    const result = await pool.query(`
      SELECT p.*, u.name as author_name 
      FROM projects p 
      LEFT JOIN users u ON p.user_id = u.id 
      ORDER BY p.created_at DESC
    `);
    return result.rows;
  }

  static async getById(id) {
    const result = await pool.query(`
      SELECT p.*, u.name as author_name, u.email as author_email 
      FROM projects p 
      LEFT JOIN users u ON p.user_id = u.id 
      WHERE p.id = $1
    `, [id]);
    return result.rows[0] || null;
  }

  static async getByUserId(userId) {
    const result = await pool.query(
      'SELECT * FROM projects WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    return result.rows;
  }
}

module.exports = ProjectModel;
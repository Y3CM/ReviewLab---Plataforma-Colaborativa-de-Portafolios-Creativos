const { Pool } = require('pg');

// En producción (Render, Neon, Supabase, Railway) la conexión a PostgreSQL
// requiere SSL. En desarrollo local se desactiva. rejectUnauthorized:false
// es compatible con todos los proveedores gestionados.
const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

module.exports = pool;

# ReviewLab Backend

Backend API built with Node.js + Express + PostgreSQL.

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/reviewlab
JWT_SECRET=your-secret-key-change-in-production
NODE_ENV=development
```

## Database Setup

```bash
psql -U postgres -d reviewlab < src/db/schema.sql
```

## Development

```bash
npm run dev
```

Server will start at `http://localhost:3000`

## Production

```bash
npm start
```

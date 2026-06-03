# ReviewLab

Plataforma Colaborativa de Portafolios Creativos.

## Stack

- **Frontend**: React 18 + Vite
- **Backend**: Node.js + Express
- **Base de datos**: PostgreSQL
- **Auth**: JWT

## Estructura

```
ReviewLab-Deploy/
├── frontend/     # React app (Vercel)
└── backend/      # Express API (Render)
```

## Despliegue

### Backend (Render)

- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `DATABASE_URL` - PostgreSQL connection string
  - `JWT_SECRET` - Secret key (min 32 chars)
  - `NODE_ENV` = `production`
  - `PORT` = `3000`

### Frontend (Vercel)

- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL` - Backend URL (e.g., https://api.your-app.onrender.com/api)

## Development

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Health check |
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login |
| GET | /api/projects | List projects |
| GET | /api/projects/:id | Project detail |
| POST | /api/projects | Create project (auth required) |
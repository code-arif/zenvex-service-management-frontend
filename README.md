# Service Management Mini-App

A simple full-stack CRUD application built with **React + Vite** (frontend).

---

## Folder Structure

```
service-management/

frontend/                       ← React + Vite project
    ├── src/
    │   ├── api/
    │   │   └── axios.js            ← Axios base config
    │   ├── components/
    │   │   ├── ServiceTable.jsx    ← Displays all services
    │   │   └── ServiceForm.jsx     ← Add/Edit form
    │   ├── App.jsx                 ← Main component (state + API calls)
    │   ├── main.jsx                ← Entry point
    │   └── index.css               ← Tailwind imports
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── postcss.config.js
```

---

## Step-by-Step Setup Instructions

### Prerequisites

Make sure you have installed:
- Node.js 18+

---

## FRONTEND SETUP (React + Vite)

### Step 1 — Create React Project

```bash
npm create vite@latest frontend -- --template react
cd frontend
```

### Step 2 — Install Dependencies

```bash
npm install
npm install axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3 — Configure Tailwind CSS

**Replace `tailwind.config.js`** with the content from `tailwind.config.js` provided.

**Replace `src/index.css`** with the content from `index.css` provided.

### Step 4 — Copy the Source Files

Copy these files into the correct locations:

| File provided | Copy to |
|---|---|
| `axios.js` | `src/api/axios.js` |
| `App.jsx` | `src/App.jsx` |
| `ServiceTable.jsx` | `src/components/ServiceTable.jsx` |
| `ServiceForm.jsx` | `src/components/ServiceForm.jsx` |
| `main.jsx` | `src/main.jsx` |

Make sure you create the `src/api/` and `src/components/` folders if they don't exist.

### Step 5 — Start the Frontend

```bash
npm run dev
```

React will run at: `http://localhost:5173`

---

## How the App Works

```
User Action           React Component     Axios Call              Laravel
─────────────────────────────────────────────────────────────────────────────
Page loads         →  App.jsx             GET /api/services    →  index()
Click "Add"        →  ServiceForm shows
Submit form        →  handleAdd()         POST /api/services/store   →  store()
Click "Edit"       →  ServiceForm shows (pre-filled)
Submit edit form   →  handleUpdate()      POST /api/services/update/1  →  update()
Click "Delete"     →  handleDelete()      DELETE /api/services/destroy/1 → destroy()
```

---

## API Endpoints Reference

| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/services` | Get all services |
| POST | `/api/services/store` | Create a new service |
| POST | `/api/services/update/{id}` | Update a service |
| DELETE | `/api/services/destroy/{id}` | Delete a service |

---

## Technologies Used

| Technology | Purpose |
|---|---|
| React 18 | UI frontend |
| Vite | Frontend build tool |
| Tailwind CSS | Styling |
| Axios | HTTP requests |

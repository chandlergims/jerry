# Stickfiggy - Mascot Voting System

A fun interactive application that allows users to vote on features to add to a stick figure mascot.

## Features

- Interactive stick figure mascot with a hat
- Voting system for new features (glasses, teeth, shoes, backpack)
- Real-time voting results display
- History of previous voting results
- Showcase of available features

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB installation)

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/stickfiggy.git
cd stickfiggy
```

### Install frontend dependencies

```bash
npm install
```

### Install backend dependencies

```bash
cd server
npm install
```

## Configuration

Create a `.env` file in the server directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Running the Application

### Start the backend server

```bash
cd server
npm run dev
```

This will start the backend server on http://localhost:5000

### Start the frontend development server

```bash
# In the root directory
npm run dev
```

This will start the frontend development server on http://localhost:5173

## API Endpoints

- `GET /api/votes/init` - Initialize votes for all features
- `GET /api/votes` - Get all votes
- `POST /api/votes` - Submit a vote for a feature
- `GET /api/votes/:feature` - Get votes for a specific feature

## Project Structure

```
stickfiggy/
├── public/                # Static assets
├── server/                # Backend code
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   └── server.js          # Server entry point
├── src/                   # Frontend code
│   ├── assets/            # Frontend assets
│   ├── components/        # React components
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Entry point
├── package.json           # Frontend dependencies
└── README.md              # Project documentation
```

## Deployment on Railway

### Backend Deployment

1. Create a new project on Railway
2. Connect your GitHub repository
3. Add the following environment variables:
   - `MONGODB_URI`: `mongodb+srv://jacksons:OavA9UdQocJpvqdj@cluster0.hxfim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
   - `PORT`: `5000`
4. Deploy the project

### Frontend Deployment

1. Create a new project on Railway or Vercel
2. Connect your GitHub repository
3. Add the following environment variables:
   - `VITE_API_URL`: URL of your deployed backend (e.g., `https://your-backend.railway.app`)
4. Deploy the project

## License

MIT

# Namana & Preethi's Lounge

Complete premium restaurant website and management web application for:

**Namana & Preethi's Lounge**  
Data Science Department, BIET College, Davangere  
Tagline: **Where Great Food Meets Great Memories**

## Features

- Luxury responsive React website with animated hero, food cards, gallery, quote slideshow, and dashboard UI.
- Customer registration, login, logout, forgot password placeholder, profile dashboard, favorites, loyalty points.
- JWT authentication with bcrypt password hashing.
- Table reservations with pending, confirmed, and cancelled statuses.
- Nodemailer email notification hooks for reservation lifecycle.
- Socket.io real-time notification events.
- Online food ordering with search, filters, cart, status tracking, and 5% GST calculation.
- GST invoice generation with PDF download support on frontend and backend.
- Admin dashboard for revenue, sales, customers, orders, reservations, and menu management.
- MongoDB models for Customer, Admin, FoodItem, Reservation, Order, Bill, and Notification.
- Seed data for default admin and complete menu.

## Project Structure

```text
client/
  src/components
  src/pages
  src/assets
  src/context
server/
  controllers
  middleware
  models
  routes
  seed
  utils
```

## Installation

```bash
npm install
npm run install:all
```

## Environment Variables

Copy `server/.env.example` to `server/.env`.

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/namana-preethi-lounge
JWT_SECRET=replace_with_a_long_random_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM="Namana & Preethi's Lounge <your-email@gmail.com>"
```

For Gmail, create an App Password from Google Account security settings and use it as `EMAIL_PASS`.

## MongoDB Atlas Setup

1. Create a free MongoDB Atlas cluster.
2. Create a database user and password.
3. Allow your IP address from Network Access.
4. Copy the connection string into `MONGO_URI`.
5. Run seed data:

```bash
npm run seed
```

Default admin:

```text
Email: admin@namananpreethilounge.com
Password: Admin@123
```

## Local Development

```bash
npm run dev
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5000`

## Render Deployment Guide

### Backend

1. Create a new Render Web Service.
2. Set root directory to `server`.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add all environment variables from `server/.env.example`.
6. Set `CLIENT_URL` to your deployed frontend URL.

### Frontend

1. Create a Render Static Site.
2. Set root directory to `client`.
3. Build command: `npm install && npm run build`
4. Publish directory: `dist`
5. Add:

```env
VITE_API_URL=https://your-backend.onrender.com/api
```

## Notes

The app uses polished remote sample food and dining images from Unsplash. Replace image URLs in `client/src/data.js` and seed records with your own restaurant photography for the best competition presentation.

# News Explorer: Frontend

This is the frontend client for the News Explorer web application.
Users can search the News API for articles, register/sign in, save articles to their profile, and view/remove saved content. The application is fully responsive and built using modern frontend practices.

---

## Live Application

- **Frontend:** https://newsexplorer.wildsurf.net/
- **Backend Repo:** https://github.com/jraebowen/news-explorer-backend
- **Recorded project overview:** https://www.loom.com/share/521bbbc9e1c34b69bafaf5b92e37ab0d

---

## Features and Funcitonality

### Article Search

- Integrated with NewsAPI.org to fetch articles based on user-provided keywords
- Search results dynamically render as responsive cards
- Each card includes title, description, keyword, author, date, and image

### User Authentication

- Users can register and sign in
- Authentication is handled via JWT stored in localStorage
- UI dynamically updates based on logged-in state
- Invalid tokens automatically log the user out

### Save & Manage Articles

- Logged-in users can save any article from the main search page
- Saved articles appear on the Saved Articles dashboard
- Users can remove saved articles from their profile page
- Saved articles page shows:
  - total saved articles count
  - keyword summary

### Responsive UI

- Built to match the provided Figma design and optimized for devices of all sizes.

## Technologies and Techniques

### React + JavaScript

- Component-based architecture for reusability
- Managed UI state using Hooks (useState, useEffect, useContext, useMemo)
- Context API for global user state
- Controlled forms for login, registration, search input
- Accessible modal components

### Routing

- Implemented with React Router
- Protected Routes redirect users to:
  - Home, then open the Sign In modal
  - Ensures consistent UX even when hitting protected URLs manually

### API Integration

- Custom API utility uses fetch() with:
  - GET/POST/DELETE requests
  - Authorization headers
  - Unified error handling
- Two API sources:
  - News API (external)
  - Backend API (user auth + saved articles)

### CSS + BEM

- Fully modular BEM class naming
- Responsive layout using:
  - Flexbox
  - Grid
  - Media queries

### Vite

- Fast development environment
- Bundling for production
- Cleaner file structure + modern tooling

## Project Structure

```
news-explorer-frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # Global state (CurrentUserContext)
│   ├── hooks/          # Custom hooks (useForm)
│   ├── utils/          # API helpers
│   ├── images/         # Static images
│   ├── App.jsx         # Main application logic
│   └── index.jsx       # Entry point
├── public/
└── vite.config.js
```

## Running the Project Locally

### Install dependencies

npm install

### Run server in development mode

npm run dev

### Build for production

npm run build

### deploy

npm run deploy

## Ensure the .env file includes:

VITE_API_URL=https://newsexplorer.wildsurf.net
VITE_NEWS_API_KEY=your_news_api_key

## Backend Integration

Frontend communicates with backend endpoints:

- POST /signup
- POST /signin
- GET /users/me
- GET/POST/DELETE /articles

## Figma

Design reference:
https://www.figma.com/design/3ottwMEhlBt95Dbn8dw1NH/Your-Final-Project?node-id=22618-1384

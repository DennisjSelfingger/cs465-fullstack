

## Author  
**Dennis J Selfinger**  
💻 GitHub: [DennisjSelfingger](https://github.com/DennisjSelfingger)  


# Travlr Getaways – Full Stack Web Application  

## 🏗️ Overview  
Travlr Getaways is a full stack web application developed as part of CS 465. It provides functionality for both **customers** (to view trips) and **administrators** (to manage trip information securely). The project was built in iterative modules, beginning with a static Express site and progressing to a secure, database-driven single-page application (SPA) with an Angular front-end and an Express/MongoDB backend.  

---

## 🧱 Architecture  

- **Frontend Development**  
  - **Express HTML & Handlebars:** Initial development used static HTML pages later refactored into Handlebars templates with partials (headers, footers) for reusability.  
  - **JavaScript Enhancements:** Client-side logic was added for rendering JSON data and interacting with API responses.  
  - **Angular SPA:** An Angular-based admin site was implemented to provide a responsive, dynamic user experience with efficient client-side routing.  

- **Backend Development**  
  - Built with **Express.js**, using MVC (Model-View-Controller) for routes, controllers, and views.  
  - **MongoDB (NoSQL):** Chosen for its ability to store flexible JSON-like documents, making it ideal for handling travel data without a rigid schema.  
  - **Mongoose:** Used as the ODM (Object Data Modeling) library for schema validation and database operations.  

---

## ⚙️ Functionality  

- **Data Flow (JSON)**  
  JSON acts as the “bridge” between backend and frontend. The backend returns trip data in JSON format, which the frontend parses and renders dynamically.  
  - JSON is a structured data format (key-value pairs), unlike JavaScript which is a programming language.  

- **Refactoring Examples**  
  - Converted static trip HTML into Handlebars loops driven by JSON input.  
  - Created reusable components (e.g., headers, footers, Angular trip listing cards) to reduce redundancy and improve maintainability.  
  - Built API endpoints for CRUD operations to decouple data from the UI.  

---

## 🧪  Testing  

- **API Testing**  
  - Verified with **Postman** for GET, POST, PUT, and DELETE requests to `/api/trips`.  
  - Confirmed correct JSON responses and error handling.  

- **Security Testing**  
  - Verified JWT authentication on protected routes.  
  - Tested scenarios:  
    - Unauthorized access attempts without tokens.  
    - Invalid login credentials.  
    - Valid tokens granting access.  

- **Key Endpoints**  
  - `GET /api/trips` – retrieve all trips  
  - `GET /api/trips/:tripCode` – retrieve a single trip  
  - `POST /api/trips` – add a new trip (admin only)  
  - `PUT /api/trips/:tripCode` – update a trip (admin only)  
  - `DELETE /api/trips/:tripCode` – delete a trip (admin only)  

---

## 🚀  Setup & Installation  

### Prerequisites  
- [Node.js (LTS)](https://nodejs.org)  
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community)  
- [Angular CLI](https://angular.io/cli)  

### Installation Steps  
1.### Installation Steps  
1. Clone the repository:  
   git clone https://github.com/DennisjSelfingger/cs465-fullstack.git
   cd cs465-fullstack

### 2.
npm install

### 3.
node app_api/models/seed.js
 ### 4.
 npm start

 ### 5.
 cd app_admin
ng serve

### Security Features

Admin login with JWT authentication

Middleware token verification for protected routes

Secure password hashing using best practices

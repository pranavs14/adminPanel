# 🧩 Angular Admin Panel

A responsive admin panel built with Angular and Angular Material, featuring login authentication, CRUD operations, and a reusable material table component.

---

## 📌 Features

### 🔐 Login
- Reactive form with validation
- Mock login using dummy credentials
- Redirects to dashboard upon success

### 📊 Dashboard
- Shows total counts of Customers, Users, and Students
- Chart.js integration for visual analytics

### 📁 Admin Layout
- Sidebar navigation: Dashboard, Customer, User, Student
- Logout button in header
- Guarded routes using AuthGuard

### 📦 Reusable Material Table
- Inputs: `columns`, `data`
- Outputs: `edit`, `delete` events
- Includes sorting, filtering, and pagination

### 📝 CRUD Pages
- Add, Edit, Delete records for:
  - Customers
  - Users
  - Students
- Data managed through shared Angular Service
- Stored in `localStorage`

---

## 🛠 Tech Stack

- Angular 16+
- Angular Material
- Chart.js
- Bootstrap (optional)
- localStorage (for simulating backend)

---

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/your-username/angular-admin-panel.git
cd angular-admin-panel

# Install dependencies
npm install

# Run the app
ng serve --open

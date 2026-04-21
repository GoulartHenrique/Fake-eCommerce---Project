# 🛍️ Fake eCommerce

A fully responsive eCommerce web app built with React, consuming real product data from [FakeStoreAPI](https://fakestoreapi.com). Features a shopping cart with persistent storage, category filtering, and a clean UI powered by Tailwind CSS and DaisyUI.

🌐 [Live Demo](https://fake-ecommerce-project.onrender.com) &nbsp; 💻 [GitHub](https://github.com/GoulartHenrique/Fake-eCommerce---Project)

---
Screenshots

<img width="1900" height="831" alt="screencapture-localhost-5173-cart-2026-04-21-10_37_40" src="https://github.com/user-attachments/assets/29c88757-8f14-444d-a7ef-d17bb151d1f5" />
<img width="1900" height="2347" alt="screencapture-localhost-5173-2026-04-21-10_36_04" src="https://github.com/user-attachments/assets/d5ff647e-ce47-4824-ba9d-bc54cbfb16ec" />

## Features

- 📦 Product listing fetched from FakeStoreAPI
- 🗂️ Category filtering with active state
- 🛒 Add, remove, and manage cart items
- ➕➖ Quantity controls — never goes below zero
- 💶 Prices formatted in Euro (€) using `Intl.NumberFormat`
- 💾 Cart persisted with `localStorage` — survives page reloads
- 📱 Fully responsive
- ⏳ Loading spinner while fetching data
- 🎨 Styled with Tailwind CSS v4 + DaisyUI v5

---

## Pages

- **Home** - Product listing with category filter and add to cart functionality
- **Cart** - Cart page with quantity controls, subtotals, and total price

---

## Technologies

- React
- Vite
- React Router v6
- Tailwind CSS v4
- DaisyUI v5
- FakeStoreAPI
- localStorage
- react-icons

---

## How to run

```bash
# Clone the repository
git clone https://github.com/GoulartHenrique/Fake-eCommerce---Project.git

# Navigate to the project folder
cd Fake-eCommerce---Project

# Install dependencies
npm install

# Start the development server
npm run dev
```

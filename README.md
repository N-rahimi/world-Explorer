# 🌍 World Explorer

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-3-blue?style=for-the-badge&logo=css3)

**A modern country explorer website built with Next.js App Router**

[Features](#features) • [API Used](#api-used) • [Installation](#run-locally) • [Screenshots](#screenshots) • [Topics Practiced](#nextjs-topics-practiced)

</div>

---

## 📋 About The Project

**World Explorer** is a comprehensive Next.js application that allows users to explore countries from around the globe. Users can browse countries, view detailed information about each country, search for specific countries by name, and access Google Maps locations for each country.

This project was developed as part of a Next.js curriculum to demonstrate mastery of modern Next.js concepts including the App Router, server and client components, dynamic routing, and various data fetching strategies.

### 🎯 What This Project Does

- Displays detailed information about 195+ countries worldwide
- Shows country flags, capitals, populations, regions, and more
- Provides search functionality to find countries by name
- Offers dynamic detail pages for each country with comprehensive data
- Integrates Google Maps for geographical visualization

---

## ✨ Features

### Core Features

| Feature                      | Description                                                               |
| ---------------------------- | ------------------------------------------------------------------------- |
| 🏠 **Home Page**             | Hero section with welcome message and call-to-action                      |
| 🌍 **Countries Page**        | Grid display of 20+ countries with flags and basic info                   |
| 📋 **Country Details**       | Comprehensive information including languages, currencies, and time zones |
| 🔍 **Search Functionality**  | Real-time filtering of countries by name                                  |
| ℹ️ **About Page**            | Project documentation and technology overview                             |
| 🗺️ **Google Maps**           | Direct links to each country's location                                   |
| 📱 **Responsive Design**     | Mobile-friendly layout with hamburger menu                                |
| ⚡ **Optimized Performance** | Strategic caching for fast load times                                     |

### Technical Features

- ✅ **Static Rendering** with `force-cache` on countries list
- ✅ **Dynamic Rendering** with `no-store` on country details
- ✅ **Client-side Search** using React hooks
- ✅ **Shared Layout** with persistent Navbar and Footer
- ✅ **Metadata API** for SEO optimization

---

## 🛠️ Technologies Used

````javascript
const techStack = {
  framework: "Next.js 14 (App Router)",
  ui: "React 18",
  styling: "CSS3 with responsive design",
  api: "REST Countries API v3.1",
  language: "JavaScript ES6+",
  caching: "Next.js fetch API with force-cache & no-store"
};
📦 API Used
This project uses the REST Countries API - a free, open-source RESTful API that provides comprehensive data about countries worldwide.

Endpoints Used
javascript
// Get all countries (with caching)
GET https://restcountries.com/v3.1/all

// Get single country by code (dynamic)
GET https://restcountries.com/v3.1/alpha/{code}

// Search countries by name
GET https://restcountries.com/v3.1/name/{name}
Data Displayed
Country name (common & official)

Flag (PNG format)

Capital city

Region & Subregion

Population

Languages

Currencies

Time zones

Google Maps link

🚀 Run Locally
Prerequisites
Node.js 18.17 or later

npm or yarn package manager

Installation Steps
Clone the repository

bash
git clone https://github.com/your-username/world-explorer.git
cd world-explorer
Install dependencies

bash
npm install
# or
yarn install
Run the development server

bash
npm run dev
# or
yarn dev
Open your browser
Navigate to http://localhost:3000

Build for Production
bash
npm run build
npm start

📸 Screenshots
🏠 Home Page
https://./screenshots/home.png
Hero section with welcome message and navigation

🌍 Countries Page
https://./screenshots/countries.png
*Grid layout displaying 250+ countries with flags and basic information*

📋 Country Details Page
https://./screenshots/details.png
Comprehensive country information including languages, currencies, and Google Maps

🔍 Search Page
https://./screenshots/search.png
Real-time search filtering by country name, region, and population sorting

ℹ️ About Page
https://./screenshots/about.png
Project documentation and technology stack overview

📚 Next.js Topics Practiced

Topic	Implementation
App Router	All pages use the new App Router structure in /app directory
File-based Routing	Routes determined by folder structure (/about, /countries/[code])
Shared Layouts	layout.js wraps all pages with Navbar and Footer
Dynamic Routes	/countries/[code]/page.js for individual country pages
Server Components	Countries page uses async/await for data fetching
Client Components	Search component uses "use client" with useState
Data Fetching	Native fetch API with async/await pattern
Static Rendering	cache: "force-cache" on /countries page
Dynamic Rendering	cache: "no-store" on /countries/[code] page
Search Functionality	Client-side filtering with useState and useMemo
Code Examples
Cached Fetch (Countries Page)

javascript
// This page can be statically rendered and cached.
const res = await fetch("https://restcountries.com/v3.1/all", {
  cache: "force-cache",
});
Dynamic Fetch (Country Details)

javascript
// This page fetches fresh data every time.
const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
  cache: "no-store",
});

🎨 Styling Features

✅ Clean, modern design with gradient background

✅ Responsive grid layout for country cards

✅ Hover effects on cards and buttons

✅ Mobile-friendly navbar with hamburger menu

✅ Card-based design with shadows and rounded corners

✅ Smooth transitions and animations

✅ Accessible color contrast

🌟 Bonus Features Implemented

✅ Responsive Design - Fully functional on all device sizes

✅ Custom Styling - Unique design with CSS3 features

✅ Loading States - Feedback during data fetching

✅ Error Handling - Graceful fallback for API issues

📝 License
This project is created for educational purposes as part of a Next.js assignment.

👨‍💻 Author
Your Name

GitHub: @yourusername

🙏 Acknowledgments
REST Countries API for providing free country data

Next.js team for the amazing framework

FlagCDN for flag images

<div align="center">
Made with ❤️ using Next.js

</div> ```
````

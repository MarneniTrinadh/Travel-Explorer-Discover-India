Travel Explorer: Discover India

A responsive tourism discovery website for exploring Indian destinations state by state. It is a plain HTML, CSS and JavaScript project (styled with Tailwind via CDN). There is no build step and no backend.

Features
47 destinations across 33 states and UTs, in six categories: Heritage (12), Mountains (12), Adventure (7), Wildlife (7), Spiritual (5) and Beaches (4).
Search and filters: hero search, category selection, state filter, budget tier filter and sorting (including budget low to high and high to low). A reset button clears everything.
Destination details: a modal for each place with its description, rating, best season, suggested duration and estimated daily cost.
Favourites: save destinations with a heart. They are stored in localStorage, shown in a wishlist drawer, and can be cleared or sent straight to the planner.
Trip and budget planner: choose a destination, days, travellers, travel tier (budget, explorer or luxury) and transport mode (flight, road or the default). It shows a breakdown of stay, food, activities and transport, plus a total and a per-person estimate.
Save or share a trip: save the latest plan to localStorage, or copy a text summary.
Add your own destination: a form to add a new place, saved in the browser and included in search, filters and the planner.
Image fallback: if a photo fails to load, the page generates an SVG placeholder for that place and category.
Mobile friendly: responsive layout with a mobile menu, and toast notifications for actions.
Project structure
travel_explorer_discover_india/
├── index.html           Page markup (nav, hero, categories, destinations, planner, footer)
├── styles.css           Custom CSS (scrollbars, hero gradient, glass effect)
├── tailwind-config.js   Tailwind theme: brand colours and fonts
├── script.js            Data, filtering, favourites, planner and modals
└── README.md
Run locally

Open index.html in a browser. Or start a simple server from this folder:

bash
python -m http.server 8000

Then visit http://localhost:8000/

An internet connection is needed because Tailwind, Font Awesome, Google Fonts and the destination photos load from CDNs.

Customising
Add or edit destinations: the DEFAULT_DESTINATIONS array at the top of script.js holds each place's id, name, state, category, rating, reviewsCount, costPerDay, bestSeason, duration, image and description.
Change colours and fonts: edit tailwind-config.js (saffron, emerald, sand, Plus Jakarta Sans, Playfair Display).
Adjust budget estimates: edit calculateBudget() in script.js. The daily cost is split into stay (45%), food (25%), activities (15%) and local transit (15%), then adjusted by travel tier, with a base transport cost by mode.
Data storage

Everything is kept in the visitor's browser with localStorage:

Key	Contents
travelbharat_custom_destinations_v1	Destinations added through the form
travelbharat_favourites_v1	Saved favourites
travelbharat_last_saved_plan	Last saved trip plan

Clear your browser's site data to reset them.

Tech stack

HTML5, CSS3, vanilla JavaScript, Tailwind CSS (CDN), Font Awesome 6, Google Fonts.

Notes

Budgets are rough estimates for planning, not live prices. Bookings, payments and live travel services are out of scope.
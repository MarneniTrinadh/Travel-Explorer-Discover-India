// --- 0. HIGH-RELIABILITY PLACE FALLBACK GENERATOR (Never broken, authentic motifs) ---
function getFallbackSvgDataUrl(placeName, category) {
  // Color schemes per category
  const colorThemes = {
    Heritage: { bg1: '#9A3412', bg2: '#C2410C', icon: 'M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5l5 4.5v6H7v-6l5-4.5z', tag: 'HERITAGE & FORTS' },
    Mountains: { bg1: '#0F766E', bg2: '#0D9488', icon: 'M14 6l-3.75 5 2.85 3.8-1.6 1.2L6 8 0 16h24L14 6z', tag: 'MOUNTAINS & VALLEYS' },
    Beaches: { bg1: '#0369A1', bg2: '#0284C7', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z', tag: 'BEACHES & COAST' },
    Adventure: { bg1: '#B45309', bg2: '#D97706', icon: 'M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z', tag: 'ADVENTURE & TREKS' },
    Spiritual: { bg1: '#C2410C', bg2: '#EA580C', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V18h-2v-1.07A6.002 6.002 0 016 11h2a4 4 0 108 0h2a6.002 6.002 0 01-5 5.93z', tag: 'SPIRITUAL & SACRED' },
    Wildlife: { bg1: '#15803D', bg2: '#16A34A', icon: 'M4.5 11c1.38 0 2.5-1.12 2.5-2.5S5.88 6 4.5 6 2 7.12 2 8.5 3.12 11 4.5 11zm15 0c1.38 0 2.5-1.12 2.5-2.5S20.88 6 19.5 6 17 7.12 17 8.5s1.12 2.5 2.5 2.5zm-11-4C9.88 7 11 5.88 11 4.5S9.88 2 8.5 2 6 3.12 6 4.5 7.12 7 8.5 7zm7 0c1.38 0 2.5-1.12 2.5-2.5S16.88 2 15.5 2 13 3.12 13 4.5s1.12 2.5 2.5 2.5zM12 11.5c-3.59 0-6.5 2.47-6.5 5.5 0 2.37 1.8 3.5 3.5 4.5 1 .59 2.05 1.5 3 1.5s2-.91 3-1.5c1.7-1 3.5-2.13 3.5-4.5 0-3.03-2.91-5.5-6.5-5.5z', tag: 'WILDLIFE & NATURE' }
  };

  const theme = colorThemes[category] || colorThemes.Heritage;
  const safeTitle = (placeName || 'Incredible India').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.bg1}" />
          <stop offset="100%" stop-color="${theme.bg2}" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.4)"/>
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#grad)" />
      <rect width="800" height="500" fill="url(#glow)" />

      <!-- Subtle Indian Motif Grid Pattern -->
      <g opacity="0.08" stroke="#fff" stroke-width="1.5" fill="none">
        <circle cx="100" cy="100" r="60"/>
        <circle cx="700" cy="100" r="60"/>
        <circle cx="400" cy="250" r="140"/>
        <polygon points="400,150 480,310 320,310"/>
        <circle cx="100" cy="400" r="60"/>
        <circle cx="700" cy="400" r="60"/>
      </g>

      <!-- Central Icon Backdrop -->
      <circle cx="400" cy="190" r="54" fill="rgba(255,255,255,0.18)" />

      <!-- Category Theme Icon -->
      <g transform="translate(376, 166) scale(2)" fill="#ffffff">
        <path d="${theme.icon}"/>
      </g>

      <!-- Text Details -->
      <text x="400" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" letter-spacing="3" fill="#FDE047" text-anchor="middle">${theme.tag}</text>
      <text x="400" y="340" font-family="'Playfair Display', Georgia, serif" font-size="30" font-weight="700" fill="#ffffff" text-anchor="middle">${safeTitle}</text>
      <text x="400" y="380" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.85)" text-anchor="middle">Incredible India • Verified Destination</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`;
}

// Handles any broken image cleanly with custom SVG fallback
function handleImageFallback(imgElement, placeName, category) {
  if (!imgElement) return;
  imgElement.onerror = null; // Prevent infinite recursion
  imgElement.src = getFallbackSvgDataUrl(placeName, category);
}

// --- 1. DEFAULT DATASET: Complete, Accurate Landmarks for all 28 States & UTs ---
const DEFAULT_DESTINATIONS = [
  // 1. ANDHRA PRADESH
  {
    id: "tirupati-temple",
    name: "Tirupati & Venkateswara Swamy",
    state: "Andhra Pradesh",
    category: "Spiritual",
    rating: 4.9,
    reviewsCount: 4120,
    costPerDay: 2100,
    bestSeason: "Sep - Feb",
    duration: "2 - 3 Days",
    image: "https://c9admin.cottage9.com/uploads/2292/Our-Temples-Our-Heritage-Tirumala-Venkateshwara-Temple-Tirupati-Balaji.jpg",
    description: "The sacred hill shrine of Lord Sri Venkateswara atop Tirumala hills in the Seshachalam range, one of the most visited and revered pilgrimage sites on earth.",
    highlights: ["Tirumala Balaji Darshan", "Silathoranam natural rock arch", "Kapila Theertham waterfall", "Famous Tirupati Laddu Prasadam"],
    tags: ["Pilgrimage", "Tirumala", "Sacred", "South India", "Temple Architecture"]
  },
  {
    id: "araku-valley",
    name: "Araku Valley & Borra Caves",
    state: "Andhra Pradesh",
    category: "Mountains",
    rating: 4.7,
    reviewsCount: 1680,
    costPerDay: 2400,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://photo.webindia123.com/gallery/16561/borra%20caves_Main_800.jpg",
    description: "A tranquil hill station nestled in the Eastern Ghats of Andhra Pradesh, famous for its lush organic coffee plantations, indigenous tribal culture, and million-year-old Borra caves.",
    highlights: ["Borra limestone speleothem caves", "Araku tribal museum", "Organic coffee plantation walks", "Katiki cascading falls"],
    tags: ["Eastern Ghats", "Coffee", "Caves", "Tribal Culture", "Waterfalls"]
  },

  // 2. ARUNACHAL PRADESH
  {
    id: "tawang-monastery",
    name: "Tawang Monastery & Sela Pass",
    state: "Arunachal Pradesh",
    category: "Mountains",
    rating: 4.9,
    reviewsCount: 1320,
    costPerDay: 3600,
    bestSeason: "Mar - Oct",
    duration: "4 - 6 Days",
    image: "https://easternroutes.com/wp-content/uploads/2017/12/Sela_Pass_Gate-Tawang-Arunachal_Pradesh.jpg",
    description: "Perched at 10,000 feet near the Tibetan border, Tawang is home to India's largest Buddhist monastery amidst towering snowbound Himalayan peaks and frozen high-altitude lakes.",
    highlights: ["17th-century Tawang Ganden Namgyal Lhatse", "Crossing snow-covered Sela Pass (13,700 ft)", "Madhuri (Sangetsar) Lake", "Nuranang Waterfall"],
    tags: ["Northeast", "Monastery", "Buddhism", "High Altitude Pass", "Himalayas"]
  },

  // 3. ASSAM
  {
    id: "kaziranga-assam",
    name: "Kaziranga National Park",
    state: "Assam",
    category: "Wildlife",
    rating: 4.9,
    reviewsCount: 2350,
    costPerDay: 3600,
    bestSeason: "Nov - Apr",
    duration: "2 - 3 Days",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
    description: "UNESCO World Heritage wildlife sanctuary that protects two-thirds of the world's great Indian one-horned rhinoceroses in the fertile Brahmaputra floodplains.",
    highlights: ["Early morning Elephant safari", "Jeep safari across Central Kohora zone", "Spotting wild water buffaloes & swamp deer", "Assam tea estate walks"],
    tags: ["One Horned Rhino", "UNESCO", "Jungle Safari", "Brahmaputra", "Tea Gardens"]
  },

  // 4. BIHAR
  {
    id: "bodh-gaya",
    name: "Bodh Gaya & Mahabodhi Temple",
    state: "Bihar",
    category: "Spiritual",
    rating: 4.9,
    reviewsCount: 3100,
    costPerDay: 1900,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/mahabodhi-temple-gaya-bihar-4-attr-hero?qlt=82&ts=1726740645749",
    description: "The supreme Buddhist pilgrimage destination where Prince Gautama attained Enlightenment beneath the sacred Bodhi Tree over 2,500 years ago.",
    highlights: ["Mahabodhi Temple UNESCO complex", "Meditating under the Bodhi Tree", "80-Foot Giant Buddha statue", "International Buddhist monasteries"],
    tags: ["Buddha", "Enlightenment", "UNESCO", "Spiritual Peace", "Ancient India"]
  },

  // 5. CHHATTISGARH
  {
    id: "chitrakote-falls",
    name: "Chitrakote Falls & Bastar",
    state: "Chhattisgarh",
    category: "Wildlife",
    rating: 4.7,
    reviewsCount: 1150,
    costPerDay: 2300,
    bestSeason: "Jul - Feb",
    duration: "2 - 3 Days",
    image: "https://portal-tourism.cgstate.gov.in//files/CHITRAKOTE%20Poster%20Image.jpg",
    description: "Celebrated as the 'Niagara of India', this horseshoe-shaped cascade stretches nearly 300 meters wide across the Indravati River in the scenic Bastar tribal belt.",
    highlights: ["Boat ride right to the thunderous spray", "Tirathgarh multi-tier waterfall", "Bastar bell-metal Dhokra handicrafts", "Kanger Valley National Park"],
    tags: ["Niagara of India", "Waterfalls", "Bastar", "Tribal Art", "Nature"]
  },

  // 6. GOA
  {
    id: "south-goa-beaches",
    name: "Palolem Beach & South Goa",
    state: "Goa",
    category: "Beaches",
    rating: 4.8,
    reviewsCount: 3500,
    costPerDay: 2800,
    bestSeason: "Nov - Feb",
    duration: "3 - 5 Days",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    description: "Crescent-shaped golden sand shores lined with palm trees and vibrant wooden shacks, offering tranquil beach vibes, sunset kayaking, and Portuguese coastal architecture.",
    highlights: ["Sunset kayaking at Palolem", "Butterfly Beach boat safari", "Cabo de Rama sea fort", "Goan fish curry and local feni"],
    tags: ["Coastal", "Seafood", "Sunsets", "Kayaking", "Tropical"]
  },
  {
    id: "dudhsagar-falls",
    name: "Dudhsagar Waterfalls Trek",
    state: "Goa",
    category: "Adventure",
    rating: 4.8,
    reviewsCount: 2200,
    costPerDay: 2600,
    bestSeason: "Jul - Dec",
    duration: "1 - 2 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtQTDplSqZ6Nnv_qBsuUgso6fzoOKhHC2ptf6CWHgI1viTLO-n1tCbEIV&s=10",
    description: "A spectacular four-tiered sea of milk plummeting 310 meters down the Western Ghats along the railway line on the Mandovi River.",
    highlights: ["Jungle Jeep safari through Bhagwan Mahaveer Sanctuary", "Railway bridge viewpoint trek", "Freshwater pool swimming", "Spice plantation tour"],
    tags: ["Waterfalls", "Trek", "Western Ghats", "Offroad Safari"]
  },

  // 7. GUJARAT
  {
    id: "rann-of-kutch",
    name: "White Rann of Kutch",
    state: "Gujarat",
    category: "Heritage",
    rating: 4.9,
    reviewsCount: 2400,
    costPerDay: 3800,
    bestSeason: "Nov - Feb (Rann Utsav)",
    duration: "3 - 4 Days",
    image: "https://vl-prod-static.b-cdn.net/system/images/000/705/236/e4b3464ad9ff8ce8d497508bc273e160/original/Rann-Utsav-Rann-of-Kutch-Tour-Packages.jpg?width=1600",
    description: "The world's largest salt desert comes alive under moonlit skies with colorful Kutchi embroidery, camel rides, folk music, and grand tent city luxury during Rann Utsav.",
    highlights: ["Full moon walk on crystalline white salt", "Kala Dungar panoramic sunset point", "Rann Utsav musical folk performances", "Nirona village Rogan art artisans"],
    tags: ["Salt Desert", "Rann Utsav", "Kutch", "Handicrafts", "Folk Culture"]
  },
  {
    id: "gir-national-park",
    name: "Gir Forest — Asiatic Lion Kingdom",
    state: "Gujarat",
    category: "Wildlife",
    rating: 4.9,
    reviewsCount: 1950,
    costPerDay: 3700,
    bestSeason: "Dec - Mar",
    duration: "2 - 3 Days",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
    description: "The exclusive and only natural sanctuary in the world where the majestic Asiatic Lion roams freely in rugged teak and deciduous dry forests.",
    highlights: ["Open-top 4x4 Asiatic Lion Safari", "Spotting leopards & chital deer", "Maldhari tribal settlement visits", "Somnath Temple nearby day trip"],
    tags: ["Asiatic Lion", "Safari", "Wildlife Sanctuary", "Nature"]
  },

  // 8. HARYANA
  {
    id: "kurukshetra-heritage",
    name: "Kurukshetra & Brahma Sarovar",
    state: "Haryana",
    category: "Heritage",
    rating: 4.6,
    reviewsCount: 1100,
    costPerDay: 1800,
    bestSeason: "Oct - Mar",
    duration: "1 - 2 Days",
    image: "https://holaciti.com/assets/place/1765782092place.webp",
    description: "The legendary battlefield of the Mahabharata and the sacred land where Lord Krishna imparted the wisdom of the Bhagavad Gita at Jyotisar.",
    highlights: ["Vast waters of Brahma Sarovar", "Jyotisar Gita birthplace banyan tree", "Panorama and Heritage Museum", "Sheikh Chilli's Mughal tomb"],
    tags: ["Mahabharata", "Bhagavad Gita", "Heritage", "History", "Sacred Waters"]
  },

  // 9. HIMACHAL PRADESH
  {
    id: "manali-solang",
    name: "Manali & Solang Valley",
    state: "Himachal Pradesh",
    category: "Adventure",
    rating: 4.8,
    reviewsCount: 3870,
    costPerDay: 2800,
    bestSeason: "Oct - Jun (Snow in Dec-Feb)",
    duration: "4 - 5 Days",
    image: "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=400%2Cheight=265%2Cdpr=2/tour_img/f1054b690e7029c5e6771f42409b056fa9178b0f92263c82a23a01d9415089af.jpeg",
    description: "Surrounded by cedar woods, soaring snow peaks, and apple orchards. Known for paragliding, skiing in Solang, bohemian Old Manali cafes, and Atal Tunnel drives.",
    highlights: ["Atal Tunnel crossing to Lahaul Valley", "Solang paragliding & zorbing", "Hadimba Temple cedar woodland", "Jogini Waterfall hike"],
    tags: ["Snow", "Himalayas", "Paragliding", "Rohtang Pass", "Adventure"]
  },
  {
    id: "spiti-valley",
    name: "Spiti Valley & Key Monastery",
    state: "Himachal Pradesh",
    category: "Mountains",
    rating: 4.9,
    reviewsCount: 1740,
    costPerDay: 3400,
    bestSeason: "May - Oct",
    duration: "6 - 8 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ItX9KjNHMar4dESv322UKOgH54XeLWIcdHU4kbOyH4s5IeD6nntyYJXE&s=10",
    description: "A cold desert mountain valley blessed with ancient fortress-like Tibetan monasteries, lunar landscapes, star-filled night skies, and high trans-Himalayan passes.",
    highlights: ["Key Monastery perched on a hilltop", "World's highest post office at Hikkim", "Chandratal (Moon Lake) camping", "Chicham Bridge over the gorge"],
    tags: ["Cold Desert", "Stargazing", "Monasteries", "High Altitude", "Trans Himalayas"]
  },

  // 10. JHARKHAND
  {
    id: "netarhat-betla",
    name: "Netarhat Plateau & Betla",
    state: "Jharkhand",
    category: "Wildlife",
    rating: 4.6,
    reviewsCount: 980,
    costPerDay: 2000,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://www.gobhramanholidays.com/wp-content/uploads/2025/03/betla-package.jpeg",
    description: "Known for enchanting sunrise and sunset viewpoints over undulating plateaus, dense sal forests, Lodh cascading falls, and nearby Betla National Park.",
    highlights: ["Magnolia sunset point", "Lodh Falls (highest in Jharkhand)", "Betla National Park tiger & elephant safaris", "Palamu ancient forts in the jungle"],
    tags: ["Plateau", "Sunsets", "Forests", "Waterfalls", "Unexplored"]
  },

  // 11. KARNATAKA
  {
    id: "hampi-karnataka",
    name: "Hampi & Stone Chariot",
    state: "Karnataka",
    category: "Heritage",
    rating: 4.9,
    reviewsCount: 2850,
    costPerDay: 2200,
    bestSeason: "Oct - Feb",
    duration: "3 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWop8n-TDUs9gIYNqg3e6w26WWs_PXq5NwA60PcB3KKhIbOpzgFgH_dNM&s=10",
    description: "UNESCO World Heritage site filled with monolithic stone chariots, colossal statues, and riverside temples set against otherworldly granite boulder-strewn hills.",
    highlights: ["Iconic Stone Chariot at Vijaya Vittala", "Sunset hike up Matanga Hill", "Coracle boat ride on Tungabhadra river", "Active Virupaksha Temple ceremonies"],
    tags: ["UNESCO", "Vijayanagara", "Ancient Ruins", "Stone Chariot", "History"]
  },
  {
    id: "coorg-scotland",
    name: "Coorg Coffee Highlands",
    state: "Karnataka",
    category: "Mountains",
    rating: 4.8,
    reviewsCount: 3100,
    costPerDay: 3200,
    bestSeason: "Sep - Mar",
    duration: "3 - 4 Days",
    image: "https://assets.hiddenroutes.in/assets/images/coorg_hero.webp",
    description: "Misty hill station blankets of coffee, cardamom, and black pepper plantations accompanied by roaring waterfalls and Tibetan Golden Temple at Bylakuppe.",
    highlights: ["Abbey & Iruppu waterfalls", "Namdroling Golden Temple monastery", "Tadiandamol peak trek", "Plantation homestay dining (Pandi curry)"],
    tags: ["Western Ghats", "Coffee Estates", "Waterfalls", "Tibetan Settlement"]
  },

  // 12. KERALA
  {
    id: "munnar-kerala",
    name: "Munnar Tea Plantations",
    state: "Kerala",
    category: "Mountains",
    rating: 4.9,
    reviewsCount: 3400,
    costPerDay: 3100,
    bestSeason: "Sep - Mar",
    duration: "3 - 4 Days",
    image: "https://cdn.bluebirdtravels.in/wp-content/uploads/uncategorized/bonkers_image_image_inspiration-1-800x530.jpg",
    description: "Rolling velvet carpets of manicured tea gardens enveloped in misty clouds, rare mountain wildlife, and refreshing cool highland air.",
    highlights: ["Eravikulam National Park & Nilgiri Tahr", "Mattupetty Dam boat safari", "Tea processing factory tour", "Top Station valley panoramas"],
    tags: ["Gods Own Country", "Tea Gardens", "Western Ghats", "Hills"]
  },
  {
    id: "alleppey-backwaters",
    name: "Alleppey Houseboat Backwaters",
    state: "Kerala",
    category: "Beaches",
    rating: 4.9,
    reviewsCount: 3950,
    costPerDay: 3800,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    description: "Glide peacefully on traditional wooden Kettuvallam houseboats through an interconnected maze of canals, lagoons, paddy fields, and coconut groves.",
    highlights: ["Overnight cruise on luxury houseboat", "Authentic Karimeen Pollichathu feast", "Vembanad Lake bird watching", "Marari serene beach stroll"],
    tags: ["Backwaters", "Houseboat", "Lagoon", "Kerala Food", "Relaxation"]
  },

  // 13. MADHYA PRADESH
  {
    id: "khajuraho-monuments",
    name: "Khajuraho Group of Temples",
    state: "Madhya Pradesh",
    category: "Heritage",
    rating: 4.8,
    reviewsCount: 2200,
    costPerDay: 2600,
    bestSeason: "Oct - Mar",
    duration: "2 Days",
    image: "https://indiaholidaymall.com/images/blog/Khajuraho-Temple.jpg",
    description: "UNESCO World Heritage masterwork of Chandela dynasty architecture renowned for stunning sandstone carving masterpieces depicting dance, meditation, and life.",
    highlights: ["Kandariya Mahadeva temple complex", "Light and Sound evening show", "Western Group erotic stone reliefs", "Raneh Falls canyon day trip"],
    tags: ["UNESCO", "Chandela Dynasty", "Sculptures", "Ancient Temples", "Heart of India"]
  },
  {
    id: "kanha-tiger-reserve",
    name: "Kanha & Bandhavgarh Tiger Reserves",
    state: "Madhya Pradesh",
    category: "Wildlife",
    rating: 4.9,
    reviewsCount: 2100,
    costPerDay: 4200,
    bestSeason: "Oct - May",
    duration: "3 - 4 Days",
    image: "https://indiaforbeginners.com/wp-content/uploads/2020/02/Adobe-tigers-Bandhavgarh.jpg",
    description: "The legendary jungle inspiration behind Rudyard Kipling's Jungle Book, boasting the highest density of Royal Bengal Tigers in lush sal forest meadows.",
    highlights: ["Royal Bengal Tiger safaris", "Hardground Barasingha swamp deer", "Sunset over Bamni Dadar plateau", "Village Baiga tribal tours"],
    tags: ["Tiger Reserve", "Jungle Book", "Safari", "Wild India", "Big Cats"]
  },

  // 14. MAHARASHTRA
  {
    id: "ajanta-ellora-caves",
    name: "Ajanta & Ellora Caves",
    state: "Maharashtra",
    category: "Heritage",
    rating: 4.9,
    reviewsCount: 3100,
    costPerDay: 2500,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://asi.nic.in/images/ajanta-banner1.jpeg",
    description: "Monolithic engineering marvels carved out of volcanic basalt cliffs, featuring the jaw-dropping Kailash Temple carved top-down from a single rock.",
    highlights: ["Kailasa Temple (Cave 16 monolithic miracle)", "Buddhist fresco paintings at Ajanta", "Ellora multi-faith cave sanctuaries", "Bibi Ka Maqbara in Chhatrapati Sambhajinagar"],
    tags: ["UNESCO", "Rock Cut", "Monolith", "Ancient Art", "Archaeology"]
  },
  {
    id: "mahabaleshwar-ghats",
    name: "Mahabaleshwar & Western Ghats",
    state: "Maharashtra",
    category: "Mountains",
    rating: 4.7,
    reviewsCount: 2750,
    costPerDay: 2700,
    bestSeason: "Jul - Mar",
    duration: "2 - 3 Days",
    image: "https://holaciti.com/assets/place/1752636235_kAkATyzUzL.webp",
    description: "The strawberry capital nestled high in the Sahyadri mountains with dramatic clifftop views, Arthur's seat, historic forts, and misty forest trails.",
    highlights: ["Strawberry farm picking & fresh cream", "Arthur's Seat cliff edge vista", "Pratapgad Shivaji Maharaj fortress", "Venna Lake pedal boating"],
    tags: ["Sahyadris", "Strawberries", "Forts", "Western Ghats", "Monsoon Mist"]
  },

  // 15. MANIPUR
  {
    id: "loktak-lake",
    name: "Loktak Lake & Keibul Lamjao",
    state: "Manipur",
    category: "Wildlife",
    rating: 4.8,
    reviewsCount: 890,
    costPerDay: 2600,
    bestSeason: "Oct - Apr",
    duration: "2 - 3 Days",
    image: "https://images.moneycontrol.com/static-mcnews/2025/07/20250710043116_2-Keibul-Lamjao-national-park.jpg?impolicy=website&width=1280&height=720",
    description: "The world's only floating national park on Loktak Lake, famous for circular floating biomass islands ('Phumdis') and the endangered Sangai dancing deer.",
    highlights: ["Keibul Lamjao floating national park", "Spotting the endangered Sangai deer", "Traditional canoe boating across phumdis", "Sendra island sunset views"],
    tags: ["Floating Lake", "Sangai Deer", "Northeast India", "Wetlands", "Eco Travel"]
  },

  // 16. MEGHALAYA
  {
    id: "cherrapunji-meghalaya",
    name: "Cherrapunji & Living Root Bridges",
    state: "Meghalaya",
    category: "Adventure",
    rating: 4.9,
    reviewsCount: 2420,
    costPerDay: 3100,
    bestSeason: "Oct - Apr",
    duration: "4 - 5 Days",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/double-decker-living-root-bridge-cherrapunjee-meghalaya-1-blog-adv-hero?qlt=82&ts=1742161510517",
    description: "Breathtaking rainforest gorges, plunging waterfalls like Nohkalikai, and indigenous bio-engineered Double Decker Living Root Bridges trained by the Khasi people.",
    highlights: ["Nongriat Double Decker Root Bridge Trek", "Nohkalikai Waterfall edge view", "Crystal-clear waters of Umngot River in Dawki", "Mawsmai limestone caves"],
    tags: ["Living Root Bridge", "Rainforest", "Trekking", "Abode of Clouds", "Northeast"]
  },

  // 17. MIZORAM
  {
    id: "aizawl-reiek",
    name: "Reiek Peak & Aizawl",
    state: "Mizoram",
    category: "Mountains",
    rating: 4.7,
    reviewsCount: 780,
    costPerDay: 2500,
    bestSeason: "Oct - Mar",
    duration: "3 - 4 Days",
    image: "https://site.outlookindia.com/traveller/wp-content/uploads/2017/08/Reiek1_FI.jpg",
    description: "Towering above rolling bamboo hills and sea of clouds, Reiek offers lush panoramic treks paired with traditional Mizo heritage village experiences.",
    highlights: ["Panoramic Reiek clifftop ridge walk", "Authentic Mizo cultural model village", "Solomon's Temple in Aizawl", "Lush rolling blue mountains of Mizoram"],
    tags: ["Blue Mountains", "Northeast", "Ridge Trek", "Mizo Culture", "Cloudscape"]
  },

  // 18. NAGALAND
  {
    id: "dzukou-valley",
    name: "Dzukou Valley & Kohima",
    state: "Nagaland",
    category: "Adventure",
    rating: 4.9,
    reviewsCount: 1250,
    costPerDay: 2900,
    bestSeason: "Jun - Sep (Flowers) & Dec (Hornbill)",
    duration: "4 - 5 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1f1sQknDmaGF7CyRFiFd5XsMAWU3hnjjq8Jde48Aov7kMCky8JWRC4sw&s=10",
    description: "The emerald valley of flowers perched at 2,452 meters with winding streams and rolling green cushions, known also for Nagaland's vibrant Hornbill Festival.",
    highlights: ["Trek across Dzukou's rolling carpet hills", "Hornbill Festival at Kisama Heritage Village", "World War II Kohima War Cemetery", "Khonoma green village walk"],
    tags: ["Trekking", "Valley of Flowers", "Naga Tribes", "Hornbill Festival"]
  },

  // 19. ODISHA
  {
    id: "puri-konark",
    name: "Konark Sun Temple & Puri",
    state: "Odisha",
    category: "Heritage",
    rating: 4.8,
    reviewsCount: 3600,
    costPerDay: 2200,
    bestSeason: "Oct - Mar",
    duration: "3 Days",
    image: "https://www.trawell.in/admin/images/upload/028874969Konark_Main.jpg",
    description: "The monumental 13th-century Konark Sun Temple carved as a giant sun chariot with 24 intricate stone wheels, paired with sacred Puri Jagannath Temple and Golden Beach.",
    highlights: ["UNESCO Konark Sun Temple chariot wheels", "Puri Jagannath Temple darshan & Mahaprasad", "Blue Flag certified Puri Golden Beach", "Chilika Lake Irrawaddy dolphin boat tour"],
    tags: ["UNESCO", "Sun Temple", "Puri Jagannath", "Chilika Dolphins", "East Coast"]
  },

  // 20. PUNJAB
  {
    id: "amritsar-golden-temple",
    name: "Amritsar — Sri Harmandir Sahib",
    state: "Punjab",
    category: "Spiritual",
    rating: 4.9,
    reviewsCount: 4500,
    costPerDay: 2000,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/The_Golden_Temple_of_Amrithsar_7.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    description: "The central spiritual seat of Sikhism, the glorious gold-gilded Harmandir Sahib sits in the Amrit Sarovar, hosting the world's largest free community kitchen (Langar).",
    highlights: ["Golden Temple illuminated night darshan", "Guru Ka Langar community meal", "Wagah Border Beating Retreat ceremony", "Authentic Amritsari Kulcha & lassi"],
    tags: ["Golden Temple", "Langar", "Wagah Border", "Sikh Heritage", "Punjabi Food"]
  },

  // 21. RAJASTHAN
  {
    id: "jaipur-pink-city",
    name: "Jaipur — Amber Fort & Hawa Mahal",
    state: "Rajasthan",
    category: "Heritage",
    rating: 4.8,
    reviewsCount: 3950,
    costPerDay: 3500,
    bestSeason: "Oct - Mar",
    duration: "3 - 4 Days",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/amber-fort-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742157903972",
    description: "The majestic royal capital of Rajasthan known for Amber Fort's mirror palace, Hawa Mahal's honeycomb windows, royal courtyards, and vibrant handicraft bazaars.",
    highlights: ["Amer Fort jeep climb & Sheesh Mahal", "Hawa Mahal facade photography", "City Palace museum & Jantar Mantar", "Authentic Dal Baati Churma"],
    tags: ["Royal", "Forts", "Palaces", "Textiles", "Bazaars", "Amber Fort"]
  },
  {
    id: "udaipur-city-palace",
    name: "Udaipur — City Palace & Pichola",
    state: "Rajasthan",
    category: "Heritage",
    rating: 4.9,
    reviewsCount: 3200,
    costPerDay: 3900,
    bestSeason: "Oct - Mar",
    duration: "3 Days",
    image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80",
    description: "Often hailed as India's most romantic city, boasting shimmering Lake Pichola, floating white marble island palaces, and Rajput Mewar royal history.",
    highlights: ["Lake Pichola sunset boat cruise", "City Palace museum complex", "Jagmandir Island Palace dining", "Bagore Ki Haveli evening folk dance"],
    tags: ["Lakes", "Romance", "Palaces", "Mewar", "Heritage"]
  },
  {
    id: "jaisalmer-thar-desert",
    name: "Jaisalmer Fort & Thar Sand Dunes",
    state: "Rajasthan",
    category: "Adventure",
    rating: 4.8,
    reviewsCount: 2600,
    costPerDay: 3200,
    bestSeason: "Oct - Mar",
    duration: "3 Days",
    image: "https://www.indianholiday.com/wordpress/wp-content/uploads/2026/05/Sand-Dunes-in-Jaisalmer.jpg",
    description: "Rising out of the yellow sands of the Thar Desert, the living golden sandstone fort pairs with thrilling camel safaris and stargazing among desert dunes.",
    highlights: ["Living Sonar Qila (Jaisalmer Fort)", "Sam Sand Dunes camel & jeep safari", "Rajasthani Kalbelia dance by campfire", "Patwon Ki Haveli architecture"],
    tags: ["Thar Desert", "Golden Fort", "Camel Safari", "Dunes", "Adventure"]
  },

  // 22. SIKKIM
  {
    id: "gangtok-gurudongmar",
    name: "Gangtok & Gurudongmar Lake",
    state: "Sikkim",
    category: "Mountains",
    rating: 4.9,
    reviewsCount: 2350,
    costPerDay: 3300,
    bestSeason: "Mar - Jun & Sep - Nov",
    duration: "5 - 6 Days",
    image: "https://discoverwithdheeraj.com/wp-content/uploads/2018/09/DSC_0841-3-copy.jpg",
    description: "Overlooked by Mount Kanchenjunga, Sikkim offers crystal alpine lakes at 17,800 feet, sacred Buddhist monasteries, organic gastronomy, and Himalayan passes.",
    highlights: ["Sacred holy Gurudongmar Lake (17,800 ft)", "Nathu La Pass Indo-China border", "Rumtek Monastery", "MG Marg evening promenade"],
    tags: ["Kanchenjunga", "Himalayas", "Alpine Lake", "Nathu La", "Monastery"]
  },

  // 23. TAMIL NADU
  {
    id: "madurai-meenakshi",
    name: "Madurai Meenakshi Amman Temple",
    state: "Tamil Nadu",
    category: "Spiritual",
    rating: 4.9,
    reviewsCount: 3800,
    costPerDay: 2100,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53bEVD-nv7UWUlAJrhpt2xU-5N-4pzo4ennaQDqO8K_UykjucBadpQGVQ&s=10",
    description: "A triumph of Dravidian architecture on the banks of the Vaigai River, boasting 14 monumental gopurams encrusted with thousands of vividly colored deities.",
    highlights: ["Hall of Thousand Pillars", "Night ceremony procession of Shiva & Meenakshi", "Thirumalai Nayakkar Mahal palace", "Iconic Madurai Jigarthanda cold drink"],
    tags: ["Dravidian Architecture", "Temple City", "Gopuram", "Ancient India", "Meenakshi"]
  },
  {
    id: "ooty-nilgiris",
    name: "Ooty & Nilgiri Mountain Toy Train",
    state: "Tamil Nadu",
    category: "Mountains",
    rating: 4.7,
    reviewsCount: 3100,
    costPerDay: 2800,
    bestSeason: "Oct - Jun",
    duration: "3 - 4 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoovHqA6Iz3tmJZhCcmz4Icuo3if14XCAH_iEUwRDTAQ&s=10",
    description: "The Queen of Hill Stations tucked inside the Blue Mountains, famous for its historic UNESCO toy train, botanical gardens, and scenic tea plantations.",
    highlights: ["UNESCO Nilgiri Mountain Toy Train ride", "Doddabetta highest peak panoramic view", "Ooty Lake boating", "Emerald & Avalanche serene lakes"],
    tags: ["Nilgiris", "Toy Train", "UNESCO", "Blue Mountains", "Tea Estates"]
  },

  // 24. TELANGANA
  {
    id: "hyderabad-charminar",
    name: "Hyderabad — Charminar & Golconda Fort",
    state: "Telangana",
    category: "Heritage",
    rating: 4.8,
    reviewsCount: 3400,
    costPerDay: 2600,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwKGtOt63nM2sntaK08Rhystz4QEUm75n6XKPWqdVZCg&s=10",
    description: "The City of Pearls blending Qutb Shahi and Nizami heritage with acoustic architectural fortresses, bustling spice bazaars, and world-renowned Dum Biryani.",
    highlights: ["Golconda Fort acoustic whisper gallery", "Charminar and Laad Bazaar pearl shopping", "Chowmahalla Palace royal halls", "World-famous Hyderabadi Dum Biryani"],
    tags: ["Nizam Heritage", "Golconda", "Biryani", "Charminar", "City of Pearls"]
  },

  // 25. TRIPURA
  {
    id: "neermahal-unakoti",
    name: "Neermahal Water Palace & Unakoti",
    state: "Tripura",
    category: "Heritage",
    rating: 4.7,
    reviewsCount: 920,
    costPerDay: 2200,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfa9p5Wb0-VC4H-IIGw6YWc6W4nYZv26PzgJt9NonUGaTTIYJNl8LvhWM0&s=10",
    description: "Eastern India's only water palace floating gracefully inside Rudrasagar Lake, alongside the ancient rock-carved Shaivite colossi hidden in the forests of Unakoti.",
    highlights: ["Motorboat cruise to floating Neermahal Palace", "Unakoti ancient rock relief sculptures", "Ujjayanta Palace museum in Agartala", "Tripura Sundari temple"],
    tags: ["Water Palace", "Rock Carvings", "Northeast Heritage", "Unakoti", "Royal"]
  },

  // 26. UTTAR PRADESH
  {
    id: "taj-mahal",
    name: "Taj Mahal & Agra Fort",
    state: "Uttar Pradesh",
    category: "Heritage",
    rating: 4.9,
    reviewsCount: 5200,
    costPerDay: 2800,
    bestSeason: "Oct - Mar",
    duration: "1 - 2 Days",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    description: "The white marble mausoleum on the Yamuna river, recognized worldwide as a New Seven Wonder and the pinnacle of Mughal architecture and eternal romance.",
    highlights: ["Sunrise over the ivory-white Taj Mahal", "Mughal Red Fort palace courtyards", "Mehtab Bagh views across Yamuna", "Agra Petha sweet tastings"],
    tags: ["Wonder of the World", "Mughal", "UNESCO", "Taj Mahal", "Architecture"]
  },
  {
    id: "varanasi-ghats",
    name: "Varanasi & Dashashwamedh Ghats",
    state: "Uttar Pradesh",
    category: "Spiritual",
    rating: 4.9,
    reviewsCount: 4700,
    costPerDay: 1900,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://www.easeindiatrip.com/images/up-img/dashashwamedh-ghat-bg.jpg",
    description: "One of the world's oldest continually inhabited cities. Watch sacred boat rituals, the grand Dashashwamedh Ghat Aarti, and historic silk-weaver alleys along the Ganges.",
    highlights: ["Dawn boat row along the ancient ghats", "Maha Aarti at Dashashwamedh Ghat", "Kashi Vishwanath sacred Corridor", "Sarnath Buddha's first sermon stupa"],
    tags: ["Holy Ganges", "Spiritual", "Ghats", "Varanasi", "Aarti"]
  },

  // 27. UTTARAKHAND
  {
    id: "rishikesh-yoga",
    name: "Rishikesh & Ganga Rapids",
    state: "Uttarakhand",
    category: "Adventure",
    rating: 4.8,
    reviewsCount: 3600,
    costPerDay: 2200,
    bestSeason: "Sep - Nov & Mar - May",
    duration: "3 - 4 Days",
    image: "https://images.staybook.in/things-to-do/rishikesh-ganges-river-rafting-adventure/1.jpg",
    description: "The Yoga Capital of the World where the emerald Ganga leaves the Himalayas, combining white-water rafting, bungee jumping, and soul-stirring evening Ganga aartis.",
    highlights: ["Ganga Grade III/IV River Rafting", "Triveni Ghat & Parmarth Niketan Aarti", "Beatles Ashram graffiti walk", "Cliff jumping & riverside camping"],
    tags: ["Rafting", "Yoga", "Ganges", "Himalayas", "Bungee Jumping"]
  },
  {
    id: "valley-of-flowers",
    name: "Valley of Flowers & Hemkund",
    state: "Uttarakhand",
    category: "Mountains",
    rating: 4.9,
    reviewsCount: 1980,
    costPerDay: 3200,
    bestSeason: "Jul - Sep (Peak blooms)",
    duration: "5 - 6 Days",
    image: "https://trekkingmantra.com/uploads/1785152472328-4b1ad927.png",
    description: "UNESCO World Heritage alpine biosphere carpeted with hundreds of endemic Himalayan wild flower varieties, framed by soaring glacial mountain ramparts.",
    highlights: ["Trekking inside UNESCO alpine flower park", "Hemkund Sahib high glacial lake (14,100 ft)", "Brahma Kamal rare sacred lotus sightings", "Pushpawati River valley trails"],
    tags: ["UNESCO", "Floral Valley", "Trekking", "High Altitude", "Garhwal Himalayas"]
  },

  // 28. WEST BENGAL
  {
    id: "darjeeling-hills",
    name: "Darjeeling & Kanchenjunga",
    state: "West Bengal",
    category: "Mountains",
    rating: 4.8,
    reviewsCount: 3100,
    costPerDay: 2700,
    bestSeason: "Mar - May & Oct - Dec",
    duration: "3 - 4 Days",
    image: "https://fusionstays.com/blog/wp-content/uploads/2024/12/banner-1024x446.jpg",
    description: "The Queen of the Hills offering views of Mount Kanchenjunga, world-famous champagne tea estates, and the heritage UNESCO Himalayan Toy Train.",
    highlights: ["Tiger Hill sunrise over Mt. Kanchenjunga", "UNESCO Darjeeling Himalayan Railway ride", "Happy Valley Tea Estate tour", "Batasia Loop mountain war memorial"],
    tags: ["Toy Train", "UNESCO", "Tea Gardens", "Himalayas", "Kanchenjunga"]
  },
  {
    id: "sundarbans-mangroves",
    name: "Sundarbans Mangrove Delta",
    state: "West Bengal",
    category: "Wildlife",
    rating: 4.7,
    reviewsCount: 1850,
    costPerDay: 3300,
    bestSeason: "Nov - Mar",
    duration: "2 - 3 Days",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80",
    description: "The world's largest halophytic mangrove forest and UNESCO biosphere delta, home to swimming Royal Bengal Tigers, saltwater crocodiles, and Gangetic dolphins.",
    highlights: ["Boat safari winding through narrow tidal canals", "Sajnekhali watchtower bird spotting", "Spotting swimming Bengal tigers", "Estuarine crocodile sanctuaries"],
    tags: ["Mangrove", "UNESCO", "Tigers", "Delta", "Wildlife Safari"]
  },

  // 29. UNION TERRITORY: ANDAMAN & NICOBAR
  {
    id: "andaman-radhanagar",
    name: "Havelock Island & Radhanagar Beach",
    state: "Andaman & Nicobar Islands",
    category: "Beaches",
    rating: 4.9,
    reviewsCount: 2900,
    costPerDay: 4800,
    bestSeason: "Oct - May",
    duration: "5 - 6 Days",
    image: "https://img.avianexperiences.com/trek/9b9aba6a-0321-4268-b6e5-09051b4559a2",
    description: "Rated among Asia's best beaches with sugar-white powdery sands, turquoise waters, vibrant coral reefs, sea walking, and world-class scuba diving sanctuaries.",
    highlights: ["Sunset at world-famous Radhanagar Beach", "Scuba diving at Elephant Beach coral gardens", "Cellular Jail Sound & Light Memorial in Port Blair", "Kayaking through Havelock mangrove channels"],
    tags: ["Beaches", "Coral Reefs", "Scuba Diving", "Radhanagar", "Tropical Waters"]
  },

  // 30. UNION TERRITORY: DELHI
  {
    id: "delhi-heritage-monuments",
    name: "Delhi — Red Fort & Qutub Minar",
    state: "Delhi",
    category: "Heritage",
    rating: 4.8,
    reviewsCount: 4600,
    costPerDay: 2600,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://thepatriot.in/wp-content/uploads/2025/05/Red-Fort-to-Qutub-Minar-Delhi-to-spruce-up-its-iconic-tourist-sites.jpg",
    description: "India's historic capital spanning centuries of empires, boasting three UNESCO World Heritage wonders, labyrinthine Chandni Chowk alleys, and regal Mughal avenues.",
    highlights: ["Qutub Minar 73-meter victory tower", "Humayun's Tomb garden prototype of the Taj", "Mughal Red Fort complex", "Chandni Chowk Paranthe Wali Gali food trail"],
    tags: ["Capital City", "UNESCO", "Mughal Architecture", "Qutub Minar", "Red Fort"]
  },

  // 31. UNION TERRITORY: JAMMU & KASHMIR
  {
    id: "gulmarg-srinagar",
    name: "Srinagar Dal Lake & Gulmarg",
    state: "Jammu & Kashmir",
    category: "Mountains",
    rating: 4.9,
    reviewsCount: 4100,
    costPerDay: 3800,
    bestSeason: "All Year (Snow: Dec-Feb, Spring: Mar-May)",
    duration: "4 - 5 Days",
    image: "https://vl-prod-static.b-cdn.net/system/images/000/812/639/47c5ce96c3bcd82cbced964876403036/original/asbot-43nxn.jpg",
    description: "Paradise on Earth with wooden houseboats floating on Dal Lake, blooming Nishat Mughal gardens, and the world's second-highest cable car Gondola in Gulmarg.",
    highlights: ["Shikara ride on Dal Lake floating market", "Gulmarg Gondola ride to Apharwat Peak (13,780 ft)", "Pahalgam Betaab Valley walks", "Warm Kashmiri Kahwa tea & Wazwan feast"],
    tags: ["Paradise on Earth", "Dal Lake", "Snow Skiing", "Shikara", "Gondola"]
  },

  // 32. UNION TERRITORY: LADAKH
  {
    id: "leh-ladakh",
    name: "Pangong Tso & Leh-Ladakh",
    state: "Ladakh",
    category: "Adventure",
    rating: 4.9,
    reviewsCount: 2840,
    costPerDay: 4500,
    bestSeason: "Jun - Sep",
    duration: "6 - 8 Days",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=800&q=80",
    description: "High mountain passes, cliff-hanging Tibetan gompas, stark moonscapes, and the mesmerizing chameleon blue waters of the high-altitude Pangong Lake.",
    highlights: ["Khardung La high motorable mountain pass", "Color-shifting Pangong Tso lake", "Nubra Valley white sand dunes & Bactrian camels", "Thiksey Monastery dawn chanting"],
    tags: ["Himalayas", "Pangong Lake", "High Altitude Pass", "Monasteries", "Moonland"]
  },

  // 33. UNION TERRITORY: PUDUCHERRY
  {
    id: "pondicherry-french-quarter",
    name: "Puducherry — French Quarter & Auroville",
    state: "Puducherry",
    category: "Beaches",
    rating: 4.7,
    reviewsCount: 2700,
    costPerDay: 2500,
    bestSeason: "Oct - Mar",
    duration: "2 - 3 Days",
    image: "https://www.agoda.com/wp-content/uploads/2024/02/Pondicherry-cover-1.jpg",
    description: "Charming mustard-yellow French colonial villas, bougainvillea-framed streets, Promenade seaside sunsets, and the peaceful global township of Auroville.",
    highlights: ["Promenade Beach rock walkway", "Auroville Matrimandir golden dome meditation", "White Town French cafes & croissant bakeries", "Paradise Beach boat ride"],
    tags: ["French Quarter", "Colonial Heritage", "Beaches", "Auroville", "Peaceful"]
  }
];

// --- 2. APPLICATION STATE ---
let destinations = [];
let favourites = [];
let activeCategory = "All";
let currentModalDestination = null;
let selectedTransportMode = 'train';

const ALL_INDIAN_REGIONS = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
  "Puducherry"
];

// --- 3. STORAGE HELPERS ---
const STORAGE_KEY_DESTS = "travelbharat_custom_destinations_v1";
const STORAGE_KEY_FAVS = "travelbharat_favourites_v1";

function loadInitialData() {
  const savedCustom = localStorage.getItem(STORAGE_KEY_DESTS);
  if (savedCustom) {
    try {
      const parsed = JSON.parse(savedCustom);
      destinations = [...DEFAULT_DESTINATIONS, ...parsed];
    } catch (e) {
      console.error("Failed to parse custom destinations", e);
      destinations = [...DEFAULT_DESTINATIONS];
    }
  } else {
    destinations = [...DEFAULT_DESTINATIONS];
  }

  const savedFavs = localStorage.getItem(STORAGE_KEY_FAVS);
  if (savedFavs) {
    try {
      favourites = JSON.parse(savedFavs);
    } catch (e) {
      favourites = [];
    }
  }

  populateStateDropdowns();
  populatePlannerDestinations();
  updateStatCounters();
  updateFavBadge();
  renderDestinations();
  calculateBudget();
}

function saveCustomDestination(newPlace) {
  const savedCustom = localStorage.getItem(STORAGE_KEY_DESTS);
  let customList = savedCustom ? JSON.parse(savedCustom) : [];
  customList.push(newPlace);
  localStorage.setItem(STORAGE_KEY_DESTS, JSON.stringify(customList));
  destinations.push(newPlace);
}

function saveFavourites() {
  localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(favourites));
  updateFavBadge();
}

// --- 4. DROPDOWN & FILTER LOGIC ---
function populateStateDropdowns() {
  const stateSet = new Set([...ALL_INDIAN_REGIONS, ...destinations.map(d => d.state)]);
  const states = Array.from(stateSet).sort((a, b) => a.localeCompare(b));

  const heroSelect = document.getElementById('hero-state-select');
  const filterSelect = document.getElementById('filter-state-select');

  heroSelect.innerHTML = `<option value="all">All States & UTs (${states.length})</option>`;
  filterSelect.innerHTML = `<option value="all">All States & UTs (${states.length})</option>`;

  states.forEach(st => {
    const count = destinations.filter(d => d.state.toLowerCase() === st.toLowerCase()).length;
    const countText = count > 0 ? ` (${count})` : '';

    const opt1 = document.createElement('option');
    opt1.value = st;
    opt1.textContent = `${st}${countText}`;
    heroSelect.appendChild(opt1);

    const opt2 = document.createElement('option');
    opt2.value = st;
    opt2.textContent = `${st}${countText}`;
    filterSelect.appendChild(opt2);
  });
}

function populatePlannerDestinations() {
  const planSelect = document.getElementById('plan-destination');
  planSelect.innerHTML = "";
  destinations.forEach(d => {
    const opt = document.createElement('option');
    opt.value = d.id;
    opt.textContent = `${d.name} (${d.state})`;
    planSelect.appendChild(opt);
  });
}

function updateStatCounters() {
  const destCountEl = document.getElementById('stat-dest-count');
  const stateCountEl = document.getElementById('stat-states-count');
  const statesCount = new Set(destinations.map(d => d.state)).size;

  if (destCountEl) destCountEl.textContent = `${destinations.length}+`;
  if (stateCountEl) stateCountEl.textContent = `${statesCount}+`;
}

// --- 5. SEARCH & FILTER CORE ---
function selectCategory(category) {
  activeCategory = category;

  const chips = document.querySelectorAll('.category-chip');
  chips.forEach(chip => {
    const text = chip.innerText.trim();
    if (text.toLowerCase().includes(category.toLowerCase()) || (category === 'All' && text.includes('All'))) {
      chip.className = "category-chip active px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition whitespace-nowrap flex items-center gap-2 border bg-brand-emerald text-white border-brand-emerald shadow-sm";
    } else {
      chip.className = "category-chip px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition whitespace-nowrap flex items-center gap-2 border border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-saffron hover:bg-orange-50";
    }
  });

  renderDestinations();
}

function applyHeroSearch() {
  const heroQuery = document.getElementById('hero-search-input').value.trim();
  const heroState = document.getElementById('hero-state-select').value;

  document.getElementById('main-search-input').value = heroQuery;
  document.getElementById('filter-state-select').value = heroState;

  document.getElementById('destinations-section').scrollIntoView({ behavior: 'smooth' });
  renderDestinations();
}

function filterByStateName(stateName) {
  document.getElementById('filter-state-select').value = stateName;
  document.getElementById('destinations-section').scrollIntoView({ behavior: 'smooth' });
  renderDestinations();
}

function resetFilters() {
  document.getElementById('hero-search-input').value = "";
  document.getElementById('hero-state-select').value = "all";
  document.getElementById('main-search-input').value = "";
  document.getElementById('filter-state-select').value = "all";
  document.getElementById('filter-budget-select').value = "all";
  document.getElementById('sort-select').value = "popular";
  selectCategory("All");
  showToast("Filters reset to default view");
}

// --- 6. RENDER CARDS GRID ---
function renderDestinations() {
  const grid = document.getElementById('destinations-grid');
  const emptyState = document.getElementById('empty-state');
  const resultCount = document.getElementById('result-count');

  const searchQuery = (document.getElementById('main-search-input').value || "").toLowerCase().trim();
  const selectedState = document.getElementById('filter-state-select').value;
  const budgetFilter = document.getElementById('filter-budget-select').value;
  const sortBy = document.getElementById('sort-select').value;

  let filtered = destinations.filter(item => {
    if (activeCategory !== "All" && item.category !== activeCategory) {
      return false;
    }

    if (selectedState !== "all" && item.state.toLowerCase() !== selectedState.toLowerCase()) {
      return false;
    }

    if (budgetFilter === "budget" && item.costPerDay >= 2500) return false;
    if (budgetFilter === "moderate" && (item.costPerDay < 2500 || item.costPerDay > 5000)) return false;
    if (budgetFilter === "luxury" && item.costPerDay <= 5000) return false;

    if (searchQuery) {
      const matchName = item.name.toLowerCase().includes(searchQuery);
      const matchState = item.state.toLowerCase().includes(searchQuery);
      const matchCategory = item.category.toLowerCase().includes(searchQuery);
      const matchDesc = item.description.toLowerCase().includes(searchQuery);
      const matchTags = item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery));
      return matchName || matchState || matchCategory || matchDesc || matchTags;
    }

    return true;
  });

  filtered.sort((a, b) => {
    if (sortBy === 'popular') return b.rating - a.rating;
    if (sortBy === 'cost-low') return a.costPerDay - b.costPerDay;
    if (sortBy === 'cost-high') return b.costPerDay - a.costPerDay;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    return 0;
  });

  resultCount.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  grid.innerHTML = filtered.map(d => {
    const isFav = favourites.includes(d.id);
    const heartClass = isFav ? "fa-solid fa-heart text-rose-500" : "fa-regular fa-heart text-slate-400 hover:text-rose-500";
    const safeName = d.name.replace(/'/g, "\\'");

    return `
      <div class="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
        <!-- Card Image Container -->
        <div class="relative h-52 w-full overflow-hidden bg-slate-800">
          <img 
            src="${d.image}" 
            alt="${d.name}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onerror="handleImageFallback(this, '${safeName}', '${d.category}')"
            loading="lazy"
          >

          <!-- Badges Overlay -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span class="bg-white/95 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm border border-slate-100">
              ${d.category}
            </span>
          </div>

          <!-- Heart Toggle Button -->
          <button 
            onclick="toggleFavourite('${d.id}', event)" 
            class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md transition hover:scale-110"
            aria-label="Toggle favourite"
          >
            <i class="${heartClass}"></i>
          </button>

          <!-- State Tag at bottom of image -->
          <div class="absolute bottom-2.5 left-3 text-white text-xs font-semibold drop-shadow flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
            <i class="fa-solid fa-location-dot text-amber-300"></i> ${d.state}
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 mb-1">
              <span class="flex items-center gap-1 font-semibold text-amber-600">
                <i class="fa-solid fa-star text-amber-400"></i> ${d.rating} (${d.reviewsCount || 100})
              </span>
              <span class="text-slate-400"><i class="fa-regular fa-clock mr-1"></i>${d.duration || '3 Days'}</span>
            </div>

            <h3 class="font-serif font-bold text-lg text-slate-900 group-hover:text-brand-saffron transition-colors line-clamp-1 mb-2">
              ${d.name}
            </h3>

            <p class="text-slate-600 text-xs line-clamp-2 leading-relaxed mb-4">
              ${d.description}
            </p>
          </div>

          <!-- Card Action Row -->
          <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span class="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Est. Daily</span>
              <span class="text-sm font-extrabold text-slate-900">₹${d.costPerDay.toLocaleString('en-IN')}<span class="text-xs font-normal text-slate-500">/day</span></span>
            </div>

            <div class="flex items-center gap-2">
              <button 
                onclick="openDetailModal('${d.id}')" 
                class="bg-slate-100 hover:bg-brand-saffron hover:text-white text-slate-700 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- 7. FAVOURITES / WISHLIST MANAGEMENT ---
function toggleFavourite(destId, e) {
  if (e) e.stopPropagation();

  const idx = favourites.indexOf(destId);
  const dest = destinations.find(d => d.id === destId);
  const name = dest ? dest.name : "Destination";

  if (idx > -1) {
    favourites.splice(idx, 1);
    showToast(`Removed "${name}" from favourites`, "info");
  } else {
    favourites.push(destId);
    showToast(`Added "${name}" to your wishlist!`, "success");
  }

  saveFavourites();
  renderDestinations();
  renderWishlistDrawer();

  if (currentModalDestination && currentModalDestination.id === destId) {
    updateModalFavButton();
  }
}

function updateFavBadge() {
  const badge = document.getElementById('fav-count-badge');
  const drawerCount = document.getElementById('fav-drawer-count');
  if (badge) badge.textContent = favourites.length;
  if (drawerCount) drawerCount.textContent = favourites.length;
}

function toggleWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  const backdrop = document.getElementById('wishlist-backdrop');
  const isOpen = !drawer.classList.contains('translate-x-full');

  if (isOpen) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  } else {
    renderWishlistDrawer();
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById('wishlist-items-container');
  const favList = destinations.filter(d => favourites.includes(d.id));

  if (favList.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <i class="fa-regular fa-heart text-4xl mb-3 text-slate-300"></i>
        <p class="text-sm font-semibold text-slate-700">No saved destinations yet</p>
        <p class="text-xs text-slate-400 mt-1">Tap the heart on any destination card to bookmark places for your upcoming adventure.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = favList.map(item => `
    <div class="flex items-center gap-3.5 p-3 rounded-xl border border-slate-200 hover:border-brand-saffron bg-slate-50 transition">
      <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover flex-shrink-0" onerror="handleImageFallback(this, '${item.name.replace(/'/g, "\\'")}', '${item.category}')">
      <div class="flex-1 min-w-0">
        <h4 class="font-bold text-sm text-slate-900 truncate">${item.name}</h4>
        <p class="text-xs text-slate-500">${item.state} • ₹${item.costPerDay}/d</p>
        <div class="flex items-center gap-2 mt-1">
          <button onclick="planFromWishlist('${item.id}')" class="text-[11px] font-semibold text-brand-emerald hover:underline">
            <i class="fa-solid fa-calculator"></i> Plan Trip
          </button>
        </div>
      </div>
      <button onclick="toggleFavourite('${item.id}')" class="p-2 text-slate-400 hover:text-rose-500 transition" title="Remove">
        <i class="fa-solid fa-trash-can text-sm"></i>
      </button>
    </div>
  `).join('');
}

function clearAllFavourites() {
  if (favourites.length === 0) return;
  favourites = [];
  saveFavourites();
  renderWishlistDrawer();
  renderDestinations();
  showToast("Cleared all saved destinations", "info");
}

function planFromWishlist(destId) {
  toggleWishlistDrawer();
  selectDestinationInPlanner(destId);
}

// --- 8. TRIP PLANNER & LIVE BUDGET CALCULATOR ---
function updatePlannerInputs() {
  const days = document.getElementById('plan-days').value;
  const people = document.getElementById('plan-people').value;

  document.getElementById('plan-days-label').textContent = `${days} Day${days > 1 ? 's' : ''}`;
  document.getElementById('plan-people-label').textContent = `${people} Person${people > 1 ? 's' : ''}`;
}

function setTransportMode(mode) {
  selectedTransportMode = mode;
  const btns = document.querySelectorAll('.transport-btn');
  btns.forEach(btn => {
    btn.classList.remove('border-brand-emerald', 'bg-emerald-50', 'text-brand-emerald');
    btn.classList.add('border-slate-200', 'bg-slate-50', 'text-slate-700');
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.remove('border-slate-200', 'bg-slate-50', 'text-slate-700');
    event.currentTarget.classList.add('border-brand-emerald', 'bg-emerald-50', 'text-brand-emerald');
  }
  calculateBudget();
}

function calculateBudget() {
  const destSelect = document.getElementById('plan-destination');
  const selectedId = destSelect.value || (destinations[0] && destinations[0].id);
  const destination = destinations.find(d => d.id === selectedId) || destinations[0];

  if (!destination) return;

  const days = parseInt(document.getElementById('plan-days').value) || 5;
  const people = parseInt(document.getElementById('plan-people').value) || 2;

  const tierEl = document.querySelector('input[name="travel_tier"]:checked');
  const tier = tierEl ? tierEl.value : 'explorer';

  const baseDaily = destination.costPerDay;

  let stayDaily = Math.round(baseDaily * 0.45);
  let foodDaily = Math.round(baseDaily * 0.25);
  let activityDaily = Math.round(baseDaily * 0.15);
  let localTransitDaily = Math.round(baseDaily * 0.15);

  if (tier === 'budget') {
    stayDaily = Math.round(stayDaily * 0.55);
    foodDaily = Math.round(foodDaily * 0.65);
    activityDaily = Math.round(activityDaily * 0.7);
    localTransitDaily = Math.round(localTransitDaily * 0.6);
  } else if (tier === 'luxury') {
    stayDaily = Math.round(stayDaily * 2.5);
    foodDaily = Math.round(foodDaily * 2.2);
    activityDaily = Math.round(activityDaily * 2.0);
    localTransitDaily = Math.round(localTransitDaily * 2.0);
  }

  let transitBase = 1500;
  if (selectedTransportMode === 'flight') transitBase = 5500;
  if (selectedTransportMode === 'road') transitBase = 2800;

  const totalStay = stayDaily * days * Math.ceil(people / 2);
  const totalFood = foodDaily * days * people;
  const totalActivities = activityDaily * days * people;
  const totalLocalTransit = (localTransitDaily * days * Math.ceil(people / 3)) + (transitBase * people);

  const grandTotal = totalStay + totalFood + totalActivities + totalLocalTransit;
  const perPerson = Math.round(grandTotal / people);

  document.getElementById('budget-dest-title').textContent = `${destination.name}`;
  document.getElementById('budget-grand-total').textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  document.getElementById('budget-per-person').textContent = `Approx. ₹${perPerson.toLocaleString('en-IN')} per person (${days} Days)`;
  document.getElementById('budget-stay').textContent = `₹${totalStay.toLocaleString('en-IN')}`;
  document.getElementById('budget-food').textContent = `₹${totalFood.toLocaleString('en-IN')}`;
  document.getElementById('budget-activities').textContent = `₹${totalActivities.toLocaleString('en-IN')}`;
  document.getElementById('budget-transport').textContent = `₹${totalLocalTransit.toLocaleString('en-IN')}`;
}

function selectDestinationInPlanner(destId) {
  const planSelect = document.getElementById('plan-destination');
  planSelect.value = destId;
  calculateBudget();
  document.getElementById('planner-section').scrollIntoView({ behavior: 'smooth' });
  showToast(`Selected destination in trip planner`, "info");
}

function saveTripPlan() {
  const destSelect = document.getElementById('plan-destination');
  const destination = destinations.find(d => d.id === destSelect.value);
  const days = document.getElementById('plan-days').value;
  const people = document.getElementById('plan-people').value;
  const total = document.getElementById('budget-grand-total').textContent;

  const savedTrip = {
    name: destination.name,
    days: days,
    people: people,
    total: total,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem('travelbharat_last_saved_plan', JSON.stringify(savedTrip));
  showToast(`Saved itinerary for ${destination.name} (${total})!`, "success");
}

function copyTripSummary() {
  const destSelect = document.getElementById('plan-destination');
  const destination = destinations.find(d => d.id === destSelect.value);
  const days = document.getElementById('plan-days').value;
  const people = document.getElementById('plan-people').value;
  const total = document.getElementById('budget-grand-total').textContent;
  const stay = document.getElementById('budget-stay').textContent;
  const food = document.getElementById('budget-food').textContent;
  const act = document.getElementById('budget-activities').textContent;
  const trans = document.getElementById('budget-transport').textContent;

  const summaryText = `🇮🇳 TravelBharat Trip Summary:\nDestination: ${destination.name} (${destination.state})\nDuration: ${days} Days | Travelers: ${people}\nTotal Estimate: ${total}\n- Stay: ${stay}\n- Food: ${food}\n- Activities: ${act}\n- Transit: ${trans}\nPlanned on Travel Explorer India.`;

  const tempArea = document.createElement('textarea');
  tempArea.value = summaryText;
  document.body.appendChild(tempArea);
  tempArea.select();
  try {
    document.execCommand('copy');
    showToast("Trip summary copied to clipboard!", "success");
  } catch (err) {
    showToast("Failed to copy automatically", "info");
  }
  document.body.removeChild(tempArea);
}

// --- 9. DESTINATION DETAILS MODAL ---
function openDetailModal(destId) {
  const dest = destinations.find(d => d.id === destId);
  if (!dest) return;

  currentModalDestination = dest;

  const modalImg = document.getElementById('modal-img');
  modalImg.src = dest.image;
  modalImg.onerror = () => handleImageFallback(modalImg, dest.name, dest.category);

  document.getElementById('modal-title').textContent = dest.name;
  document.getElementById('modal-location').innerHTML = `<i class="fa-solid fa-location-dot text-rose-400"></i> ${dest.state}, India`;
  document.getElementById('modal-badge-category').textContent = dest.category;
  document.getElementById('modal-cost').textContent = `₹${dest.costPerDay.toLocaleString('en-IN')}/day`;
  document.getElementById('modal-season').textContent = dest.bestSeason || 'Oct - Mar';
  document.getElementById('modal-duration').textContent = dest.duration || '3 - 4 Days';
  document.getElementById('modal-description').textContent = dest.description;

  const hlContainer = document.getElementById('modal-highlights');
  if (dest.highlights && dest.highlights.length > 0) {
    hlContainer.innerHTML = dest.highlights.map(h => `
      <li class="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
        <i class="fa-solid fa-circle-check text-brand-emerald mt-1 text-xs"></i>
        <span>${h}</span>
      </li>
    `).join('');
  } else {
    hlContainer.innerHTML = `<li class="text-slate-400">Scenic sightseeing, local authentic food, cultural walks.</li>`;
  }

  const tagsContainer = document.getElementById('modal-tags');
  if (dest.tags && dest.tags.length > 0) {
    tagsContainer.innerHTML = dest.tags.map(t => `
      <span class="text-xs bg-orange-50 text-brand-saffronDark font-medium px-2.5 py-1 rounded-full border border-orange-100">
        #${t}
      </span>
    `).join('');
  } else {
    tagsContainer.innerHTML = ``;
  }

  updateModalFavButton();

  document.getElementById('detail-modal-backdrop').classList.remove('hidden');
  document.getElementById('detail-modal').classList.remove('hidden');
  document.getElementById('detail-modal').classList.add('flex');
}

function closeDetailModal() {
  document.getElementById('detail-modal-backdrop').classList.add('hidden');
  document.getElementById('detail-modal').classList.add('hidden');
  document.getElementById('detail-modal').classList.remove('flex');
  currentModalDestination = null;
}

function updateModalFavButton() {
  const btn = document.getElementById('modal-fav-btn');
  if (!currentModalDestination) return;

  const isFav = favourites.includes(currentModalDestination.id);
  if (isFav) {
    btn.innerHTML = `<i class="fa-solid fa-heart text-rose-500"></i> Saved in Wishlist`;
    btn.classList.add('border-rose-300', 'bg-rose-50');
  } else {
    btn.innerHTML = `<i class="fa-regular fa-heart"></i> Add to Wishlist`;
    btn.classList.remove('border-rose-300', 'bg-rose-50');
  }
}

function toggleModalFav() {
  if (!currentModalDestination) return;
  toggleFavourite(currentModalDestination.id);
}

function planThisDestination() {
  if (!currentModalDestination) return;
  const id = currentModalDestination.id;
  closeDetailModal();
  selectDestinationInPlanner(id);
}

// --- 10. ADD DESTINATION MODAL ---
function openAddDestinationModal() {
  document.getElementById('add-modal-backdrop').classList.remove('hidden');
  document.getElementById('add-modal').classList.remove('hidden');
  document.getElementById('add-modal').classList.add('flex');
}

function closeAddDestinationModal() {
  document.getElementById('add-modal-backdrop').classList.add('hidden');
  document.getElementById('add-modal').classList.add('hidden');
  document.getElementById('add-modal').classList.remove('flex');
  document.getElementById('add-destination-form').reset();
}

function handleNewDestination(event) {
  event.preventDefault();

  const name = document.getElementById('new-name').value.trim();
  const state = document.getElementById('new-state').value.trim();
  const category = document.getElementById('new-category').value;
  const cost = parseInt(document.getElementById('new-cost').value) || 2500;
  const season = document.getElementById('new-season').value.trim();
  let image = document.getElementById('new-image').value.trim();
  const desc = document.getElementById('new-desc').value.trim();
  const hlText = document.getElementById('new-highlights').value.trim();

  // If user did not provide an image, generate a clean theme-based SVG illustration
  if (!image) {
    image = getFallbackSvgDataUrl(name, category);
  }

  const highlights = hlText ? hlText.split(',').map(s => s.trim()).filter(Boolean) : ["Local sightseeing", "Authentic cuisine"];
  const newId = `custom-${Date.now()}`;

  const newDestination = {
    id: newId,
    name: name,
    state: state,
    category: category,
    rating: 4.8,
    reviewsCount: 1,
    costPerDay: cost,
    bestSeason: season,
    duration: "3 - 4 Days",
    image: image,
    description: desc,
    highlights: highlights,
    tags: ["Explorer", category, state]
  };

  saveCustomDestination(newDestination);
  populateStateDropdowns();
  populatePlannerDestinations();
  updateStatCounters();
  renderDestinations();
  closeAddDestinationModal();

  showToast(`Added "${name}" to TravelBharat!`, "success");
}

// --- 11. UI UTILITIES: Toast & Mobile Nav ---
function showToast(message, type = "success") {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  const iconEl = document.getElementById('toast-icon');

  msgEl.textContent = message;
  if (type === "success") {
    iconEl.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i>`;
  } else {
    iconEl.innerHTML = `<i class="fa-solid fa-circle-info text-amber-400"></i>`;
  }

  toast.classList.remove('translate-y-[-150%]', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-[-150%]', 'opacity-0');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// --- 12. EVENT LISTENERS INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
  loadInitialData();

  document.getElementById('main-search-input').addEventListener('input', renderDestinations);
  document.getElementById('filter-state-select').addEventListener('change', renderDestinations);
  document.getElementById('filter-budget-select').addEventListener('change', renderDestinations);
  document.getElementById('sort-select').addEventListener('change', renderDestinations);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      closeAddDestinationModal();
      const drawer = document.getElementById('wishlist-drawer');
      if (!drawer.classList.contains('translate-x-full')) {
        toggleWishlistDrawer();
      }
    }
  });
});

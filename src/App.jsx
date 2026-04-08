import { useState, useEffect, useRef } from "react";

// ─── NICHE DATA ───────────────────────────────────────────────────────────────
const NICHES = [
  {
    id: "beauty",
    label: "Beauty & Wellness",
    icon: "✦",
    color: "#c4a882",
    accent: "#e8d5c0",
    bg: "linear-gradient(135deg, #2a1f1a 0%, #1a1218 100%)",
    cardBg: "#1e1614",
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <circle cx="60" cy="45" r="28" stroke="#c4a882" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="60" cy="45" r="18" fill="#c4a882" opacity="0.15"/>
        <path d="M44 45 Q52 32 60 45 Q68 58 76 45" stroke="#c4a882" strokeWidth="1.5" fill="none"/>
        <path d="M50 38 Q60 28 70 38" stroke="#e8d5c0" strokeWidth="1" fill="none" opacity="0.7"/>
        <line x1="60" y1="73" x2="60" y2="95" stroke="#c4a882" strokeWidth="1.5" opacity="0.5"/>
        <ellipse cx="60" cy="97" rx="12" ry="4" stroke="#c4a882" strokeWidth="1" fill="none" opacity="0.4"/>
        <circle cx="38" cy="30" r="2" fill="#c4a882" opacity="0.4"/>
        <circle cx="82" cy="30" r="2" fill="#c4a882" opacity="0.4"/>
        <circle cx="30" cy="55" r="1.5" fill="#e8d5c0" opacity="0.5"/>
        <circle cx="90" cy="55" r="1.5" fill="#e8d5c0" opacity="0.5"/>
      </svg>
    ),
    expenseCategories: ["Products & Supplies", "Equipment", "Salon Rent", "Staff Wages", "Marketing", "Training & Courses", "Packaging", "Software"],
    incomeCategories: ["Services", "Product Sales", "Gift Cards", "Consultations", "Online Courses", "Collaborations"],
    contentIdeas: [
      { type: "Reel", idea: "Before & after transformation reveal", pillar: "Showcase" },
      { type: "Carousel", idea: "5 skincare mistakes your clients are making (and how to fix them)", pillar: "Educate" },
      { type: "Story", idea: "Poll: Which treatment do you want to try first?", pillar: "Engage" },
      { type: "Reel", idea: "Your morning salon setup routine — satisfying & aesthetic", pillar: "Behind the scenes" },
      { type: "Static", idea: "Client testimonial quote card", pillar: "Social proof" },
      { type: "Reel", idea: "Trending beauty hack — with your expert take on it", pillar: "Educate" },
      { type: "Carousel", idea: "Your complete price list — beautifully designed", pillar: "Showcase" },
      { type: "Reel", idea: "Day in the life of a beauty business owner", pillar: "Relate" },
      { type: "Static", idea: "Seasonal treatment promotion", pillar: "Sell" },
      { type: "Reel", idea: "Product unboxing — new stock just arrived", pillar: "Entertain" },
      { type: "Carousel", idea: "How to maintain your [service] at home", pillar: "Educate" },
      { type: "Story", idea: "Behind the scenes of preparing for a full day of bookings", pillar: "Behind the scenes" },
    ],
    captions: [
      "Your skin deserves the best — and we're here to give it exactly that. Book your [service] today 🌿",
      "Before she walked in, she felt [emotion]. When she walked out? [transformation]. This is why we do what we do ✨",
      "Hot take: [beauty tip]. Do you agree? Drop a 🙋 below",
      "We don't just do [service] — we make you feel like the best version of yourself. Here's proof 👇",
    ],
    pillars: [
      { name: "Transform", desc: "Before/afters, client reveals, visual results that speak for themselves", emoji: "✨" },
      { name: "Educate", desc: "Skincare tips, product knowledge, myths vs facts in beauty", emoji: "📚" },
      { name: "Behind the scenes", desc: "Your process, your space, your passion — people love authenticity", emoji: "🎬" },
      { name: "Social proof", desc: "Reviews, testimonials, client love that builds trust", emoji: "💬" },
      { name: "Sell", desc: "Promotions, new services, booking CTAs done beautifully", emoji: "🛍️" },
    ],
  },
  {
    id: "tech",
    label: "Tech & Software",
    icon: "◈",
    color: "#4ade80",
    accent: "#86efac",
    bg: "linear-gradient(135deg, #0a1a12 0%, #0d1117 100%)",
    cardBg: "#0e1a14",
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <rect x="20" y="25" width="80" height="55" rx="4" stroke="#4ade80" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <rect x="28" y="33" width="64" height="39" rx="2" fill="#4ade80" opacity="0.05"/>
        <line x1="28" y1="42" x2="92" y2="42" stroke="#4ade80" strokeWidth="0.8" opacity="0.3"/>
        <text x="32" y="57" fontFamily="monospace" fontSize="7" fill="#4ade80" opacity="0.8">const grow = () =&gt; {'{'}</text>
        <text x="32" y="66" fontFamily="monospace" fontSize="7" fill="#86efac" opacity="0.6">  return success</text>
        <text x="32" y="75" fontFamily="monospace" fontSize="7" fill="#4ade80" opacity="0.8">{'}'}</text>
        <line x1="45" y1="80" x2="75" y2="80" stroke="#4ade80" strokeWidth="2" opacity="0.5"/>
        <rect x="50" y="80" width="20" height="8" rx="1" fill="#4ade80" opacity="0.2"/>
        <circle cx="95" cy="28" r="6" fill="#4ade80" opacity="0.2" stroke="#4ade80" strokeWidth="1"/>
        <line x1="99" y1="32" x2="105" y2="38" stroke="#4ade80" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
    expenseCategories: ["Hosting & Infrastructure", "Software Licenses", "Developer Tools", "Marketing & Ads", "Team / Contractors", "Legal & Compliance", "Equipment", "Events & Networking"],
    incomeCategories: ["SaaS Subscriptions", "One-time Sales", "Consulting", "API Usage Fees", "Partnerships", "Grants & Funding"],
    contentIdeas: [
      { type: "Carousel", idea: "5 tools every small business needs in [year]", pillar: "Educate" },
      { type: "Reel", idea: "Watch us build [feature] in real time — 60 second version", pillar: "Behind the scenes" },
      { type: "Static", idea: "Customer success story — their results using your product", pillar: "Social proof" },
      { type: "Carousel", idea: "We just launched [feature] — here's what it does and why it matters", pillar: "Announce" },
      { type: "Reel", idea: "The problem we solve — told in under 30 seconds", pillar: "Sell" },
      { type: "Carousel", idea: "Common misconceptions about [your tech niche]", pillar: "Educate" },
      { type: "Static", idea: "Milestone post — X users, X customers, X revenue", pillar: "Relate" },
      { type: "Reel", idea: "Our team's favourite productivity hacks", pillar: "Entertain" },
      { type: "Carousel", idea: "Step-by-step: How to get started with [your product]", pillar: "Onboard" },
      { type: "Static", idea: "Industry stat + your hot take on it", pillar: "Thought leadership" },
      { type: "Reel", idea: "A bug we fixed — and what we learned", pillar: "Transparency" },
      { type: "Carousel", idea: "What we're building next — community sneak peek", pillar: "Engage" },
    ],
    captions: [
      "We built [product] because [problem] was costing businesses like yours [time/money]. Here's how we fix it 👇",
      "The future of [industry] isn't complicated. It just needs the right tools. That's us 🖥️",
      "Our users save an average of [X hours] per week. Here's exactly how 🧵",
      "[Feature] is now live. We've been working on this for [X months] and we can't wait for you to try it ⚡",
    ],
    pillars: [
      { name: "Educate", desc: "Tech tips, tutorials, industry insights that position you as the expert", emoji: "💡" },
      { name: "Showcase", desc: "Product demos, feature highlights, UI walkthroughs", emoji: "🖥️" },
      { name: "Social proof", desc: "Case studies, metrics, customer wins", emoji: "📊" },
      { name: "Thought leadership", desc: "Opinions, predictions, takes on your industry", emoji: "🧠" },
      { name: "Community", desc: "Feedback requests, polls, feature voting, user spotlights", emoji: "🤝" },
    ],
  },
  {
    id: "agric",
    label: "Agriculture & Farming",
    icon: "❧",
    color: "#86d88a",
    accent: "#bbf7bb",
    bg: "linear-gradient(135deg, #0d1f0f 0%, #111a0e 100%)",
    cardBg: "#0f1a10",
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M20 90 Q35 75 50 80 Q65 85 80 70 Q95 55 110 60" stroke="#86d88a" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <line x1="10" y1="90" x2="110" y2="90" stroke="#86d88a" strokeWidth="1" opacity="0.3"/>
        <path d="M40 90 L40 60 Q50 45 60 55 Q50 60 40 90Z" fill="#86d88a" opacity="0.2"/>
        <path d="M40 65 Q55 55 65 65" stroke="#86d88a" strokeWidth="1" fill="none" opacity="0.6"/>
        <path d="M65 90 L65 55 Q75 38 85 48 Q75 55 65 90Z" fill="#86d88a" opacity="0.2"/>
        <path d="M65 62 Q80 52 88 62" stroke="#86d88a" strokeWidth="1" fill="none" opacity="0.6"/>
        <circle cx="35" cy="25" r="12" stroke="#bbf7bb" strokeWidth="1" fill="none" opacity="0.3"/>
        <path d="M29 20 Q35 14 41 20 Q35 26 29 20Z" fill="#86d88a" opacity="0.4"/>
        <line x1="35" y1="37" x2="35" y2="50" stroke="#86d88a" strokeWidth="1" opacity="0.4"/>
        <circle cx="88" cy="20" r="2" fill="#bbf7bb" opacity="0.6"/>
        <circle cx="95" cy="28" r="1.5" fill="#bbf7bb" opacity="0.4"/>
        <circle cx="80" cy="28" r="1.5" fill="#bbf7bb" opacity="0.4"/>
      </svg>
    ),
    expenseCategories: ["Seeds & Inputs", "Equipment & Machinery", "Fuel & Transport", "Labour", "Fertilizers & Chemicals", "Land Rent", "Storage", "Marketing"],
    incomeCategories: ["Crop Sales", "Livestock Sales", "Processed Products", "Government Subsidies", "Export Sales", "Agro-tourism"],
    contentIdeas: [
      { type: "Reel", idea: "Harvest day — raw and real footage of your farm in action", pillar: "Behind the scenes" },
      { type: "Carousel", idea: "From seed to table — your full production process", pillar: "Educate" },
      { type: "Static", idea: "What's in season right now + how to order from us", pillar: "Sell" },
      { type: "Reel", idea: "Meet the people behind your food — introduce your team", pillar: "Relate" },
      { type: "Carousel", idea: "5 things you didn't know about [your crop/product]", pillar: "Educate" },
      { type: "Reel", idea: "Time-lapse of your crop growing over weeks", pillar: "Entertain" },
      { type: "Static", idea: "Customer recipe using your produce", pillar: "Community" },
      { type: "Carousel", idea: "Why buying local farm produce matters — make the case", pillar: "Educate" },
      { type: "Reel", idea: "A day on the farm — sunrise to sunset", pillar: "Behind the scenes" },
      { type: "Static", idea: "Seasonal availability chart — what's coming next", pillar: "Sell" },
      { type: "Carousel", idea: "The challenges of farming no one talks about (honest post)", pillar: "Relate" },
      { type: "Reel", idea: "Sustainable farming practices you use — and why they matter", pillar: "Values" },
    ],
    captions: [
      "Every [product] you buy from us was grown with [values]. Here's what that actually means 🌱",
      "Harvest season is here. Here's what's fresh, what's available, and how to get yours 🌾",
      "Farming isn't just a job. It's [X] months of patience, work, and love — just for this moment 🙏",
      "Real food. Real farmers. Real care. Order yours this week 👇",
    ],
    pillars: [
      { name: "Harvest Stories", desc: "Real moments from the farm — raw, honest, beautiful", emoji: "🌾" },
      { name: "Educate", desc: "Farming processes, nutrition facts, sustainability practices", emoji: "🌱" },
      { name: "Sell", desc: "What's available, seasonal drops, order CTAs", emoji: "🛒" },
      { name: "Values", desc: "Why you farm the way you do — your philosophy", emoji: "🌍" },
      { name: "Community", desc: "Recipes, customer features, local partnerships", emoji: "🤝" },
    ],
  },
  {
    id: "food",
    label: "Food & Restaurant",
    icon: "◉",
    color: "#fb923c",
    accent: "#fed7aa",
    bg: "linear-gradient(135deg, #1f1108 0%, #1a1210 100%)",
    cardBg: "#1c1209",
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <circle cx="60" cy="58" r="32" stroke="#fb923c" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <circle cx="60" cy="58" r="24" fill="#fb923c" opacity="0.08"/>
        <path d="M44 50 Q52 44 60 50 Q68 44 76 50" stroke="#fb923c" strokeWidth="1.5" fill="none"/>
        <path d="M46 62 Q53 70 60 66 Q67 70 74 62" stroke="#fed7aa" strokeWidth="1.2" fill="none" opacity="0.8"/>
        <line x1="60" y1="26" x2="60" y2="20" stroke="#fb923c" strokeWidth="1.5" opacity="0.6"/>
        <path d="M55 20 Q60 15 65 20" stroke="#fb923c" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="85" cy="30" r="3" fill="#fb923c" opacity="0.3"/>
        <circle cx="35" cy="32" r="2" fill="#fed7aa" opacity="0.4"/>
        <circle cx="90" cy="75" r="2" fill="#fb923c" opacity="0.3"/>
        <circle cx="30" cy="70" r="3" fill="#fed7aa" opacity="0.3"/>
        <path d="M48 90 Q60 95 72 90" stroke="#fb923c" strokeWidth="1" fill="none" opacity="0.4"/>
      </svg>
    ),
    expenseCategories: ["Ingredients & Food Cost", "Kitchen Equipment", "Staff Wages", "Rent & Utilities", "Packaging", "Delivery Fees", "Marketing", "Licences & Permits"],
    incomeCategories: ["Dine-in Sales", "Takeaway & Delivery", "Catering", "Private Events", "Meal Kits", "Cooking Classes"],
    contentIdeas: [
      { type: "Reel", idea: "Satisfying food prep video — ASMR style, no talking needed", pillar: "Entertain" },
      { type: "Carousel", idea: "What goes into our [signature dish] — ingredient breakdown", pillar: "Educate" },
      { type: "Static", idea: "New menu item announcement — beautiful food photography", pillar: "Sell" },
      { type: "Reel", idea: "Chef's table — watch the dish come together from scratch", pillar: "Behind the scenes" },
      { type: "Carousel", idea: "Customer reviews — formatted beautifully with food photos", pillar: "Social proof" },
      { type: "Reel", idea: "A day in our kitchen — the chaos and love behind every plate", pillar: "Relate" },
      { type: "Static", idea: "Weekly specials + limited time offer", pillar: "Sell" },
      { type: "Carousel", idea: "The story behind our restaurant — why we started", pillar: "Relate" },
      { type: "Reel", idea: "Customer reaction to trying our food for the first time", pillar: "Social proof" },
      { type: "Static", idea: "Sourcing story — where our [ingredient] comes from", pillar: "Values" },
      { type: "Reel", idea: "Quick recipe using our signature flavours — at home version", pillar: "Educate" },
      { type: "Carousel", idea: "Pairing guide — what to order together for the best experience", pillar: "Educate" },
    ],
    captions: [
      "Some dishes you make. Some dishes you feel. This is [dish name] — and it's waiting for you 🍽️",
      "Our [dish] has [X] ingredients, [X] hours of prep, and 100% love. Come taste the difference ❤️",
      "New on the menu: [item]. Here's what's in it and why you need to try it this week 👇",
      "The kitchen doesn't sleep. Neither does the flavour. We're open [hours] — come hungry 🔥",
    ],
    pillars: [
      { name: "Food as art", desc: "Beautiful plating, colour-rich photos, visual-first content", emoji: "🍽️" },
      { name: "Behind the kitchen", desc: "Prep footage, chef stories, sourcing journeys", emoji: "👨‍🍳" },
      { name: "Social proof", desc: "Customer reviews, reactions, UGC reposts", emoji: "⭐" },
      { name: "Sell", desc: "Menu highlights, specials, limited offers, delivery CTAs", emoji: "🛍️" },
      { name: "Values", desc: "Where your food comes from, sustainability, community", emoji: "🌱" },
    ],
  },
  {
    id: "fashion",
    label: "Fashion & Style",
    icon: "◇",
    color: "#e879a0",
    accent: "#f9a8d4",
    bg: "linear-gradient(135deg, #1f0d16 0%, #180d1a 100%)",
    cardBg: "#1a0e16",
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M50 20 L40 35 L25 35 L35 55 L30 95 L60 88 L90 95 L85 55 L95 35 L80 35 L70 20 L60 28 Z" stroke="#e879a0" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <path d="M50 20 L60 28 L70 20" stroke="#f9a8d4" strokeWidth="1.2" fill="none" opacity="0.7"/>
        <path d="M40 35 Q60 42 80 35" stroke="#e879a0" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M35 55 Q60 62 85 55" stroke="#e879a0" strokeWidth="1" fill="none" opacity="0.4"/>
        <circle cx="92" cy="22" r="5" stroke="#f9a8d4" strokeWidth="1" fill="none" opacity="0.5"/>
        <circle cx="28" cy="22" r="3" fill="#e879a0" opacity="0.3"/>
        <line x1="92" y1="27" x2="92" y2="35" stroke="#f9a8d4" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    expenseCategories: ["Inventory & Stock", "Packaging & Branding", "Shipping & Logistics", "Photography", "Marketing & Ads", "Platform Fees", "Storage", "Returns & Refunds"],
    incomeCategories: ["Online Sales", "In-store Sales", "Wholesale", "Custom Orders", "Styling Services", "Brand Collaborations"],
    contentIdeas: [
      { type: "Reel", idea: "Styling the same piece 5 different ways", pillar: "Educate" },
      { type: "Carousel", idea: "New collection drop — every piece with styling notes", pillar: "Sell" },
      { type: "Reel", idea: "Get ready with me — wearing our latest piece", pillar: "Showcase" },
      { type: "Carousel", idea: "How to build a capsule wardrobe on a budget", pillar: "Educate" },
      { type: "Static", idea: "Customer outfit post — tag + feature them", pillar: "Community" },
      { type: "Reel", idea: "Behind the scenes of a photoshoot", pillar: "Behind the scenes" },
      { type: "Carousel", idea: "Trend report — what's in for [season]", pillar: "Educate" },
      { type: "Reel", idea: "Packaging an order — satisfying and branded", pillar: "Entertain" },
      { type: "Static", idea: "Sold out + restock announcement", pillar: "Sell" },
      { type: "Carousel", idea: "Body type styling guide — something for everyone", pillar: "Inclusive" },
      { type: "Reel", idea: "Before the brand: your story as a fashion entrepreneur", pillar: "Relate" },
      { type: "Static", idea: "Flat lay of new arrivals with shop link", pillar: "Sell" },
    ],
    captions: [
      "New in: [item name]. Here's everything you need to know — and how to style it 🖤",
      "Style isn't about price tags. It's about knowing what works for you. Let us help 👗",
      "She ordered this on a Tuesday. By Friday she had [X] compliments. Your turn 🛍️",
      "Limited stock. Unlimited style. [Item] is back — but not for long ⏳",
    ],
    pillars: [
      { name: "Style & Inspire", desc: "Outfit ideas, lookbooks, trend content that aspirationally sells", emoji: "✨" },
      { name: "Showcase", desc: "Product features, new arrivals, collection stories", emoji: "👗" },
      { name: "Community", desc: "Customer features, reposts, style challenges", emoji: "💬" },
      { name: "Behind the brand", desc: "Your process, sourcing, business journey", emoji: "🎬" },
      { name: "Sell", desc: "Limited drops, promotions, restocks, urgent CTAs", emoji: "🛍️" },
    ],
  },
  {
    id: "health",
    label: "Health & Fitness",
    icon: "◎",
    color: "#38bdf8",
    accent: "#7dd3fc",
    bg: "linear-gradient(135deg, #0a1520 0%, #0d1825 100%)",
    cardBg: "#0b1520",
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M20 65 L35 45 L45 55 L60 30 L75 50 L85 42 L100 55" stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.7" strokeLinecap="round"/>
        <circle cx="60" cy="30" r="4" fill="#38bdf8" opacity="0.5"/>
        <rect x="25" y="78" width="70" height="3" rx="1.5" fill="#38bdf8" opacity="0.2"/>
        <rect x="25" y="85" width="50" height="3" rx="1.5" fill="#38bdf8" opacity="0.15"/>
        <rect x="25" y="92" width="35" height="3" rx="1.5" fill="#38bdf8" opacity="0.1"/>
        <circle cx="88" cy="25" r="8" stroke="#7dd3fc" strokeWidth="1" fill="none" opacity="0.4"/>
        <path d="M85 25 L88 28 L93 22" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round"/>
        <circle cx="25" cy="30" r="3" fill="#38bdf8" opacity="0.3"/>
        <circle cx="100" cy="75" r="2" fill="#7dd3fc" opacity="0.4"/>
      </svg>
    ),
    expenseCategories: ["Equipment & Gear", "Supplements / Products", "Studio / Gym Rent", "Staff & Trainers", "App / Platform Fees", "Marketing", "Certifications", "Insurance"],
    incomeCategories: ["Personal Training", "Group Classes", "Online Programs", "Supplements / Products", "Memberships", "Consultations"],
    contentIdeas: [
      { type: "Reel", idea: "Quick 5-minute workout anyone can do at home", pillar: "Educate" },
      { type: "Carousel", idea: "Client transformation — their story in their words", pillar: "Social proof" },
      { type: "Reel", idea: "What I eat in a day as a fitness professional", pillar: "Relate" },
      { type: "Carousel", idea: "Debunking the top 5 fitness myths", pillar: "Educate" },
      { type: "Static", idea: "New programme or service launch with limited spots", pillar: "Sell" },
      { type: "Reel", idea: "A day in the life — from morning session to evening client", pillar: "Behind the scenes" },
      { type: "Carousel", idea: "Meal prep guide for the week — simple and realistic", pillar: "Educate" },
      { type: "Reel", idea: "Trending exercise — your take on form and safety", pillar: "Thought leadership" },
      { type: "Static", idea: "Motivational quote + your personal take on it", pillar: "Inspire" },
      { type: "Carousel", idea: "Beginner's guide to starting their fitness journey", pillar: "Educate" },
      { type: "Reel", idea: "Behind the scenes of a client session (with permission)", pillar: "Showcase" },
      { type: "Carousel", idea: "Why most people fail at fitness goals — honest breakdown", pillar: "Educate" },
    ],
    captions: [
      "You don't need [X hours] at the gym. You need consistency. Here's a realistic plan 💪",
      "[Client name] started [X months] ago not being able to [milestone]. Today she [achievement]. This is real 🙌",
      "Hot take: [fitness opinion]. Agree or disagree? Drop it in the comments 👇",
      "New programme dropping [date]. [X] spots only. This is for you if [ideal client description] 🔥",
    ],
    pillars: [
      { name: "Educate", desc: "Workouts, nutrition, myth-busting — be the trusted expert", emoji: "💡" },
      { name: "Transform", desc: "Client journeys, before/afters, real results", emoji: "💪" },
      { name: "Inspire", desc: "Motivation, mindset, the mental side of fitness", emoji: "🧠" },
      { name: "Relate", desc: "Your journey, your struggles, your real life", emoji: "❤️" },
      { name: "Sell", desc: "Programmes, memberships, consultations done non-pushy", emoji: "🎯" },
    ],
  },
  {
    id: "realestate",
    label: "Real Estate",
    icon: "▣",
    color: "#a78bfa",
    accent: "#c4b5fd",
    bg: "linear-gradient(135deg, #130f20 0%, #100d1f 100%)",
    cardBg: "#120f1e",
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M60 20 L25 50 L30 50 L30 95 L90 95 L90 50 L95 50 Z" stroke="#a78bfa" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <rect x="48" y="68" width="24" height="27" rx="1" stroke="#c4b5fd" strokeWidth="1" fill="none" opacity="0.4"/>
        <rect x="36" y="58" width="14" height="14" rx="1" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.5"/>
        <rect x="70" y="58" width="14" height="14" rx="1" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M60 20 L60 12" stroke="#a78bfa" strokeWidth="1.5" opacity="0.5"/>
        <path d="M57 12 L60 8 L63 12" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.5"/>
        <circle cx="90" cy="28" r="8" stroke="#c4b5fd" strokeWidth="1" fill="none" opacity="0.4"/>
        <text x="87" y="32" fontFamily="serif" fontSize="10" fill="#a78bfa" opacity="0.7">$</text>
        <circle cx="22" cy="75" r="4" fill="#a78bfa" opacity="0.2"/>
      </svg>
    ),
    expenseCategories: ["Marketing & Staging", "Photography & Video", "Admin & Legal", "Commission", "Travel", "Ads", "CRM & Tools", "Professional Development"],
    incomeCategories: ["Sales Commission", "Rental Income", "Property Management", "Consulting Fees", "Referral Fees", "Leasing Fees"],
    contentIdeas: [
      { type: "Reel", idea: "Property tour — walk through like you're the buyer", pillar: "Showcase" },
      { type: "Carousel", idea: "5 things to look for when buying a home (most people miss #3)", pillar: "Educate" },
      { type: "Static", idea: "New listing announcement — beautiful photography with details", pillar: "Sell" },
      { type: "Reel", idea: "Just sold! The story behind this property", pillar: "Social proof" },
      { type: "Carousel", idea: "Market update — what's happening in [area] this month", pillar: "Educate" },
      { type: "Reel", idea: "Day in the life of a real estate agent — honest version", pillar: "Relate" },
      { type: "Carousel", idea: "First-time buyer's checklist — step by step", pillar: "Educate" },
      { type: "Static", idea: "Client testimonial after closing", pillar: "Social proof" },
      { type: "Reel", idea: "Neighbourhood spotlight — why [area] is worth buying in now", pillar: "Educate" },
      { type: "Carousel", idea: "Rent vs buy — honest breakdown for your market", pillar: "Thought leadership" },
      { type: "Static", idea: "Price reduced / open house this weekend", pillar: "Sell" },
      { type: "Reel", idea: "Before and after — staged vs unstaged property", pillar: "Educate" },
    ],
    captions: [
      "Just listed: [property details]. [X] beds, [X] baths, [X sqft]. The details that make this one special 👇",
      "Most first-time buyers make this mistake. Here's what we wish someone told us sooner 🏠",
      "The market in [area] is [state]. Here's what that means if you're buying or selling right now 📊",
      "[Client name] found their dream home in [X] weeks. Here's exactly how we did it 🔑",
    ],
    pillars: [
      { name: "Listings", desc: "Property showcases, tours, open house announcements", emoji: "🏡" },
      { name: "Educate", desc: "Buying/selling guides, market insights, tips", emoji: "📚" },
      { name: "Social proof", desc: "Client stories, sold announcements, reviews", emoji: "⭐" },
      { name: "Local expertise", desc: "Neighbourhood content, market updates, area guides", emoji: "📍" },
      { name: "Relate", desc: "Your agent story, behind the scenes, real moments", emoji: "❤️" },
    ],
  },
  {
    id: "education",
    label: "Education & Coaching",
    icon: "◑",
    color: "#fbbf24",
    accent: "#fde68a",
    bg: "linear-gradient(135deg, #1a1508 0%, #181408 100%)",
    cardBg: "#18140a",
    illustration: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M60 22 L95 40 L60 58 L25 40 Z" stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <path d="M25 40 L25 65 Q60 78 95 65 L95 40" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.3"/>
        <line x1="95" y1="40" x2="95" y2="72" stroke="#fbbf24" strokeWidth="1.5" opacity="0.5"/>
        <path d="M91 72 L95 78 L99 72" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.5"/>
        <circle cx="35" cy="88" r="10" stroke="#fde68a" strokeWidth="1" fill="none" opacity="0.4"/>
        <line x1="31" y1="88" x2="39" y2="88" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6"/>
        <line x1="35" y1="84" x2="35" y2="92" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="60" cy="22" r="3" fill="#fbbf24" opacity="0.5"/>
        <circle cx="82" cy="25" r="2" fill="#fde68a" opacity="0.4"/>
        <circle cx="38" cy="25" r="2" fill="#fde68a" opacity="0.4"/>
      </svg>
    ),
    expenseCategories: ["Course Platform Fees", "Marketing & Ads", "Tools & Software", "Content Creation", "Mentors & Coaches", "Community Platform", "Design & Branding", "Admin"],
    incomeCategories: ["Course Sales", "1:1 Coaching", "Group Programmes", "Memberships", "Workshops", "Speaking Fees"],
    contentIdeas: [
      { type: "Carousel", idea: "The #1 mistake my students make (and how to fix it)", pillar: "Educate" },
      { type: "Reel", idea: "Student success spotlight — their result in 60 seconds", pillar: "Social proof" },
      { type: "Carousel", idea: "Free lesson: the core framework I teach all my students", pillar: "Educate" },
      { type: "Static", idea: "Enrolment is open — what's inside the programme", pillar: "Sell" },
      { type: "Reel", idea: "My story — why I became a [coach/educator]", pillar: "Relate" },
      { type: "Carousel", idea: "5 questions to ask before hiring a coach in [niche]", pillar: "Educate" },
      { type: "Reel", idea: "Behind the scenes of creating a course module", pillar: "Behind the scenes" },
      { type: "Carousel", idea: "Free resource — downloadable guide or checklist", pillar: "Lead magnet" },
      { type: "Static", idea: "Community win — celebrate a student's milestone", pillar: "Community" },
      { type: "Reel", idea: "Live Q&A replay highlight — best question of the week", pillar: "Engage" },
      { type: "Carousel", idea: "The roadmap to [desired outcome] — step by step", pillar: "Educate" },
      { type: "Reel", idea: "Hot take on a common belief in your coaching niche", pillar: "Thought leadership" },
    ],
    captions: [
      "[Student name] came to me struggling with [problem]. [X weeks] later, [result]. Here's what changed 👇",
      "I'm opening [X] spots for [programme]. Here's exactly who it's for and what you'll walk away with 🎓",
      "Free guide dropping this week: [topic]. Save this post and I'll send it to anyone who comments [word] ⬇️",
      "Unpopular opinion: [belief in your niche]. Here's why I think most people have it backwards 💡",
    ],
    pillars: [
      { name: "Free value", desc: "Tips, lessons, frameworks — give your best stuff away", emoji: "🎁" },
      { name: "Student wins", desc: "Transformations, testimonials, community celebrations", emoji: "🏆" },
      { name: "Your story", desc: "Why you teach, your journey, your credibility", emoji: "📖" },
      { name: "Sell", desc: "Programme launches, enrolment opens, waitlists", emoji: "🎓" },
      { name: "Thought leadership", desc: "Hot takes, contrarian views, your unique lens", emoji: "💡" },
    ],
  },
];

const PLATFORMS = ["Instagram", "TikTok", "LinkedIn", "Facebook", "Twitter/X", "YouTube"];
const STATUS_OPTIONS = ["Idea", "In Progress", "Scheduled", "Posted"];
const STATUS_COLORS = { "Idea": "#94a3b8", "In Progress": "#fbbf24", "Scheduled": "#818cf8", "Posted": "#4ade80" };
const TABS = ["Home", "Content Planner", "Finance", "Brand Hub", "Guide"];

function fmt(n) { return "$" + Number(n||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}); }
function uid() { return Math.random().toString(36).slice(2); }

// ─── ONBOARDING ───────────────────────────────────────────────────────────────
function Onboarding({ onSelect }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 24px", background:"#0a0a0f" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;1,300&family=DM+Sans:wght@300;400;500&display=swap');`}</style>
      <div style={{ maxWidth:680, width:"100%", textAlign:"center" }}>
        <div style={{ fontFamily:"'Fraunces', Georgia, serif", fontSize:42, fontWeight:700, color:"#f5f0e8", letterSpacing:"-1px", lineHeight:1.1, marginBottom:12 }}>
          Welcome to <span style={{ fontStyle:"italic", color:"#c4a882" }}>BizKit</span>
        </div>
        <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:16, color:"#6b7280", marginBottom:48, fontWeight:300, lineHeight:1.6 }}>
          Your complete business toolkit — built around your niche.<br/>Start by telling us what kind of business you run.
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))", gap:12 }}>
          {NICHES.map(n => (
            <div key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelect(n)}
              style={{
                background: hovered===n.id ? n.cardBg : "#111116",
                border: `1px solid ${hovered===n.id ? n.color+"66" : "#1e1e28"}`,
                borderRadius:16, padding:"24px 16px", cursor:"pointer",
                transition:"all 0.25s", transform: hovered===n.id ? "translateY(-3px)" : "none",
                boxShadow: hovered===n.id ? `0 8px 32px ${n.color}22` : "none",
              }}>
              <div style={{ width:56, height:56, margin:"0 auto 12px", opacity: hovered===n.id ? 1 : 0.5, transition:"opacity 0.25s" }}>
                {n.illustration}
              </div>
              <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:13, fontWeight:500, color: hovered===n.id ? n.color : "#6b7280", transition:"color 0.25s", lineHeight:1.3 }}>{n.label}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:32, fontSize:12, color:"#374151", fontFamily:"'DM Sans', sans-serif" }}>
          You can change your niche anytime from settings
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [niche, setNiche] = useState(null);
  const [tab, setTab] = useState("Home");
  const [posts, setPosts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [brand, setBrand] = useState({ name:"", tagline:"", audience:"", voice:"", mission:"", goals:"", colors:"" });
  const [showPostForm, setShowPostForm] = useState(false);
  const [showTxForm, setShowTxForm] = useState(false);
  const [editingBrand, setEditingBrand] = useState(true);
  const [brandDraft, setBrandDraft] = useState(brand);
  const [filterMonth, setFilterMonth] = useState(new Date().toISOString().slice(0,7));
  const [filterStatus, setFilterStatus] = useState("All");
  const [newPost, setNewPost] = useState({ date:"", platform:"Instagram", type:"Reel", caption:"", hashtags:"", status:"Idea", notes:"" });
  const [newTx, setNewTx] = useState({ date:"", type:"Income", category:"", description:"", amount:"" });
  const [ideaFilter, setIdeaFilter] = useState("All");

  useEffect(() => { if (niche) setNewTx(t => ({ ...t, category: niche.incomeCategories[0] })); }, [niche]);

  if (!niche) return <Onboarding onSelect={n => { setNiche(n); }} />;

  const c = niche.color;
  const income = transactions.filter(t=>t.type==="Income").reduce((a,b)=>a+b.amount,0);
  const expense = transactions.filter(t=>t.type==="Expense").reduce((a,b)=>a+b.amount,0);
  const profit = income - expense;
  const filteredPosts = posts.filter(p => {
    const m = !filterMonth || p.date.startsWith(filterMonth);
    const s = filterStatus==="All" || p.status===filterStatus;
    return m && s;
  });
  const filteredTx = transactions.filter(t => !filterMonth || t.date.startsWith(filterMonth));
  const ideas = ideaFilter==="All" ? niche.contentIdeas : niche.contentIdeas.filter(i=>i.pillar===ideaFilter);
  const pillars = [...new Set(niche.contentIdeas.map(i=>i.pillar))];

  function addPost() {
    if (!newPost.date||!newPost.caption) return;
    setPosts([...posts, {...newPost, id:uid()}]);
    setNewPost({ date:"", platform:"Instagram", type:"Reel", caption:"", hashtags:"", status:"Idea", notes:"" });
    setShowPostForm(false);
  }
  function addTx() {
    if (!newTx.date||!newTx.description||!newTx.amount) return;
    setTransactions([...transactions, {...newTx, id:uid(), amount:Number(newTx.amount)}]);
    setNewTx({ date:"", type:"Income", category:niche.incomeCategories[0], description:"", amount:"" });
    setShowTxForm(false);
  }

  const S = {
    root: { minHeight:"100vh", background: niche.bg, fontFamily:"'DM Sans', sans-serif", color:"#e8e6f0" },
    header: { borderBottom:`1px solid ${c}22`, padding:"0 24px", background:"rgba(0,0,0,0.3)", backdropFilter:"blur(10px)", position:"sticky", top:0, zIndex:50 },
    inner: { maxWidth:980, margin:"0 auto" },
    tab: (active) => ({
      padding:"14px 18px", background:"transparent", border:"none", cursor:"pointer",
      fontFamily:"'DM Sans', sans-serif", fontSize:13, fontWeight: active?600:400,
      color: active ? c : "#4b5563", borderBottom: active ? `2px solid ${c}` : "2px solid transparent",
      transition:"all 0.2s", whiteSpace:"nowrap",
    }),
    card: { background:"rgba(0,0,0,0.3)", border:`1px solid ${c}18`, borderRadius:16, padding:24 },
    label: { fontSize:11, fontWeight:700, color:c, textTransform:"uppercase", letterSpacing:"0.08em", display:"block", marginBottom:6 },
    input: { background:"rgba(0,0,0,0.4)", border:`1px solid ${c}25`, color:"#e8e6f0", borderRadius:10, padding:"10px 14px", fontFamily:"'DM Sans', sans-serif", fontSize:14, width:"100%", outline:"none" },
    btn: (variant) => ({
      padding: variant==="sm" ? "7px 14px" : "11px 22px",
      borderRadius:10, border:"none", cursor:"pointer",
      fontFamily:"'DM Sans', sans-serif", fontWeight:600,
      fontSize: variant==="sm" ? 12 : 14, transition:"all 0.2s",
      background: variant==="ghost" ? "transparent" : variant==="danger" ? "#ef444422" : `${c}22`,
      color: variant==="danger" ? "#ef4444" : variant==="ghost" ? "#6b7280" : c,
      border: variant==="ghost" ? `1px solid #1e1e28` : `1px solid ${variant==="danger" ? "#ef444444" : c+"44"}`,
    }),
    primaryBtn: { padding:"11px 24px", borderRadius:10, border:"none", cursor:"pointer", fontFamily:"'DM Sans', sans-serif", fontWeight:600, fontSize:14, background:c, color:"#0a0a0f", transition:"all 0.2s" },
  };

  return (
    <div style={S.root}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;1,300&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar { width:4px; } ::-webkit-scrollbar-thumb { background:${c}44; border-radius:4px; }
        input,select,textarea { background:rgba(0,0,0,0.4); border:1px solid ${c}25; color:#e8e6f0; border-radius:10px; padding:10px 14px; font-family:'DM Sans',sans-serif; font-size:14px; width:100%; outline:none; transition:border 0.2s; }
        input:focus,select:focus,textarea:focus { border-color:${c}88; }
        textarea { resize:vertical; min-height:80px; }
        select option { background:#111116; color:#e8e6f0; }
        .g2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .g3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; }
        .g4 { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        @media(max-width:640px) { .g2,.g3,.g4 { grid-template-columns:1fr; } }
        .pill { display:inline-flex; align-items:center; padding:3px 10px; border-radius:20px; font-size:11px; font-weight:600; letter-spacing:0.04em; }
        .tag { background:rgba(0,0,0,0.3); border:1px solid ${c}22; padding:3px 10px; border-radius:6px; font-size:11px; color:${c}; display:inline-block; }
        .modal-bg { position:fixed; inset:0; background:rgba(0,0,0,0.75); display:flex; align-items:center; justify-content:center; z-index:100; padding:20px; backdrop-filter:blur(4px); }
        .modal { background:#111116; border:1px solid ${c}33; border-radius:20px; padding:28px; width:100%; max-width:520px; max-height:90vh; overflow-y:auto; }
        .postcard { background:rgba(0,0,0,0.3); border:1px solid ${c}18; border-radius:14px; padding:18px; margin-bottom:10px; transition:border-color 0.2s; }
        .postcard:hover { border-color:${c}44; }
        .ideacard { background:rgba(0,0,0,0.25); border:1px solid ${c}18; border-radius:12px; padding:16px; transition:all 0.2s; cursor:default; }
        .ideacard:hover { border-color:${c}55; background:rgba(0,0,0,0.4); transform:translateY(-2px); }
        .txrow { display:grid; grid-template-columns:80px 1fr 110px 90px 60px; gap:12px; align-items:center; padding:12px 16px; background:rgba(0,0,0,0.25); border:1px solid ${c}15; border-radius:10px; margin-bottom:8px; font-size:13px; }
        @media(max-width:640px) { .txrow { grid-template-columns:1fr; } }
        .section-title { font-family:'Fraunces',Georgia,serif; font-size:24px; font-weight:700; color:#f5f0e8; margin-bottom:4px; }
        .section-sub { font-size:13px; color:#6b7280; margin-bottom:24px; font-weight:300; }
        .guide-section { background:rgba(0,0,0,0.25); border-left:2px solid ${c}; border-radius:0 12px 12px 0; padding:20px 24px; margin-bottom:16px; }
      `}</style>

      {/* Header */}
      <div style={S.header}>
        <div style={{...S.inner, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{ display:"flex", alignItems:"center", gap:16 }}>
            <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:18, fontStyle:"italic", color:c }}>BizKit</div>
            <div style={{ width:1, height:16, background:"#1e1e28" }}/>
            <div style={{ fontSize:12, color:"#6b7280" }}>{niche.label}</div>
          </div>
          <button style={{ ...S.btn("ghost"), fontSize:11 }} onClick={() => setNiche(null)}>Switch niche</button>
        </div>
        <div style={{...S.inner, display:"flex", overflowX:"auto", gap:0}}>
          {TABS.map(t => <button key={t} style={S.tab(tab===t)} onClick={()=>setTab(t)}>{t}</button>)}
        </div>
      </div>

      <div style={{...S.inner, padding:"32px 24px"}}>

        {/* ── HOME ── */}
        {tab==="Home" && (
          <div>
            <div style={{ marginBottom:32 }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:20, flexWrap:"wrap" }}>
                <div style={{ width:64, height:64, flexShrink:0 }}>{niche.illustration}</div>
                <div>
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:32, fontWeight:700, color:"#f5f0e8", lineHeight:1.1, marginBottom:6 }}>
                    Your {niche.label} OS
                  </div>
                  <div style={{ fontSize:14, color:"#6b7280", fontWeight:300, maxWidth:480 }}>
                    Everything you need to manage content, track money, and grow your business — built specifically for {niche.label.toLowerCase()} businesses.
                  </div>
                </div>
              </div>
            </div>

            <div className="g4" style={{ marginBottom:24 }}>
              {[
                { label:"Total Income", value:fmt(income), color:"#4ade80" },
                { label:"Total Expenses", value:fmt(expense), color:"#f87171" },
                { label:"Net Profit", value:fmt(profit), color: profit>=0?"#4ade80":"#f87171" },
                { label:"Content Posts", value:posts.length, color:c, sub:`${posts.filter(p=>p.status==="Posted").length} posted` },
              ].map(item => (
                <div key={item.label} style={{ ...S.card, padding:20 }}>
                  <div style={{ fontSize:11, color:item.color, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:10 }}>{item.label}</div>
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:28, fontWeight:700, color:item.color }}>{item.value}</div>
                  {item.sub && <div style={{ fontSize:11, color:"#4b5563", marginTop:4 }}>{item.sub}</div>}
                </div>
              ))}
            </div>

            <div className="g2" style={{ marginBottom:24 }}>
              <div style={S.card}>
                <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:16, color:"#f5f0e8", marginBottom:16 }}>Content Pipeline</div>
                {STATUS_OPTIONS.map(s => {
                  const count = posts.filter(p=>p.status===s).length;
                  const pct = posts.length ? Math.round(count/posts.length*100) : 0;
                  return (
                    <div key={s} style={{ marginBottom:14 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, marginBottom:5 }}>
                        <span style={{ color:STATUS_COLORS[s], fontWeight:600 }}>{s}</span>
                        <span style={{ color:"#4b5563" }}>{count}</span>
                      </div>
                      <div style={{ height:4, background:"rgba(255,255,255,0.05)", borderRadius:2, overflow:"hidden" }}>
                        <div style={{ height:"100%", width:pct+"%", background:STATUS_COLORS[s], borderRadius:2, transition:"width 0.4s" }}/>
                      </div>
                    </div>
                  );
                })}
                {posts.length===0 && <div style={{ fontSize:12, color:"#4b5563" }}>No posts yet — add your first in Content Planner</div>}
              </div>

              <div style={S.card}>
                <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:16, color:"#f5f0e8", marginBottom:16 }}>Your Content Pillars</div>
                {niche.pillars.map(p => (
                  <div key={p.name} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"10px 0", borderBottom:`1px solid ${c}10` }}>
                    <span style={{ fontSize:18 }}>{p.emoji}</span>
                    <div>
                      <div style={{ fontSize:13, fontWeight:600, color:c, marginBottom:2 }}>{p.name}</div>
                      <div style={{ fontSize:11, color:"#6b7280", lineHeight:1.4 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <button style={S.primaryBtn} onClick={() => { setTab("Content Planner"); setShowPostForm(true); }}>+ Add Content</button>
              <button style={S.btn()} onClick={() => { setTab("Finance"); setShowTxForm(true); }}>+ Add Transaction</button>
              <button style={S.btn("ghost")} onClick={() => setTab("Guide")}>Read the Guide →</button>
            </div>
          </div>
        )}

        {/* ── CONTENT PLANNER ── */}
        {tab==="Content Planner" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24, flexWrap:"wrap", gap:12 }}>
              <div>
                <div className="section-title">Content Planner</div>
                <div className="section-sub">Plan, track, and execute your {niche.label.toLowerCase()} content</div>
              </div>
              <button style={S.primaryBtn} onClick={() => setShowPostForm(true)}>+ Add Post</button>
            </div>

            {/* Ideas Bank */}
            <div style={{ ...S.card, marginBottom:24, background:`linear-gradient(135deg, rgba(0,0,0,0.5), ${c}08)` }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16, flexWrap:"wrap", gap:10 }}>
                <div>
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:16, color:"#f5f0e8" }}>Ideas Bank for {niche.label}</div>
                  <div style={{ fontSize:12, color:"#6b7280", marginTop:2 }}>Tap any idea to add it to your planner</div>
                </div>
                <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                  {["All", ...pillars].map(p => (
                    <button key={p} onClick={() => setIdeaFilter(p)}
                      style={{ padding:"5px 12px", borderRadius:20, border:`1px solid ${ideaFilter===p ? c : c+"33"}`, background: ideaFilter===p ? c+"22" : "transparent", color: ideaFilter===p ? c : "#6b7280", fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:"'DM Sans',sans-serif" }}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))", gap:10 }}>
                {ideas.map((idea, i) => (
                  <div key={i} className="ideacard"
                    onClick={() => { setNewPost(p => ({...p, caption:idea.idea, type:idea.type})); setShowPostForm(true); }}>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                      <span className="tag">{idea.type}</span>
                      <span style={{ fontSize:11, color:`${c}88`, fontWeight:600 }}>{idea.pillar}</span>
                    </div>
                    <div style={{ fontSize:13, color:"#d1d5db", lineHeight:1.5 }}>{idea.idea}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Caption starters */}
            <div style={{ ...S.card, marginBottom:24 }}>
              <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:16, color:"#f5f0e8", marginBottom:12 }}>Caption Starters for {niche.label}</div>
              <div style={{ display:"grid", gap:8 }}>
                {niche.captions.map((cap, i) => (
                  <div key={i} style={{ background:"rgba(0,0,0,0.3)", border:`1px solid ${c}15`, borderRadius:10, padding:"12px 16px", fontSize:13, color:"#9ca3af", lineHeight:1.5, cursor:"pointer" }}
                    onClick={() => { setNewPost(p=>({...p, caption:cap})); setShowPostForm(true); }}>
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            {/* Filters + posts */}
            <div style={{ display:"flex", gap:12, marginBottom:16, flexWrap:"wrap" }}>
              <input type="month" value={filterMonth} onChange={e=>setFilterMonth(e.target.value)} style={{ width:"auto", minWidth:160 }}/>
              <select value={filterStatus} onChange={e=>setFilterStatus(e.target.value)} style={{ width:"auto", minWidth:130 }}>
                <option>All</option>
                {STATUS_OPTIONS.map(s=><option key={s}>{s}</option>)}
              </select>
            </div>

            {filteredPosts.length===0 && (
              <div style={{ textAlign:"center", color:"#4b5563", padding:"48px 0", fontSize:14 }}>
                No posts yet — pick an idea above or add one manually
              </div>
            )}

            {filteredPosts.map(p => (
              <div key={p.id} className="postcard">
                <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8, marginBottom:10 }}>
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap", alignItems:"center" }}>
                    <span style={{ fontSize:12, color:"#6b7280" }}>{p.date}</span>
                    <span className="tag">{p.platform}</span>
                    <span className="tag">{p.type}</span>
                  </div>
                  <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                    <select value={p.status}
                      onChange={e => setPosts(posts.map(pp => pp.id===p.id ? {...pp,status:e.target.value}:pp))}
                      style={{ width:"auto", minWidth:120, fontSize:12, padding:"4px 10px", color:STATUS_COLORS[p.status], background:STATUS_COLORS[p.status]+"18", border:`1px solid ${STATUS_COLORS[p.status]}44` }}>
                      {STATUS_OPTIONS.map(s=><option key={s} style={{color:"#e8e6f0",background:"#111116"}}>{s}</option>)}
                    </select>
                    <button style={S.btn("danger","sm")} onClick={() => setPosts(posts.filter(pp=>pp.id!==p.id))}>✕</button>
                  </div>
                </div>
                <div style={{ fontSize:14, color:"#e8e6f0", marginBottom:p.hashtags||p.notes?8:0 }}>{p.caption}</div>
                {p.hashtags && <div style={{ fontSize:12, color:c+"88" }}>{p.hashtags}</div>}
                {p.notes && <div style={{ fontSize:12, color:"#6b7280", marginTop:4, fontStyle:"italic" }}>📝 {p.notes}</div>}
              </div>
            ))}

            {showPostForm && (
              <div className="modal-bg">
                <div className="modal">
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:20, color:"#f5f0e8", marginBottom:20 }}>Add New Post</div>
                  <div style={{ display:"grid", gap:14 }}>
                    <div><label style={S.label}>Date</label><input type="date" value={newPost.date} onChange={e=>setNewPost({...newPost,date:e.target.value})}/></div>
                    <div className="g2">
                      <div><label style={S.label}>Platform</label>
                        <select value={newPost.platform} onChange={e=>setNewPost({...newPost,platform:e.target.value})}>
                          {PLATFORMS.map(p=><option key={p}>{p}</option>)}
                        </select>
                      </div>
                      <div><label style={S.label}>Format</label>
                        <select value={newPost.type} onChange={e=>setNewPost({...newPost,type:e.target.value})}>
                          {["Reel","Carousel","Static Post","Story","Video","Thread","Other"].map(t=><option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div><label style={S.label}>Caption / Idea</label><textarea value={newPost.caption} onChange={e=>setNewPost({...newPost,caption:e.target.value})} placeholder="Write your caption or post concept..."/></div>
                    <div><label style={S.label}>Hashtags</label><input value={newPost.hashtags} onChange={e=>setNewPost({...newPost,hashtags:e.target.value})} placeholder="#yourniche #business"/></div>
                    <div><label style={S.label}>Status</label>
                      <select value={newPost.status} onChange={e=>setNewPost({...newPost,status:e.target.value})}>
                        {STATUS_OPTIONS.map(s=><option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div><label style={S.label}>Notes</label><input value={newPost.notes} onChange={e=>setNewPost({...newPost,notes:e.target.value})} placeholder="Reminders, visuals needed, etc."/></div>
                    <div style={{ display:"flex", gap:10, justifyContent:"flex-end", marginTop:4 }}>
                      <button style={S.btn("ghost")} onClick={()=>setShowPostForm(false)}>Cancel</button>
                      <button style={S.primaryBtn} onClick={addPost}>Save Post</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── FINANCE ── */}
        {tab==="Finance" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24, flexWrap:"wrap", gap:12 }}>
              <div>
                <div className="section-title">Finance Tracker</div>
                <div className="section-sub">Track every dollar in and out of your {niche.label.toLowerCase()} business</div>
              </div>
              <button style={S.primaryBtn} onClick={()=>setShowTxForm(true)}>+ Add Transaction</button>
            </div>

            <div className="g3" style={{ marginBottom:24 }}>
              {[
                { label:"Total Income", value:fmt(income), color:"#4ade80", border:"#4ade8033" },
                { label:"Total Expenses", value:fmt(expense), color:"#f87171", border:"#f8717133" },
                { label:"Net Profit", value:fmt(profit), color:profit>=0?"#4ade80":"#f87171", border:(profit>=0?"#4ade80":"#f87171")+"33" },
              ].map(item=>(
                <div key={item.label} style={{ ...S.card, border:`1px solid ${item.border}` }}>
                  <div style={{ fontSize:11, color:item.color, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:8 }}>{item.label}</div>
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:28, fontWeight:700, color:item.color }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom:16 }}>
              <input type="month" value={filterMonth} onChange={e=>setFilterMonth(e.target.value)} style={{ width:"auto", minWidth:160 }}/>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"80px 1fr 110px 90px 60px", gap:12, padding:"6px 16px", fontSize:10, color:c, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:8 }}>
              <span>Date</span><span>Description</span><span>Category</span><span>Amount</span><span></span>
            </div>

            {filteredTx.length===0 && <div style={{ textAlign:"center", color:"#4b5563", padding:"32px 0", fontSize:14 }}>No transactions yet for this period</div>}

            {filteredTx.map(t=>(
              <div key={t.id} className="txrow">
                <span style={{ fontSize:11, color:"#6b7280" }}>{t.date}</span>
                <div>
                  <div style={{ fontWeight:500, color:"#e8e6f0" }}>{t.description}</div>
                  <span style={{ fontSize:10, color:"#6b7280" }}>{t.type}</span>
                </div>
                <span className="tag" style={{ fontSize:10 }}>{t.category}</span>
                <span style={{ fontWeight:700, color:t.type==="Income"?"#4ade80":"#f87171" }}>
                  {t.type==="Income"?"+":"-"}{fmt(t.amount)}
                </span>
                <button style={S.btn("danger","sm")} onClick={()=>setTransactions(transactions.filter(tt=>tt.id!==t.id))}>✕</button>
              </div>
            ))}

            <div className="g2" style={{ marginTop:28 }}>
              <div style={S.card}>
                <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:15, color:"#4ade80", marginBottom:14 }}>Income by Category</div>
                {niche.incomeCategories.map(cat=>{
                  const total = transactions.filter(t=>t.type==="Income"&&t.category===cat).reduce((a,b)=>a+b.amount,0);
                  if(!total) return null;
                  return <div key={cat} style={{ display:"flex", justifyContent:"space-between", fontSize:13, padding:"8px 0", borderBottom:`1px solid ${c}10` }}><span style={{ color:"#9ca3af" }}>{cat}</span><span style={{ color:"#4ade80", fontWeight:600 }}>{fmt(total)}</span></div>;
                })}
                {transactions.filter(t=>t.type==="Income").length===0 && <div style={{ fontSize:12, color:"#4b5563" }}>No income recorded yet</div>}
              </div>
              <div style={S.card}>
                <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:15, color:"#f87171", marginBottom:14 }}>Expenses by Category</div>
                {niche.expenseCategories.map(cat=>{
                  const total = transactions.filter(t=>t.type==="Expense"&&t.category===cat).reduce((a,b)=>a+b.amount,0);
                  if(!total) return null;
                  return <div key={cat} style={{ display:"flex", justifyContent:"space-between", fontSize:13, padding:"8px 0", borderBottom:`1px solid ${c}10` }}><span style={{ color:"#9ca3af" }}>{cat}</span><span style={{ color:"#f87171", fontWeight:600 }}>{fmt(total)}</span></div>;
                })}
                {transactions.filter(t=>t.type==="Expense").length===0 && <div style={{ fontSize:12, color:"#4b5563" }}>No expenses recorded yet</div>}
              </div>
            </div>

            {showTxForm && (
              <div className="modal-bg">
                <div className="modal">
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:20, color:"#f5f0e8", marginBottom:20 }}>Add Transaction</div>
                  <div style={{ display:"grid", gap:14 }}>
                    <div><label style={S.label}>Date</label><input type="date" value={newTx.date} onChange={e=>setNewTx({...newTx,date:e.target.value})}/></div>
                    <div className="g2">
                      <div><label style={S.label}>Type</label>
                        <select value={newTx.type} onChange={e=>setNewTx({...newTx,type:e.target.value,category:(e.target.value==="Income"?niche.incomeCategories:niche.expenseCategories)[0]})}>
                          <option>Income</option><option>Expense</option>
                        </select>
                      </div>
                      <div><label style={S.label}>Category</label>
                        <select value={newTx.category} onChange={e=>setNewTx({...newTx,category:e.target.value})}>
                          {(newTx.type==="Income"?niche.incomeCategories:niche.expenseCategories).map(c=><option key={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                    <div><label style={S.label}>Description</label><input value={newTx.description} onChange={e=>setNewTx({...newTx,description:e.target.value})} placeholder="What was this for?"/></div>
                    <div><label style={S.label}>Amount ($)</label><input type="number" value={newTx.amount} onChange={e=>setNewTx({...newTx,amount:e.target.value})} placeholder="0.00" min="0" step="0.01"/></div>
                    <div style={{ display:"flex", gap:10, justifyContent:"flex-end", marginTop:4 }}>
                      <button style={S.btn("ghost")} onClick={()=>setShowTxForm(false)}>Cancel</button>
                      <button style={S.primaryBtn} onClick={addTx}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── BRAND HUB ── */}
        {tab==="Brand Hub" && (
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:24, flexWrap:"wrap", gap:12 }}>
              <div>
                <div className="section-title">Brand Hub</div>
                <div className="section-sub">Define your brand so every piece of content feels intentional</div>
              </div>
              {!editingBrand
                ? <button style={S.primaryBtn} onClick={()=>{setBrandDraft(brand);setEditingBrand(true);}}>Edit Brand</button>
                : <div style={{ display:"flex", gap:10 }}>
                    <button style={S.btn("ghost")} onClick={()=>setEditingBrand(false)}>Cancel</button>
                    <button style={S.primaryBtn} onClick={()=>{setBrand(brandDraft);setEditingBrand(false);}}>Save</button>
                  </div>
              }
            </div>

            <div className="g2" style={{ marginBottom:20 }}>
              <div style={S.card}>
                <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:16, color:c, marginBottom:18 }}>Business Identity</div>
                {!editingBrand ? (
                  <div style={{ display:"grid", gap:16 }}>
                    {[["Business Name", brand.name||"Not set"],["Tagline",brand.tagline||"Not set"],["Brand Voice",brand.voice||"Not set"],["Brand Colors",brand.colors||"Not set"]].map(([l,v])=>(
                      <div key={l}><label style={S.label}>{l}</label><div style={{ fontSize:14, color:"#d1d5db" }}>{v}</div></div>
                    ))}
                  </div>
                ) : (
                  <div style={{ display:"grid", gap:14 }}>
                    {[["name","Business Name"],["tagline","Your tagline / slogan"],["voice","Brand voice (e.g. warm, bold, expert)"],["colors","Brand colours"]].map(([k,ph])=>(
                      <div key={k}><label style={S.label}>{ph}</label><input value={brandDraft[k]} onChange={e=>setBrandDraft({...brandDraft,[k]:e.target.value})} placeholder={ph}/></div>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ display:"grid", gap:16 }}>
                <div style={S.card}>
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:15, color:c, marginBottom:12 }}>Target Audience</div>
                  {!editingBrand ? <div style={{ fontSize:14, color:"#d1d5db" }}>{brand.audience||"Not set"}</div>
                    : <textarea value={brandDraft.audience} onChange={e=>setBrandDraft({...brandDraft,audience:e.target.value})} placeholder="Who is your ideal customer? Age, lifestyle, pain points..."/>}
                </div>
                <div style={S.card}>
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:15, color:c, marginBottom:12 }}>Mission Statement</div>
                  {!editingBrand ? <div style={{ fontSize:14, color:"#d1d5db" }}>{brand.mission||"Not set"}</div>
                    : <textarea value={brandDraft.mission} onChange={e=>setBrandDraft({...brandDraft,mission:e.target.value})} placeholder="Why does your business exist? What change do you create?"/>}
                </div>
                <div style={S.card}>
                  <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:15, color:c, marginBottom:12 }}>Business Goals</div>
                  {!editingBrand ? <div style={{ fontSize:14, color:"#d1d5db", whiteSpace:"pre-line" }}>{brand.goals||"Not set"}</div>
                    : <textarea value={brandDraft.goals} onChange={e=>setBrandDraft({...brandDraft,goals:e.target.value})} placeholder="List your goals for this quarter or year..."/>}
                </div>
              </div>
            </div>

            <div style={S.card}>
              <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:16, color:"#f5f0e8", marginBottom:16 }}>Content Pillars for {niche.label}</div>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(180px,1fr))", gap:12 }}>
                {niche.pillars.map(p=>(
                  <div key={p.name} style={{ background:`${c}0a`, border:`1px solid ${c}22`, borderRadius:12, padding:16 }}>
                    <div style={{ fontSize:22, marginBottom:8 }}>{p.emoji}</div>
                    <div style={{ fontSize:13, fontWeight:600, color:c, marginBottom:6 }}>{p.name}</div>
                    <div style={{ fontSize:12, color:"#6b7280", lineHeight:1.5 }}>{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── GUIDE ── */}
        {tab==="Guide" && (
          <div>
            <div className="section-title">How to Use BizKit</div>
            <div className="section-sub">A plain-English guide to getting the most out of every section</div>

            {[
              {
                title:"🏠 Home Dashboard",
                content:`The Home tab is your command centre. At a glance, you'll see your total income, total expenses, net profit, and how many content posts you have in your pipeline.\n\nThe Content Pipeline shows how your posts are distributed across different stages — from Idea to Posted. Use this to make sure you always have content ready to go.\n\nYour Content Pillars section shows the 5 types of content that work best for ${niche.label} businesses. Try to rotate through all of them each week so your audience gets variety.`
              },
              {
                title:"📅 Content Planner",
                content:`This is where you plan everything you post on social media — before you post it. Planning ahead means you're never scrambling for ideas at the last minute.\n\n**Ideas Bank**: We've pre-loaded this with ${niche.contentIdeas.length} content ideas written specifically for ${niche.label} businesses. Tap any idea to instantly add it to your planner.\n\n**Caption Starters**: These are fill-in-the-blank captions designed for your niche. Replace the [brackets] with your own details.\n\n**Status tracking**: Move posts from Idea → In Progress → Scheduled → Posted as you work through them. This helps you see exactly where everything is.\n\n**Filters**: Use the month filter to view only what's planned for a specific period, and the status filter to focus on what needs attention.`
              },
              {
                title:"💰 Finance Tracker",
                content:`Track every rand, dollar, or pound that moves through your business. This isn't accounting software — it's a simple, visual record of what's coming in and going out.\n\n**Adding income**: Every time you make a sale, get paid by a client, or receive money for your business, log it here. Choose the right category so you can see which income streams are performing best.\n\n**Adding expenses**: Log everything you spend — even small things like subscriptions or supplies. These add up fast.\n\n**Net Profit**: This is the number that actually matters. Income minus expenses = what your business actually made. Check this weekly.\n\n**Category breakdowns**: At the bottom, you'll see your income and expenses broken down by category. This tells you where your money is really coming from and going to.`
              },
              {
                title:"🎨 Brand Hub",
                content:`A clear brand makes your content consistent, recognisable, and trustworthy. This section helps you define yours.\n\n**Business Identity**: Your name, tagline, voice, and colours. Fill this in so you have a reference point every time you create content.\n\n**Target Audience**: Be specific. Don't write "everyone". Write "small business owners aged 28–45 who are overwhelmed by social media and want practical help."\n\n**Mission Statement**: Why does your business exist? What problem do you solve? What change do you create for your customers?\n\n**Content Pillars**: These are the 5 themes your content rotates around. Every post you create should fall into one of these pillars — this keeps your page focused and purposeful.`
              },
              {
                title:"💡 Tips for Success",
                content:`→ **Consistency beats perfection.** Post something imperfect consistently rather than waiting for perfect content that never ships.\n\n→ **Use the Ideas Bank.** Those content ideas were written specifically for ${niche.label} businesses. You don't need to reinvent the wheel — just add your voice.\n\n→ **Log every transaction.** Even the small ones. Over time, the data will show you exactly where to focus your energy.\n\n→ **Review weekly.** Spend 10 minutes every Monday reviewing your content pipeline and your finances. That's it. That's the habit.\n\n→ **Your brand hub is a living document.** Update it as your business evolves. The clearer your brand, the easier content creation becomes.`
              },
            ].map(section=>(
              <div key={section.title} className="guide-section">
                <div style={{ fontFamily:"'Fraunces',Georgia,serif", fontSize:18, color:"#f5f0e8", marginBottom:12 }}>{section.title}</div>
                {section.content.split("\n\n").map((para, i)=>(
                  <p key={i} style={{ fontSize:14, color:"#9ca3af", lineHeight:1.75, marginBottom:10, fontWeight:300 }}>
                    {para.split(/\*\*(.*?)\*\*/g).map((chunk, j) =>
                      j%2===1 ? <strong key={j} style={{ color:"#d1d5db", fontWeight:600 }}>{chunk}</strong> : chunk
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

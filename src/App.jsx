const SURL = process.env.REACT_APP_SUPABASE_URL;
const SKEY = process.env.REACT_APP_SUPABASE_ANON_KEY;
const SURL = "https://quyvmsqdfzuetzwzhase.supabase.co";
const SKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1eXZtc3FkZnp1ZXR6d3poYXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4NTQ1NjUsImV4cCI6MjA5MTQzMDU2NX0.yBg9rXcBxBL2xnOnM_6YTtkpy3BcFZdP3dmYrU-3qvk";
const sb = createClient(SURL, SKEY);
const G = "#16a34a";

const NICHES = [
  { id:"beauty", label:"Beauty & Wellness", accent:"#c4a882",
    exp:["Products & Supplies","Equipment","Salon Rent","Staff Wages","Marketing","Training","Packaging","Software"],
    inc:["Services","Product Sales","Gift Cards","Consultations","Online Courses","Collaborations"],
    ideas:[{t:"Reel",i:"Before and after transformation reveal",p:"Showcase"},{t:"Carousel",i:"5 skincare mistakes your clients are making",p:"Educate"},{t:"Story",i:"Poll: Which treatment do you want first?",p:"Engage"},{t:"Reel",i:"Morning salon setup — satisfying and aesthetic",p:"Behind the scenes"},{t:"Static",i:"Client testimonial quote card",p:"Social proof"},{t:"Reel",i:"Trending beauty hack with your expert take",p:"Educate"},{t:"Carousel",i:"Your complete price list beautifully designed",p:"Showcase"},{t:"Reel",i:"Day in the life of a beauty business owner",p:"Relate"},{t:"Static",i:"Seasonal treatment promotion",p:"Sell"},{t:"Reel",i:"Product unboxing — new stock just arrived",p:"Entertain"},{t:"Carousel",i:"How to maintain your [service] at home",p:"Educate"},{t:"Story",i:"Behind the scenes of a full booking day",p:"Behind the scenes"}],
    caps:["Your skin deserves the best — book your [service] today","Before she walked in, she felt [emotion]. When she walked out: [transformation]","Hot take: [beauty tip]. Do you agree?","We make you feel like the best version of yourself"],
    pillars:[{n:"Transform",d:"Before and afters, client reveals, visual results"},{n:"Educate",d:"Skincare tips, product knowledge, myths vs facts"},{n:"Behind the scenes",d:"Your process, your space, your passion"},{n:"Social proof",d:"Reviews, testimonials, client love"},{n:"Sell",d:"Promotions, new services, booking CTAs"}],
    checklist:["Register your business name","Set up Instagram and TikTok business accounts","Create a booking system (Booksy or Calendly)","Set your price list","Get professional liability insurance","Create a client consent and intake form","Set up a payment method","Take professional photos of your space","Create a Google Business Profile","Build a referral programme"],
    hints:{ig:"Instagram > Profile > Insights > tap any post > Reach, Saves, Shares",tt:"TikTok > tap your video > three dots > Analytics",li:"LinkedIn > tap a post > View analytics"} },
  { id:"tech", label:"Tech & Software", accent:"#4ade80",
    exp:["Hosting & Infrastructure","Software Licenses","Developer Tools","Marketing & Ads","Team / Contractors","Legal & Compliance","Equipment","Events"],
    inc:["SaaS Subscriptions","One-time Sales","Consulting","API Usage Fees","Partnerships","Grants & Funding"],
    ideas:[{t:"Carousel",i:"5 tools every small business needs in 2026",p:"Educate"},{t:"Reel",i:"Watch us build a feature in real time",p:"Behind the scenes"},{t:"Static",i:"Customer success story with results",p:"Social proof"},{t:"Carousel",i:"We just launched [feature] — here is what it does",p:"Announce"},{t:"Reel",i:"The problem we solve in under 30 seconds",p:"Sell"},{t:"Carousel",i:"Common misconceptions about [your tech niche]",p:"Educate"},{t:"Static",i:"Milestone post — X users, X customers, X revenue",p:"Relate"},{t:"Reel",i:"Our team favourite productivity hacks",p:"Entertain"},{t:"Carousel",i:"How to get started with [your product] step by step",p:"Onboard"},{t:"Static",i:"Industry stat and your hot take on it",p:"Thought leadership"},{t:"Reel",i:"A bug we fixed and what we learned",p:"Transparency"},{t:"Carousel",i:"What we are building next — community sneak peek",p:"Engage"}],
    caps:["We built [product] because [problem] was costing businesses time and money","The future of [industry] just needs the right tools","Our users save [X hours] per week. Here is how","[Feature] is now live — we have been working on this for months"],
    pillars:[{n:"Educate",d:"Tech tips, tutorials, industry insights"},{n:"Showcase",d:"Product demos, feature highlights"},{n:"Social proof",d:"Case studies, metrics, customer wins"},{n:"Thought leadership",d:"Opinions, predictions, industry takes"},{n:"Community",d:"Feedback requests, polls, feature voting"}],
    checklist:["Register your business name","Set up a GitHub or GitLab account","Choose your hosting provider","Set up a privacy policy and terms of service","Create a Stripe or payment integration","Set up error tracking (Sentry or similar)","Create a product roadmap","Set up a customer support channel","Build a landing page","Get your first 10 beta users"],
    hints:{ig:"Instagram > Profile > Insights > tap any post > Reach, Saves, Shares",tt:"TikTok > tap your video > three dots > Analytics",li:"LinkedIn > tap a post > View analytics"} },
  { id:"agric", label:"Agriculture & Farming", accent:"#86d88a",
    exp:["Seeds & Inputs","Equipment & Machinery","Fuel & Transport","Labour","Fertilizers & Chemicals","Land Rent","Storage","Marketing"],
    inc:["Crop Sales","Livestock Sales","Processed Products","Government Subsidies","Export Sales","Agro-tourism"],
    ideas:[{t:"Reel",i:"Harvest day — raw and real footage of your farm",p:"Behind the scenes"},{t:"Carousel",i:"From seed to table — your full production process",p:"Educate"},{t:"Static",i:"What is in season right now and how to order",p:"Sell"},{t:"Reel",i:"Meet the people behind your food",p:"Relate"},{t:"Carousel",i:"5 things you did not know about [your crop]",p:"Educate"},{t:"Reel",i:"Time-lapse of your crop growing over weeks",p:"Entertain"},{t:"Static",i:"Customer recipe using your produce",p:"Community"},{t:"Carousel",i:"Why buying local farm produce matters",p:"Educate"},{t:"Reel",i:"A day on the farm from sunrise to sunset",p:"Behind the scenes"},{t:"Static",i:"Seasonal availability chart",p:"Sell"},{t:"Carousel",i:"The challenges of farming no one talks about",p:"Relate"},{t:"Reel",i:"Sustainable farming practices you use and why",p:"Values"}],
    caps:["Every [product] you buy from us was grown with [values]","Harvest season is here — here is what is fresh and how to get yours","Farming is not just a job. It is months of patience, work, and love","Real food. Real farmers. Real care. Order yours this week"],
    pillars:[{n:"Harvest Stories",d:"Real moments from the farm"},{n:"Educate",d:"Farming processes, nutrition facts, sustainability"},{n:"Sell",d:"What is available, seasonal drops, order CTAs"},{n:"Values",d:"Why you farm the way you do"},{n:"Community",d:"Recipes, customer features, local partnerships"}],
    checklist:["Register your farm as a business","Get all required agricultural permits","Set up a record-keeping system","Open a dedicated business bank account","Set up a WhatsApp or order management system","Create social media accounts","Get crop insurance","Set up a delivery or pickup system","Find your first 5 regular customers","Join a local farmers market or co-op"],
    hints:{ig:"Instagram > Profile > Insights > tap any post > Reach, Saves, Shares",tt:"TikTok > tap your video > three dots > Analytics",li:"LinkedIn > tap a post > View analytics"} },
  { id:"food", label:"Food & Restaurant", accent:"#fb923c",
    exp:["Ingredients & Food Cost","Kitchen Equipment","Staff Wages","Rent & Utilities","Packaging","Delivery Fees","Marketing","Licences & Permits"],
    inc:["Dine-in Sales","Takeaway & Delivery","Catering","Private Events","Meal Kits","Cooking Classes"],
    ideas:[{t:"Reel",i:"Satisfying food prep video — ASMR style",p:"Entertain"},{t:"Carousel",i:"What goes into our signature dish",p:"Educate"},{t:"Static",i:"New menu item announcement with beautiful photography",p:"Sell"},{t:"Reel",i:"Chef at work — watch the dish come together",p:"Behind the scenes"},{t:"Carousel",i:"Customer reviews with food photos",p:"Social proof"},{t:"Reel",i:"A day in our kitchen — the chaos and love",p:"Relate"},{t:"Static",i:"Weekly specials and limited time offer",p:"Sell"},{t:"Carousel",i:"The story behind our restaurant and why we started",p:"Relate"},{t:"Reel",i:"Customer reaction to trying our food for the first time",p:"Social proof"},{t:"Static",i:"Sourcing story — where our main ingredient comes from",p:"Values"},{t:"Reel",i:"Quick recipe using our signature flavours",p:"Educate"},{t:"Carousel",i:"Pairing guide — what to order together",p:"Educate"}],
    caps:["Some dishes you make. Some dishes you feel. This is [dish name]","Our [dish] has [X] ingredients, [X] hours of prep, and 100 percent love","New on the menu: [item]. Here is why you need to try it","The kitchen does not sleep. We are open [hours] — come hungry"],
    pillars:[{n:"Food as art",d:"Beautiful plating, colour-rich, visual-first content"},{n:"Behind the kitchen",d:"Prep footage, chef stories, sourcing journeys"},{n:"Social proof",d:"Customer reviews, reactions, UGC reposts"},{n:"Sell",d:"Menu highlights, specials, limited offers"},{n:"Values",d:"Where your food comes from, sustainability"}],
    checklist:["Register your food business","Get food handler certification","Apply for food service licence","Set up a POS system","Create your menu with pricing","Set up delivery on Glovo or Jumia Food","Open a business bank account","Get food safety insurance","Create a food photography setup","Set up a reservation or ordering system"],
    hints:{ig:"Instagram > Profile > Insights > tap any post > Reach, Saves, Shares",tt:"TikTok > tap your video > three dots > Analytics",li:"LinkedIn > tap a post > View analytics"} },
  { id:"fashion", label:"Fashion & Style", accent:"#e879a0",
    exp:["Inventory & Stock","Packaging & Branding","Shipping & Logistics","Photography","Marketing & Ads","Platform Fees","Storage","Returns & Refunds"],
    inc:["Online Sales","In-store Sales","Wholesale","Custom Orders","Styling Services","Brand Collaborations"],
    ideas:[{t:"Reel",i:"Styling the same piece 5 different ways",p:"Educate"},{t:"Carousel",i:"New collection drop with styling notes",p:"Sell"},{t:"Reel",i:"Get ready with me wearing our latest piece",p:"Showcase"},{t:"Carousel",i:"How to build a capsule wardrobe on a budget",p:"Educate"},{t:"Static",i:"Customer outfit post — tag and feature them",p:"Community"},{t:"Reel",i:"Behind the scenes of a photoshoot",p:"Behind the scenes"},{t:"Carousel",i:"Trend report — what is in for this season",p:"Educate"},{t:"Reel",i:"Packaging an order — satisfying and branded",p:"Entertain"},{t:"Static",i:"Sold out and restock announcement",p:"Sell"},{t:"Carousel",i:"Body type styling guide — something for everyone",p:"Inclusive"},{t:"Reel",i:"Before the brand: your story as a fashion entrepreneur",p:"Relate"},{t:"Static",i:"Flat lay of new arrivals with shop link",p:"Sell"}],
    caps:["New in: [item name]. Here is how to style it","Style is not about price tags. It is about knowing what works for you","She ordered this on a Tuesday. By Friday she had [X] compliments","Limited stock. Unlimited style. [Item] is back — but not for long"],
    pillars:[{n:"Style and Inspire",d:"Outfit ideas, lookbooks, trend content"},{n:"Showcase",d:"Product features, new arrivals, collection stories"},{n:"Community",d:"Customer features, reposts, style challenges"},{n:"Behind the brand",d:"Your process, sourcing, business journey"},{n:"Sell",d:"Limited drops, promotions, restocks"}],
    checklist:["Register your fashion brand name","Set up an online store (Shopify or Paystack)","Create sizing guides","Set up your returns policy","Get professional product photography","Set up Instagram Shopping","Register for tax collection","Find a reliable shipping partner","Build a supplier and manufacturer relationship","Create a lookbook for each collection"],
    hints:{ig:"Instagram > Profile > Insights > tap any post > Reach, Saves, Shares",tt:"TikTok > tap your video > three dots > Analytics",li:"LinkedIn > tap a post > View analytics"} },
  { id:"health", label:"Health & Fitness", accent:"#38bdf8",
    exp:["Equipment & Gear","Supplements and Products","Studio or Gym Rent","Staff and Trainers","App and Platform Fees","Marketing","Certifications","Insurance"],
    inc:["Personal Training","Group Classes","Online Programs","Supplements and Products","Memberships","Consultations"],
    ideas:[{t:"Reel",i:"Quick 5-minute workout anyone can do at home",p:"Educate"},{t:"Carousel",i:"Client transformation — their story in their words",p:"Social proof"},{t:"Reel",i:"What I eat in a day as a fitness professional",p:"Relate"},{t:"Carousel",i:"Debunking the top 5 fitness myths",p:"Educate"},{t:"Static",i:"New programme launch with limited spots",p:"Sell"},{t:"Reel",i:"A day in the life from morning session to evening client",p:"Behind the scenes"},{t:"Carousel",i:"Meal prep guide for the week — simple and realistic",p:"Educate"},{t:"Reel",i:"Trending exercise — your take on form and safety",p:"Thought leadership"},{t:"Static",i:"Motivational quote and your personal take on it",p:"Inspire"},{t:"Carousel",i:"A beginner guide to starting their fitness journey",p:"Educate"},{t:"Reel",i:"Behind the scenes of a client session",p:"Showcase"},{t:"Carousel",i:"Why most people fail at fitness goals — honest breakdown",p:"Educate"}],
    caps:["You do not need [X hours] at the gym. You need consistency","[Client] started [X months] ago unable to [milestone]. Today: [achievement]","Hot take: [fitness opinion]. Agree or disagree?","New programme dropping [date]. [X] spots only"],
    pillars:[{n:"Educate",d:"Workouts, nutrition, myth-busting"},{n:"Transform",d:"Client journeys, before and afters, real results"},{n:"Inspire",d:"Motivation, mindset, mental fitness"},{n:"Relate",d:"Your journey, your struggles, your real life"},{n:"Sell",d:"Programmes, memberships, consultations"}],
    checklist:["Get your fitness certification","Register your business","Get professional liability insurance","Set up a booking system","Create your service packages and pricing","Set up a payment method","Create a client intake and health form","Build your online presence","Create a free lead magnet such as a workout PDF","Set up client progress tracking"],
    hints:{ig:"Instagram > Profile > Insights > tap any post > Reach, Saves, Shares",tt:"TikTok > tap your video > three dots > Analytics",li:"LinkedIn > tap a post > View analytics"} },
  { id:"realestate", label:"Real Estate", accent:"#a78bfa",
    exp:["Marketing and Staging","Photography and Video","Admin and Legal","Commission","Travel","Ads","CRM and Tools","Professional Development"],
    inc:["Sales Commission","Rental Income","Property Management","Consulting Fees","Referral Fees","Leasing Fees"],
    ideas:[{t:"Reel",i:"Property tour — walk through like you are the buyer",p:"Showcase"},{t:"Carousel",i:"5 things to look for when buying a home",p:"Educate"},{t:"Static",i:"New listing announcement with beautiful photography",p:"Sell"},{t:"Reel",i:"Just sold — the story behind this property",p:"Social proof"},{t:"Carousel",i:"Market update — what is happening this month",p:"Educate"},{t:"Reel",i:"Day in the life of a real estate agent",p:"Relate"},{t:"Carousel",i:"First-time buyer checklist step by step",p:"Educate"},{t:"Static",i:"Client testimonial after closing",p:"Social proof"},{t:"Reel",i:"Neighbourhood spotlight — why this area is worth buying in",p:"Educate"},{t:"Carousel",i:"Rent vs buy — honest breakdown for your market",p:"Thought leadership"},{t:"Static",i:"Price reduced and open house this weekend",p:"Sell"},{t:"Reel",i:"Before and after — staged vs unstaged property",p:"Educate"}],
    caps:["Just listed: [property details]. The details that make this one special","Most first-time buyers make this mistake — here is what we wish someone told us","The market in [area] right now — here is what it means","[Client] found their dream home in [X] weeks. Here is how we did it"],
    pillars:[{n:"Listings",d:"Property showcases, tours, open houses"},{n:"Educate",d:"Buying and selling guides, market insights"},{n:"Social proof",d:"Client stories, sold announcements"},{n:"Local expertise",d:"Neighbourhood content, market updates"},{n:"Relate",d:"Your agent story, behind the scenes"}],
    checklist:["Get your real estate licence","Join a brokerage","Set up your CRM","Create a professional headshot and bio","Build your listing presentation","Set up automated email follow-ups","Create a Google Business Profile","Join local property groups online","Set up a referral system","Create a market report template"],
    hints:{ig:"Instagram > Profile > Insights > tap any post > Reach, Saves, Shares",tt:"TikTok > tap your video > three dots > Analytics",li:"LinkedIn > tap a post > View analytics"} },
  { id:"education", label:"Education & Coaching", accent:"#fbbf24",
    exp:["Course Platform Fees","Marketing and Ads","Tools and Software","Content Creation","Mentors and Coaches","Community Platform","Design and Branding","Admin"],
    inc:["Course Sales","1:1 Coaching","Group Programmes","Memberships","Workshops","Speaking Fees"],
    ideas:[{t:"Carousel",i:"The number one mistake my students make and how to fix it",p:"Educate"},{t:"Reel",i:"Student success spotlight — their result in 60 seconds",p:"Social proof"},{t:"Carousel",i:"Free lesson: the core framework I teach all my students",p:"Educate"},{t:"Static",i:"Enrolment is open — what is inside the programme",p:"Sell"},{t:"Reel",i:"My story — why I became a coach or educator",p:"Relate"},{t:"Carousel",i:"5 questions to ask before hiring a coach",p:"Educate"},{t:"Reel",i:"Behind the scenes of creating a course module",p:"Behind the scenes"},{t:"Carousel",i:"Free resource — downloadable guide or checklist",p:"Lead magnet"},{t:"Static",i:"Community win — celebrate a student milestone",p:"Community"},{t:"Reel",i:"Live Q&A replay highlight — best question of the week",p:"Engage"},{t:"Carousel",i:"The roadmap to [desired outcome] step by step",p:"Educate"},{t:"Reel",i:"Hot take on a common belief in your coaching niche",p:"Thought leadership"}],
    caps:["[Student] came to me struggling with [problem]. [X weeks] later: [result]","I am opening [X] spots for [programme]. Here is exactly who it is for","Free guide dropping this week: [topic]. Comment [word] and I will send it","Unpopular opinion: [belief in your niche]. Here is why most people have it backwards"],
    pillars:[{n:"Free value",d:"Tips, lessons, frameworks — give your best away"},{n:"Student wins",d:"Transformations, testimonials, celebrations"},{n:"Your story",d:"Why you teach, your journey, your credibility"},{n:"Sell",d:"Programme launches, enrolment opens, waitlists"},{n:"Thought leadership",d:"Hot takes, contrarian views, your unique lens"}],
    checklist:["Get certified in your coaching niche","Register your business","Choose your course platform such as Teachable or Kajabi","Create your signature framework","Set up a payment processor","Build your email list from day one","Create a free lead magnet","Set up a community on WhatsApp, Discord, or Circle","Create your first course outline","Get your first 3 testimonials"],
    hints:{ig:"Instagram > Profile > Insights > tap any post > Reach, Saves, Shares",tt:"TikTok > tap your video > three dots > Analytics",li:"LinkedIn > tap a post > View analytics"} },
];

const PLATS=["Instagram","TikTok","LinkedIn","Facebook","Twitter/X","YouTube"];
const STAT=["Idea","In Progress","Scheduled","Posted"];
const SC={"Idea":"#94a3b8","In Progress":"#f59e0b","Scheduled":"#6366f1","Posted":"#16a34a"};
const TABS=["Home","Brand","Content","Finance","Guide"];
const FTABS=["Overview","Transactions","Customers","Vendors","Calculator","Invoice"];

function uid(){return Math.random().toString(36).slice(2);}
function money(n){return "$"+Number(n||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});}
function pct(a,b){return b===0?0:Math.min(Math.round((a/b)*100),100);}

function Auth({onAuth}){
  const [mode,setMode]=useState("login");
  const [email,setEmail]=useState("");
  const [pw,setPw]=useState("");
  const [busy,setBusy]=useState(false);
  const [err,setErr]=useState("");
  const [msg,setMsg]=useState("");
  async function go(){
    setErr("");setMsg("");setBusy(true);
    try{
      if(mode==="signup"){const{error:e}=await sb.auth.signUp({email,password:pw});if(e)throw e;setMsg("Account created! Check your email to confirm, then log in.");setMode("login");}
      else{const{data,error:e}=await sb.auth.signInWithPassword({email,password:pw});if(e)throw e;onAuth(data.user);}
    }catch(e){setErr(e.message);}
    setBusy(false);
  }
  async function reset(){if(!email){setErr("Enter your email first.");return;}setBusy(true);const{error:e}=await sb.auth.resetPasswordForEmail(email);if(e)setErr(e.message);else setMsg("Password reset email sent.");setBusy(false);}
  const fi={background:"#f9fafb",border:"1px solid #e5e7eb",color:"#111",borderRadius:10,padding:"11px 14px",fontFamily:"'DM Sans',sans-serif",fontSize:14,width:"100%",outline:"none"};
  return(
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f9fafb",padding:24,fontFamily:"'DM Sans',sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');*{box-sizing:border-box;margin:0;padding:0;}`}</style>
      <div style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:20,padding:40,width:"100%",maxWidth:400,boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
        <div style={{textAlign:"center",marginBottom:32}}>
          <div style={{width:48,height:48,background:"#111",borderRadius:14,margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 8.5L11 2l9 6.5V19a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 012 19V8.5z" stroke="#fff" strokeWidth="1.4" fill="none"/><path d="M8 20.5V13h6v7.5" stroke="#fff" strokeWidth="1.4"/></svg></div>
          <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:24,fontWeight:700,color:"#111",marginBottom:4}}>BizKit Pro</div>
          <div style={{fontSize:13,color:"#6b7280"}}>Your complete small business OS</div>
        </div>
        <div style={{display:"flex",background:"#f3f4f6",borderRadius:10,padding:3,marginBottom:24,gap:3}}>
          {["login","signup"].map(m=><button key={m} onClick={()=>setMode(m)} style={{flex:1,padding:"8px 0",borderRadius:8,border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:13,background:mode===m?"#fff":"transparent",color:mode===m?"#111":"#9ca3af",transition:"all 0.15s"}}>{m==="login"?"Log In":"Sign Up"}</button>)}
        </div>
        {err&&<div style={{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:10,padding:"10px 14px",fontSize:13,color:"#dc2626",marginBottom:16,fontWeight:500}}>{err}</div>}
        {msg&&<div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"10px 14px",fontSize:13,color:"#166534",marginBottom:16,fontWeight:500}}>{msg}</div>}
        <div style={{display:"grid",gap:14}}>
          <div><label style={{fontSize:11,fontWeight:700,color:"#374151",textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6}}>Email</label><input type="email" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&go()} placeholder="you@example.com" style={fi}/></div>
          <div><label style={{fontSize:11,fontWeight:700,color:"#374151",textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6}}>Password</label><input type="password" value={pw} onChange={e=>setPw(e.target.value)} onKeyDown={e=>e.key==="Enter"&&go()} placeholder="minimum 6 characters" style={fi}/></div>
          <button onClick={go} disabled={busy} style={{padding:"12px 24px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:14,background:G,color:"#fff",opacity:busy?0.7:1}}>{busy?"Please wait...":mode==="login"?"Log In":"Create Account"}</button>
          {mode==="login"&&<button onClick={reset} style={{background:"none",border:"none",color:"#9ca3af",fontSize:12,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textDecoration:"underline"}}>Forgot your password?</button>}
        </div>
        <div style={{marginTop:24,padding:14,background:"#f9fafb",borderRadius:10,textAlign:"center"}}><div style={{fontSize:12,color:"#6b7280",lineHeight:1.6}}>Need help? Email us at<br/><a href="mailto:support@bizkitpro.app" style={{color:G,fontWeight:600,textDecoration:"none"}}>support@bizkitpro.app</a></div></div>
      </div>
    </div>
  );
}

function NicheSelect({onSelect}){
  const [hov,setHov]=useState(null);
  return(
    <div style={{minHeight:"100vh",background:"#f9fafb",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",fontFamily:"'DM Sans',sans-serif"}}>
      <div style={{maxWidth:720,width:"100%",textAlign:"center",marginBottom:36}}>
        <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:34,fontWeight:700,color:"#111",marginBottom:10}}>What kind of business do you run?</div>
        <div style={{fontSize:15,color:"#6b7280",lineHeight:1.6}}>BizKit Pro personalises your content ideas, financial categories, and setup checklist to your specific industry.</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(158px,1fr))",gap:12,maxWidth:720,width:"100%"}}>
        {NICHES.map(n=>(
          <div key={n.id} onClick={()=>onSelect(n)} onMouseEnter={()=>setHov(n.id)} onMouseLeave={()=>setHov(null)}
            style={{background:"#fff",border:`1.5px solid ${hov===n.id?"#111":"#e5e7eb"}`,borderRadius:14,padding:"22px 16px",cursor:"pointer",transition:"all 0.15s",transform:hov===n.id?"translateY(-2px)":"none",boxShadow:hov===n.id?"0 4px 14px rgba(0,0,0,0.09)":"0 1px 2px rgba(0,0,0,0.04)",textAlign:"center"}}>
            <div style={{width:36,height:36,background:hov===n.id?"#111":"#f3f4f6",borderRadius:10,margin:"0 auto 12px",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.15s"}}><div style={{width:14,height:14,borderRadius:"50%",background:hov===n.id?"#fff":n.accent}}/></div>
            <div style={{fontSize:13,fontWeight:600,color:hov===n.id?"#111":"#374151",lineHeight:1.3}}>{n.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandSetup({niche,onSave}){
  const [form,setForm]=useState({name:"",tagline:"",primaryColor:G,audience:""});
  const ready=form.name.trim().length>0;
  const fi={background:"#f9fafb",border:"1px solid #e5e7eb",color:"#111",borderRadius:10,padding:"11px 14px",fontFamily:"'DM Sans',sans-serif",fontSize:14,width:"100%",outline:"none"};
  return(
    <div style={{minHeight:"100vh",background:"#f9fafb",display:"flex",alignItems:"center",justifyContent:"center",padding:24,fontFamily:"'DM Sans',sans-serif"}}>
      <div style={{background:"#fff",border:"1px solid #e5e7eb",borderRadius:20,padding:40,width:"100%",maxWidth:500,boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
        <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:24,color:"#111",marginBottom:4,fontWeight:700}}>Set up your brand</div>
        <div style={{fontSize:13,color:"#6b7280",marginBottom:28}}>Personalise your BizKit Pro experience — niche: <strong style={{color:"#111"}}>{niche.label}</strong></div>
        <div style={{display:"grid",gap:16}}>
          {[["Business Name","name","e.g. Glow Studio, FreshFarm Co."],["Tagline (optional)","tagline","e.g. Helping you glow inside and out"],["Who do you serve?","audience","e.g. Women aged 25-40 who want natural beauty results"]].map(([l,k,ph])=>(
            <div key={k}><label style={{fontSize:11,fontWeight:700,color:"#374151",textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6}}>{l}</label><input value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} placeholder={ph} style={fi}/></div>
          ))}
          <div>
            <label style={{fontSize:11,fontWeight:700,color:"#374151",textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6}}>Brand Colour</label>
            <div style={{display:"flex",gap:12,alignItems:"center"}}><input type="color" value={form.primaryColor} onChange={e=>setForm({...form,primaryColor:e.target.value})} style={{width:52,height:44,border:"1px solid #e5e7eb",borderRadius:10,cursor:"pointer",padding:4}}/><div style={{fontSize:13,color:"#6b7280",lineHeight:1.5}}>Your brand colour themes the entire app —<br/>buttons, accents, highlights</div></div>
          </div>
          {form.name&&<div style={{background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:12,padding:16}}><div style={{fontSize:10,color:"#9ca3af",marginBottom:8,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em"}}>Preview</div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,fontWeight:700,color:"#111"}}>{form.name}</div>{form.tagline&&<div style={{fontSize:13,color:"#6b7280",marginTop:2}}>{form.tagline}</div>}<div style={{display:"inline-block",marginTop:10,padding:"4px 12px",background:form.primaryColor,color:"#fff",borderRadius:20,fontSize:11,fontWeight:700}}>{niche.label}</div></div>}
          <button onClick={()=>{if(ready)onSave(form);}} style={{padding:"13px 24px",borderRadius:10,border:"none",cursor:ready?"pointer":"not-allowed",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:14,background:ready?"#111":"#e5e7eb",color:ready?"#fff":"#9ca3af",transition:"all 0.15s",marginTop:4}}>{ready?"Enter BizKit Pro →":"Enter your business name to continue"}</button>
        </div>
      </div>
    </div>
  );
}

export default function App(){
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const [profile,setProfile]=useState(null);
  const [niche,setNiche]=useState(null);
  const [tab,setTab]=useState("Home");
  const [ftab,setFtab]=useState("Overview");
  const [posts,setPosts]=useState([]);
  const [txs,setTxs]=useState([]);
  const [custs,setCusts]=useState([]);
  const [vendors,setVendors]=useState([]);
  const [analytics,setAnalytics]=useState([]);
  const [checks,setChecks]=useState({});
  const [custom,setCustom]=useState([]);
  const [newItem,setNewItem]=useState("");
  const [goal,setGoal]=useState(0);
  const [goalSet,setGoalSet]=useState(false);
  const [goalInput,setGoalInput]=useState("");
  const [fMonth,setFMonth]=useState(new Date().toISOString().slice(0,7));
  const [fStatus,setFStatus]=useState("All");
  const [ideaF,setIdeaF]=useState("All");
  const [margin,setMargin]=useState({cost:"",sell:"",qty:1});
  const [inv,setInv]=useState({clientName:"",clientEmail:"",service:"",amount:"",date:"",notes:""});
  const [invShow,setInvShow]=useState(false);
  const [showPF,setShowPF]=useState(false);
  const [showTF,setShowTF]=useState(false);
  const [showCF,setShowCF]=useState(false);
  const [showVF,setShowVF]=useState(false);
  const [showAF,setShowAF]=useState(false);
  const [np,setNp]=useState({date:"",platform:"Instagram",type:"Reel",caption:"",hashtags:"",status:"Idea",notes:""});
  const [nt,setNt]=useState({date:"",type:"Income",category:"",description:"",amount:""});
  const [nc,setNc]=useState({name:"",phone:"",email:"",address:"",notes:"",spent:"",lastBuy:""});
  const [nv,setNv]=useState({name:"",contact:"",phone:"",email:"",supplies:"",terms:"",outstanding:""});
  const [na,setNa]=useState({date:"",platform:"Instagram",caption:"",views:"",reach:"",saves:"",shares:"",comments:"",likes:""});

  useEffect(()=>{
    sb.auth.getSession().then(({data:{session}})=>{setUser(session?.user??null);setLoading(false);});
    const{data:{subscription}}=sb.auth.onAuthStateChange((_,session)=>{setUser(session?.user??null);});
    return()=>subscription.unsubscribe();
  },[]);

  useEffect(()=>{if(user)load();},[user]);

  async function load(){
    const uid=user.id;
    const{data:p}=await sb.from("profiles").select("*").eq("id",uid).single();
    if(p){setProfile(p);setGoal(p.monthly_goal||0);setGoalSet(p.goal_set||false);const n=NICHES.find(n=>n.id===p.niche_id);if(n){setNiche(n);setNt(t=>({...t,category:n.inc[0]}));}}
    const{data:po}=await sb.from("posts").select("*").eq("user_id",uid).order("created_at",{ascending:false});if(po)setPosts(po);
    const{data:tx}=await sb.from("transactions").select("*").eq("user_id",uid).order("created_at",{ascending:false});if(tx)setTxs(tx);
    const{data:cu}=await sb.from("customers").select("*").eq("user_id",uid).order("created_at",{ascending:false});if(cu)setCusts(cu);
    const{data:ve}=await sb.from("vendors").select("*").eq("user_id",uid).order("created_at",{ascending:false});if(ve)setVendors(ve);
    const{data:an}=await sb.from("analytics").select("*").eq("user_id",uid).order("created_at",{ascending:false});if(an)setAnalytics(an);
    const{data:ch}=await sb.from("checklist_items").select("*").eq("user_id",uid);
    if(ch){const st={};const cu2=[];ch.forEach(c=>{st[c.item_key]=c.done;if(c.is_custom)cu2.push(c.label);});setChecks(st);setCustom(cu2);}
  }

  async function saveProf(nicheId,bd){await sb.from("profiles").upsert({id:user.id,email:user.email,niche_id:nicheId,business_name:bd.name,tagline:bd.tagline,primary_color:bd.primaryColor,audience:bd.audience,monthly_goal:0,goal_set:false});}
  async function addPost(){if(!np.date||!np.caption)return;const{data}=await sb.from("posts").insert({...np,user_id:user.id}).select().single();if(data)setPosts([data,...posts]);setNp({date:"",platform:"Instagram",type:"Reel",caption:"",hashtags:"",status:"Idea",notes:""});setShowPF(false);}
  async function delPost(id){await sb.from("posts").delete().eq("id",id);setPosts(posts.filter(p=>p.id!==id));}
  async function updStat(id,status){await sb.from("posts").update({status}).eq("id",id);setPosts(posts.map(p=>p.id===id?{...p,status}:p));}
  async function addTx(){if(!nt.date||!nt.description||!nt.amount)return;const{data}=await sb.from("transactions").insert({...nt,amount:Number(nt.amount),user_id:user.id}).select().single();if(data)setTxs([data,...txs]);setNt({date:"",type:"Income",category:niche.inc[0],description:"",amount:""});setShowTF(false);}
  async function delTx(id){await sb.from("transactions").delete().eq("id",id);setTxs(txs.filter(t=>t.id!==id));}
  async function addCust(){if(!nc.name)return;const{data}=await sb.from("customers").insert({name:nc.name,phone:nc.phone,email:nc.email,address:nc.address,notes:nc.notes,total_spent:Number(nc.spent)||0,last_purchase:nc.lastBuy,user_id:user.id}).select().single();if(data)setCusts([data,...custs]);setNc({name:"",phone:"",email:"",address:"",notes:"",spent:"",lastBuy:""});setShowCF(false);}
  async function delCust(id){await sb.from("customers").delete().eq("id",id);setCusts(custs.filter(c=>c.id!==id));}
  async function addVendor(){if(!nv.name)return;const{data}=await sb.from("vendors").insert({name:nv.name,contact:nv.contact,phone:nv.phone,email:nv.email,supplies:nv.supplies,payment_terms:nv.terms,outstanding:Number(nv.outstanding)||0,user_id:user.id}).select().single();if(data)setVendors([data,...vendors]);setNv({name:"",contact:"",phone:"",email:"",supplies:"",terms:"",outstanding:""});setShowVF(false);}
  async function delVendor(id){await sb.from("vendors").delete().eq("id",id);setVendors(vendors.filter(v=>v.id!==id));}
  async function addAnalytic(){if(!na.caption)return;const{data}=await sb.from("analytics").insert({...na,views:Number(na.views)||0,reach:Number(na.reach)||0,saves:Number(na.saves)||0,shares:Number(na.shares)||0,comments:Number(na.comments)||0,likes:Number(na.likes)||0,user_id:user.id}).select().single();if(data)setAnalytics([data,...analytics]);setNa({date:"",platform:"Instagram",caption:"",views:"",reach:"",saves:"",shares:"",comments:"",likes:""});setShowAF(false);}
  async function delAnalytic(id){await sb.from("analytics").delete().eq("id",id);setAnalytics(analytics.filter(a=>a.id!==id));}

  async function toggleCheck(key,isCustom,label){
    const val=!checks[key];setChecks(s=>({...s,[key]:val}));
    const{data:ex}=await sb.from("checklist_items").select("id").eq("user_id",user.id).eq("item_key",key).single();
    if(ex)await sb.from("checklist_items").update({done:val}).eq("id",ex.id);
    else await sb.from("checklist_items").insert({user_id:user.id,item_key:key,label,done:val,is_custom:isCustom});
  }
  async function addCustom(){if(!newItem.trim())return;const key=`cus_${uid()}`;await sb.from("checklist_items").insert({user_id:user.id,item_key:key,label:newItem.trim(),done:false,is_custom:true});setCustom([...custom,newItem.trim()]);setChecks(s=>({...s,[key]:false}));setNewItem("");}
  async function removeCustom(label){await sb.from("checklist_items").delete().eq("user_id",user.id).eq("label",label).eq("is_custom",true);setCustom(custom.filter(l=>l!==label));}
  async function signOut(){await sb.auth.signOut();setUser(null);setProfile(null);setNiche(null);setPosts([]);setTxs([]);setCusts([]);setVendors([]);setAnalytics([]);setChecks({});setCustom([]);}

  if(loading)return(<div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f9fafb",fontFamily:"'DM Sans',sans-serif"}}><div style={{fontSize:14,color:"#6b7280"}}>Loading...</div></div>);
  if(!user)return<Auth onAuth={u=>setUser(u)}/>;
  if(!niche)return<NicheSelect onSelect={n=>setNiche(n)}/>;
  if(!profile?.business_name)return<BrandSetup niche={niche} onSave={async bd=>{setProfile({...profile,...bd,niche_id:niche.id});await saveProf(niche.id,bd);}}/>;

  const AC=profile.primary_color||G;
  const income=txs.filter(t=>t.type==="Income").reduce((a,b)=>a+Number(b.amount),0);
  const expense=txs.filter(t=>t.type==="Expense").reduce((a,b)=>a+Number(b.amount),0);
  const profit=income-expense;
  const fposts=posts.filter(p=>(!fMonth||p.date?.startsWith(fMonth))&&(fStatus==="All"||p.status===fStatus));
  const ftxs=txs.filter(t=>!fMonth||t.date?.startsWith(fMonth));
  const pillars=[...new Set(niche.ideas.map(i=>i.p))];
  const ideas=ideaF==="All"?niche.ideas:niche.ideas.filter(i=>i.p===ideaF);
  const allChecks=[...niche.checklist.map((l,i)=>({key:`pre_${i}`,label:l,custom:false})),...custom.map((l,i)=>({key:`cus_${i}`,label:l,custom:true}))];
  const checkDone=allChecks.filter(c=>checks[c.key]).length;
  const costN=parseFloat(margin.cost)||0,sellN=parseFloat(margin.sell)||0;
  const mpct=sellN>0?((sellN-costN)/sellN*100).toFixed(1):0;
  const ppu=sellN-costN,tpro=ppu*(parseInt(margin.qty)||1);
  const mkp=costN>0?((sellN-costN)/costN*100).toFixed(1):0;

  const card={background:"#fff",border:"1px solid #e5e7eb",borderRadius:16,padding:24};
  const lbl={fontSize:11,fontWeight:700,color:"#374151",textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:6};
  const inp={background:"#f9fafb",border:"1px solid #e5e7eb",color:"#111",borderRadius:10,padding:"10px 14px",fontFamily:"'DM Sans',sans-serif",fontSize:14,width:"100%",outline:"none"};
  const PBtn={padding:"10px 20px",borderRadius:10,border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:700,fontSize:14,background:"#111",color:"#fff"};
  const GBtn={padding:"9px 16px",borderRadius:10,border:"1px solid #e5e7eb",background:"#fff",color:"#374151",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:13};
  const DBtn={padding:"5px 10px",borderRadius:7,border:"1px solid #fecaca",background:"#fef2f2",color:"#dc2626",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontSize:11,fontWeight:600};
  const ST={fontFamily:"'Playfair Display',Georgia,serif",fontSize:24,fontWeight:700,color:"#111",marginBottom:4};
  const SS={fontSize:13,color:"#6b7280",marginBottom:24};

  return(
    <div style={{minHeight:"100vh",background:"#f9fafb",fontFamily:"'DM Sans',sans-serif",color:"#111"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-thumb{background:#d1d5db;border-radius:4px;}
        input,select,textarea{background:#f9fafb;border:1px solid #e5e7eb;color:#111;border-radius:10px;padding:10px 14px;font-family:'DM Sans',sans-serif;font-size:14px;width:100%;outline:none;transition:border 0.15s;}
        input:focus,select:focus,textarea:focus{border-color:#111;}
        textarea{resize:vertical;min-height:80px;}
        select option{background:#fff;color:#111;}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
        .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;}
        .g4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;}
        @media(max-width:640px){.g2,.g3,.g4{grid-template-columns:1fr;}}
        .mo{position:fixed;inset:0;background:rgba(0,0,0,0.35);display:flex;align-items:center;justify-content:center;z-index:100;padding:20px;backdrop-filter:blur(4px);}
        .md{background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:28px;width:100%;max-width:520px;max-height:90vh;overflow-y:auto;box-shadow:0 8px 30px rgba(0,0,0,0.12);}
        .row{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px;margin-bottom:10px;transition:border-color 0.15s;}
        .row:hover{border-color:#374151;}
        .sc{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:18px;}
        .idea{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px;cursor:pointer;transition:all 0.15s;}
        .idea:hover{border-color:#111;box-shadow:0 2px 8px rgba(0,0,0,0.06);transform:translateY(-1px);}
        .tag{background:#f3f4f6;border:1px solid #e5e7eb;padding:3px 10px;border-radius:6px;font-size:11px;color:#374151;display:inline-block;font-weight:600;}
        .nb{padding:11px 16px;background:transparent;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;white-space:nowrap;transition:all 0.15s;}
        .pill{padding:6px 14px;border-radius:20px;border:1px solid #e5e7eb;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;background:#fff;color:#6b7280;transition:all 0.15s;}
        .fsb{padding:8px 14px;border-radius:8px;border:1px solid #e5e7eb;background:#fff;color:#6b7280;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;transition:all 0.15s;}
        .gsec{background:#fff;border-left:3px solid ${AC};border-radius:0 12px 12px 0;padding:20px 24px;margin-bottom:14px;}
      `}</style>

      {/* HEADER */}
      <div style={{background:"#fff",borderBottom:"1px solid #e5e7eb",padding:"0 24px",position:"sticky",top:0,zIndex:50}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:56}}>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <div style={{width:30,height:30,background:"#111",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1 5.5L7.5 1 14 5.5V13a1 1 0 01-1 1H2a1 1 0 01-1-1V5.5z" stroke="#fff" strokeWidth="1.2" fill="none"/><path d="M5 14V9h5v5" stroke="#fff" strokeWidth="1.2"/></svg></div>
            <span style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:16,fontWeight:700,color:"#111"}}>BizKit Pro</span>
            <div style={{width:1,height:14,background:"#e5e7eb"}}/>
            <span style={{fontSize:13,fontWeight:600,color:"#374151"}}>{profile.business_name}</span>
          </div>
          <button onClick={signOut} style={{background:"none",border:"1px solid #e5e7eb",borderRadius:8,padding:"5px 12px",cursor:"pointer",fontSize:12,color:"#6b7280",fontFamily:"'DM Sans',sans-serif",fontWeight:500}}>Sign out</button>
        </div>
        <div style={{maxWidth:1000,margin:"0 auto",display:"flex",overflowX:"auto",gap:0}}>
          {TABS.map(t=><button key={t} className="nb" onClick={()=>setTab(t)} style={{fontWeight:tab===t?700:400,color:tab===t?"#111":"#6b7280",borderBottom:tab===t?"2px solid #111":"2px solid transparent"}}>{t}</button>)}
        </div>
      </div>

      <div style={{maxWidth:1000,margin:"0 auto",padding:"28px 24px"}}>

        {/* HOME */}
        {tab==="Home"&&(
          <div>
            <div style={{...card,marginBottom:24,borderTop:`3px solid ${AC}`}}>
              <div style={{display:"flex",alignItems:"center",gap:18,flexWrap:"wrap"}}>
                <div style={{width:48,height:48,borderRadius:12,background:"#111",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 20V9.5z" stroke="#fff" strokeWidth="1.5" fill="none"/><path d="M9 21.5V14h6v7.5" stroke="#fff" strokeWidth="1.5"/></svg></div>
                <div style={{flex:1}}>
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:26,fontWeight:700,color:"#111",lineHeight:1.1,marginBottom:3}}>{profile.business_name}</div>
                  {profile.tagline&&<div style={{fontSize:14,color:"#6b7280"}}>{profile.tagline}</div>}
                  <div style={{marginTop:8,display:"inline-block",padding:"3px 10px",background:AC,color:"#fff",borderRadius:20,fontSize:11,fontWeight:700}}>{niche.label}</div>
                </div>
                {goalSet&&(
                  <div style={{textAlign:"right",background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:12,padding:"12px 16px"}}>
                    <div style={{fontSize:10,color:"#6b7280",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4}}>Monthly Goal</div>
                    <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,color:income>=goal?G:AC,fontWeight:700}}>{pct(income,goal)}%</div>
                    <div style={{width:110,height:4,background:"#f3f4f6",borderRadius:2,marginTop:8,overflow:"hidden"}}><div style={{height:"100%",width:pct(income,goal)+"%",background:income>=goal?G:AC,borderRadius:2,transition:"width 0.4s"}}/></div>
                    <div style={{fontSize:11,color:"#6b7280",marginTop:4}}>{money(income)} of {money(goal)}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="g4" style={{marginBottom:24}}>
              {[{l:"Total Income",v:money(income),c:G},{l:"Total Expenses",v:money(expense),c:"#dc2626"},{l:"Net Profit",v:money(profit),c:profit>=0?G:"#dc2626"},{l:"Content Posts",v:posts.length,c:AC,s:`${posts.filter(p=>p.status==="Posted").length} posted`}].map(item=>(
                <div key={item.l} className="sc" style={{borderTop:`3px solid ${item.c}`}}>
                  <div style={{fontSize:10,color:item.c,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8}}>{item.l}</div>
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:22,fontWeight:700,color:item.c}}>{item.v}</div>
                  {item.s&&<div style={{fontSize:11,color:"#9ca3af",marginTop:4}}>{item.s}</div>}
                </div>
              ))}
            </div>
            <div className="g2" style={{marginBottom:24}}>
              <div style={card}>
                <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:16,fontWeight:700,color:"#111",marginBottom:16}}>Content Pipeline</div>
                {STAT.map(s=>{const c=posts.filter(p=>p.status===s).length;const p=posts.length?Math.round(c/posts.length*100):0;return(<div key={s} style={{marginBottom:14}}><div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:5}}><span style={{color:SC[s],fontWeight:700}}>{s}</span><span style={{color:"#9ca3af"}}>{c}</span></div><div style={{height:4,background:"#f3f4f6",borderRadius:2,overflow:"hidden"}}><div style={{height:"100%",width:p+"%",background:SC[s],borderRadius:2}}/></div></div>);})}
                {posts.length===0&&<div style={{fontSize:12,color:"#9ca3af"}}>No posts yet — head to Content to start planning</div>}
              </div>
              <div style={card}>
                <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:16,fontWeight:700,color:"#111",marginBottom:16}}>Content Pillars</div>
                {niche.pillars.map(p=>(<div key={p.n} style={{display:"flex",gap:10,padding:"9px 0",borderBottom:"1px solid #f9fafb"}}><div style={{width:6,height:6,borderRadius:"50%",background:AC,marginTop:6,flexShrink:0}}/><div><div style={{fontSize:13,fontWeight:700,color:"#111",marginBottom:1}}>{p.n}</div><div style={{fontSize:12,color:"#6b7280"}}>{p.d}</div></div></div>))}
              </div>
            </div>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <button style={PBtn} onClick={()=>{setTab("Content");setShowPF(true);}}>+ Add Content</button>
              <button style={GBtn} onClick={()=>{setTab("Finance");setFtab("Transactions");setShowTF(true);}}>+ Add Transaction</button>
              <button style={GBtn} onClick={()=>{setTab("Finance");setFtab("Calculator");}}>Profit Calculator</button>
              <button style={GBtn} onClick={()=>setTab("Guide")}>Read the Guide</button>
            </div>
          </div>
        )}

        {/* BRAND */}
        {tab==="Brand"&&(
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24,flexWrap:"wrap",gap:12}}>
              <div><div style={ST}>Brand Hub</div><div style={SS}>Your identity, pillars, monthly goal, and setup checklist</div></div>
              <button style={GBtn} onClick={()=>setProfile(p=>({...p,business_name:""}))}>Edit Brand</button>
            </div>
            <div className="g2" style={{marginBottom:20}}>
              <div style={card}>
                <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:16,fontWeight:700,color:"#111",marginBottom:16}}>Business Identity</div>
                {[["Business Name",profile.business_name],["Tagline",profile.tagline||"—"],["Niche",niche.label],["Audience",profile.audience||"—"]].map(([l,v])=>(<div key={l} style={{marginBottom:14}}><label style={lbl}>{l}</label><div style={{fontSize:14,color:"#111",fontWeight:500}}>{v}</div></div>))}
                <div><label style={lbl}>Brand Colour</label><div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:28,height:28,borderRadius:8,background:AC,border:"1px solid #e5e7eb"}}/><span style={{fontSize:13,color:"#374151",fontWeight:600}}>{AC}</span></div></div>
              </div>
              <div style={{display:"grid",gap:16}}>
                <div style={card}>
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:15,fontWeight:700,color:"#111",marginBottom:12}}>Monthly Income Goal</div>
                  {!goalSet?(
                    <div><div style={{fontSize:13,color:"#6b7280",marginBottom:10,lineHeight:1.5}}>Set a monthly income target and track your progress across the app in real time.</div><div style={{display:"flex",gap:8}}><input type="number" value={goalInput} onChange={e=>setGoalInput(e.target.value)} placeholder="e.g. 5000" style={{flex:1}}/><button style={PBtn} onClick={async()=>{if(goalInput){setGoal(Number(goalInput));setGoalSet(true);setGoalInput("");await sb.from("profiles").update({monthly_goal:Number(goalInput),goal_set:true}).eq("id",user.id);}}}>Set</button></div></div>
                  ):(
                    <div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:24,color:G,marginBottom:8,fontWeight:700}}>{money(goal)}</div><div style={{height:6,background:"#f3f4f6",borderRadius:3,marginBottom:8,overflow:"hidden"}}><div style={{height:"100%",width:pct(income,goal)+"%",background:income>=goal?G:AC,borderRadius:3,transition:"width 0.5s"}}/></div><div style={{fontSize:13,color:"#374151",marginBottom:10,fontWeight:600}}>{money(income)} earned — {pct(income,goal)}%</div><button style={DBtn} onClick={async()=>{setGoalSet(false);setGoal(0);await sb.from("profiles").update({monthly_goal:0,goal_set:false}).eq("id",user.id);}}>Remove goal</button></div>
                  )}
                </div>
                <div style={card}>
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:15,fontWeight:700,color:"#111",marginBottom:12}}>Content Pillars</div>
                  {niche.pillars.map(p=>(<div key={p.n} style={{display:"flex",gap:10,padding:"7px 0",borderBottom:"1px solid #f9fafb"}}><div style={{width:6,height:6,borderRadius:"50%",background:AC,marginTop:5,flexShrink:0}}/><div><div style={{fontSize:13,fontWeight:700,color:"#111"}}>{p.n}</div><div style={{fontSize:11,color:"#6b7280"}}>{p.d}</div></div></div>))}
                </div>
              </div>
            </div>
            {/* Checklist */}
            <div style={{...card,marginBottom:20}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:10}}>
                <div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:16,fontWeight:700,color:"#111"}}>{niche.label} — Setup Checklist</div><div style={{fontSize:12,color:"#6b7280",marginTop:2}}>{checkDone} of {allChecks.length} complete</div></div>
                <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:22,color:checkDone===allChecks.length&&allChecks.length>0?G:AC,fontWeight:700}}>{pct(checkDone,allChecks.length)}%</div>
              </div>
              <div style={{height:6,background:"#f3f4f6",borderRadius:3,marginBottom:20,overflow:"hidden"}}><div style={{height:"100%",width:pct(checkDone,allChecks.length)+"%",background:checkDone===allChecks.length&&allChecks.length>0?G:AC,borderRadius:3,transition:"width 0.4s"}}/></div>
              {allChecks.map(item=>(
                <div key={item.key} onClick={()=>toggleCheck(item.key,item.custom,item.label)} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:"1px solid #f9fafb",cursor:"pointer"}}>
                  <div style={{width:20,height:20,borderRadius:6,border:`1.5px solid ${checks[item.key]?"#111":"#d1d5db"}`,background:checks[item.key]?"#111":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>{checks[item.key]&&<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}</div>
                  <div style={{flex:1,fontSize:14,color:checks[item.key]?"#9ca3af":"#111",textDecoration:checks[item.key]?"line-through":"none",transition:"all 0.15s",fontWeight:checks[item.key]?400:500}}>{item.label}</div>
                  {item.custom&&<button style={DBtn} onClick={e=>{e.stopPropagation();removeCustom(item.label);}}>Remove</button>}
                </div>
              ))}
              <div style={{display:"flex",gap:10,marginTop:16}}><input value={newItem} onChange={e=>setNewItem(e.target.value)} placeholder="Add your own checklist item..." onKeyDown={e=>e.key==="Enter"&&addCustom()} style={{flex:1}}/><button style={PBtn} onClick={addCustom}>Add</button></div>
              {checkDone===allChecks.length&&allChecks.length>0&&<div style={{textAlign:"center",padding:"20px 0",color:G,fontSize:14,fontFamily:"'Playfair Display',Georgia,serif",fontWeight:700}}>Setup complete — your business is ready to go.</div>}
            </div>
            {/* Support */}
            <div style={{...card,background:"#f9fafb"}}>
              <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:15,fontWeight:700,color:"#111",marginBottom:8}}>Need help or have feedback?</div>
              <div style={{fontSize:13,color:"#6b7280",lineHeight:1.6,marginBottom:14}}>Reach out any time — bugs, feature suggestions, or questions about using BizKit Pro.</div>
              <a href="mailto:support@bizkitpro.app" style={{display:"inline-block",padding:"9px 20px",background:"#111",color:"#fff",borderRadius:10,fontSize:13,fontWeight:700,textDecoration:"none"}}>Email Support</a>
            </div>
          </div>
        )}

        {/* CONTENT */}
        {tab==="Content"&&(
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:24,flexWrap:"wrap",gap:12}}>
              <div><div style={ST}>Content Planner</div><div style={SS}>Plan, create, track, and analyse your {niche.label.toLowerCase()} content</div></div>
              <div style={{display:"flex",gap:8}}><button style={GBtn} onClick={()=>setShowAF(true)}>Log Analytics</button><button style={PBtn} onClick={()=>setShowPF(true)}>+ Add Post</button></div>
            </div>
            {/* Ideas */}
            <div style={{...card,marginBottom:20,background:"#f9fafb"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:10}}>
                <div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:16,fontWeight:700,color:"#111"}}>Content Ideas — {niche.label}</div><div style={{fontSize:12,color:"#6b7280",marginTop:2}}>Click any idea to add it to your planner</div></div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>{["All",...pillars].map(p=><button key={p} onClick={()=>setIdeaF(p)} className="pill" style={{background:ideaF===p?"#111":"#fff",color:ideaF===p?"#fff":"#6b7280",border:ideaF===p?"1px solid #111":"1px solid #e5e7eb"}}>{p}</button>)}</div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:10}}>
                {ideas.map((idea,i)=>(
                  <div key={i} className="idea" onClick={()=>{setNp(p=>({...p,caption:idea.i,type:idea.t}));setShowPF(true);}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:8,gap:6}}><span className="tag">{idea.t}</span><span style={{fontSize:11,color:"#9ca3af",fontWeight:600}}>{idea.p}</span></div>
                    <div style={{fontSize:13,color:"#374151",lineHeight:1.5,fontWeight:500}}>{idea.i}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Captions */}
            <div style={{...card,marginBottom:20}}>
              <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:15,fontWeight:700,color:"#111",marginBottom:12}}>Caption Starters</div>
              <div style={{display:"grid",gap:8}}>
                {niche.caps.map((cap,i)=>(
                  <div key={i} onClick={()=>{setNp(p=>({...p,caption:cap}));setShowPF(true);}} style={{background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:10,padding:"12px 16px",fontSize:13,color:"#374151",lineHeight:1.6,cursor:"pointer",fontWeight:500,transition:"border-color 0.15s"}} onMouseEnter={e=>e.currentTarget.style.borderColor="#374151"} onMouseLeave={e=>e.currentTarget.style.borderColor="#e5e7eb"}>{cap}</div>
                ))}
              </div>
            </div>
            {/* Analytics display */}
            {analytics.length>0&&(
              <div style={{...card,marginBottom:20}}>
                <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:16,fontWeight:700,color:"#111",marginBottom:16}}>Analytics Overview</div>
                <div className="g3" style={{marginBottom:16}}>
                  {[{l:"Avg Views",v:Math.round(analytics.reduce((a,b)=>a+(Number(b.views)||0),0)/analytics.length).toLocaleString(),c:AC},{l:"Avg Saves",v:Math.round(analytics.reduce((a,b)=>a+(Number(b.saves)||0),0)/analytics.length).toLocaleString(),c:G},{l:"Avg Shares",v:Math.round(analytics.reduce((a,b)=>a+(Number(b.shares)||0),0)/analytics.length).toLocaleString(),c:"#f59e0b"}].map(item=>(
                    <div key={item.l} style={{background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:12,padding:16,borderTop:`3px solid ${item.c}`}}>
                      <div style={{fontSize:10,color:item.c,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>{item.l}</div>
                      <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:22,fontWeight:700,color:item.c}}>{item.v}</div>
                    </div>
                  ))}
                </div>
                {analytics.map(a=>(
                  <div key={a.id} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"10px 0",borderBottom:"1px solid #f9fafb",flexWrap:"wrap"}}>
                    <div style={{flex:1}}><div style={{fontSize:13,color:"#111",marginBottom:4,fontWeight:600}}>{a.caption}</div><div style={{display:"flex",gap:10,flexWrap:"wrap",fontSize:11,color:"#6b7280",fontWeight:500}}><span className="tag">{a.platform}</span>{a.date&&<span>{a.date}</span>}{a.views>0&&<span>Views: {Number(a.views).toLocaleString()}</span>}{a.reach>0&&<span>Reach: {Number(a.reach).toLocaleString()}</span>}{a.saves>0&&<span>Saves: {Number(a.saves).toLocaleString()}</span>}{a.shares>0&&<span>Shares: {Number(a.shares).toLocaleString()}</span>}{a.likes>0&&<span>Likes: {Number(a.likes).toLocaleString()}</span>}{a.comments>0&&<span>Comments: {Number(a.comments).toLocaleString()}</span>}</div></div>
                    <button style={DBtn} onClick={()=>delAnalytic(a.id)}>Remove</button>
                  </div>
                ))}
              </div>
            )}
            {/* Filters */}
            <div style={{display:"flex",gap:12,marginBottom:16,flexWrap:"wrap"}}><input type="month" value={fMonth} onChange={e=>setFMonth(e.target.value)} style={{width:"auto",minWidth:160}}/><select value={fStatus} onChange={e=>setFStatus(e.target.value)} style={{width:"auto",minWidth:130}}><option>All</option>{STAT.map(s=><option key={s}>{s}</option>)}</select></div>
            {fposts.length===0&&<div style={{textAlign:"center",color:"#9ca3af",padding:"40px 0",fontSize:14}}>No posts yet — click an idea above or add one manually</div>}
            {fposts.map(p=>(
              <div key={p.id} className="row">
                <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:10}}>
                  <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}><span style={{fontSize:12,color:"#9ca3af"}}>{p.date}</span><span className="tag">{p.platform}</span><span className="tag">{p.type}</span></div>
                  <div style={{display:"flex",gap:8,alignItems:"center"}}><select value={p.status} onChange={e=>updStat(p.id,e.target.value)} style={{width:"auto",minWidth:120,fontSize:12,padding:"4px 10px",color:SC[p.status],background:`${SC[p.status]}14`,border:`1.5px solid ${SC[p.status]}40`,fontWeight:700}}>{STAT.map(s=><option key={s}>{s}</option>)}</select><button style={DBtn} onClick={()=>delPost(p.id)}>Remove</button></div>
                </div>
                <div style={{fontSize:14,color:"#111",fontWeight:500,lineHeight:1.5,marginBottom:p.hashtags||p.notes?8:0}}>{p.caption}</div>
                {p.hashtags&&<div style={{fontSize:12,color:AC,fontWeight:600,marginBottom:p.notes?4:0}}>{p.hashtags}</div>}
                {p.notes&&<div style={{fontSize:12,color:"#6b7280",fontStyle:"italic"}}>Note: {p.notes}</div>}
              </div>
            ))}
            {showAF&&(<div className="mo"><div className="md">
              <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,color:"#111",marginBottom:6,fontWeight:700}}>Log Post Analytics</div>
              <div style={{fontSize:12,color:"#374151",marginBottom:16,padding:"12px 14px",background:"#f9fafb",borderRadius:10,border:"1px solid #e5e7eb",lineHeight:1.8,fontWeight:500}}><strong style={{color:"#111"}}>How to find your stats:</strong><br/>Instagram: {niche.hints.ig}<br/>TikTok: {niche.hints.tt}<br/>LinkedIn: {niche.hints.li}</div>
              <div style={{display:"grid",gap:14}}>
                <div className="g2"><div><label style={lbl}>Date</label><input type="date" value={na.date} onChange={e=>setNa({...na,date:e.target.value})}/></div><div><label style={lbl}>Platform</label><select value={na.platform} onChange={e=>setNa({...na,platform:e.target.value})}>{PLATS.map(p=><option key={p}>{p}</option>)}</select></div></div>
                <div><label style={lbl}>Post description</label><input value={na.caption} onChange={e=>setNa({...na,caption:e.target.value})} placeholder="What was this post about?"/></div>
                <div className="g3"><div><label style={lbl}>Views</label><input type="number" value={na.views} onChange={e=>setNa({...na,views:e.target.value})} placeholder="0"/></div><div><label style={lbl}>Reach</label><input type="number" value={na.reach} onChange={e=>setNa({...na,reach:e.target.value})} placeholder="0"/></div><div><label style={lbl}>Likes</label><input type="number" value={na.likes} onChange={e=>setNa({...na,likes:e.target.value})} placeholder="0"/></div></div>
                <div className="g3"><div><label style={lbl}>Saves</label><input type="number" value={na.saves} onChange={e=>setNa({...na,saves:e.target.value})} placeholder="0"/></div><div><label style={lbl}>Shares</label><input type="number" value={na.shares} onChange={e=>setNa({...na,shares:e.target.value})} placeholder="0"/></div><div><label style={lbl}>Comments</label><input type="number" value={na.comments} onChange={e=>setNa({...na,comments:e.target.value})} placeholder="0"/></div></div>
                <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}><button style={GBtn} onClick={()=>setShowAF(false)}>Cancel</button><button style={PBtn} onClick={addAnalytic}>Save Analytics</button></div>
              </div>
            </div></div>)}
            {showPF&&(<div className="mo"><div className="md">
              <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,color:"#111",marginBottom:20,fontWeight:700}}>Add New Post</div>
              <div style={{display:"grid",gap:14}}>
                <div><label style={lbl}>Date</label><input type="date" value={np.date} onChange={e=>setNp({...np,date:e.target.value})}/></div>
                <div className="g2"><div><label style={lbl}>Platform</label><select value={np.platform} onChange={e=>setNp({...np,platform:e.target.value})}>{PLATS.map(p=><option key={p}>{p}</option>)}</select></div><div><label style={lbl}>Format</label><select value={np.type} onChange={e=>setNp({...np,type:e.target.value})}>{["Reel","Carousel","Static Post","Story","Video","Thread","Other"].map(t=><option key={t}>{t}</option>)}</select></div></div>
                <div><label style={lbl}>Caption or Idea</label><textarea value={np.caption} onChange={e=>setNp({...np,caption:e.target.value})} placeholder="Write your caption or post concept..."/></div>
                <div><label style={lbl}>Hashtags</label><input value={np.hashtags} onChange={e=>setNp({...np,hashtags:e.target.value})} placeholder="#yourniche #smallbusiness"/></div>
                <div><label style={lbl}>Status</label><select value={np.status} onChange={e=>setNp({...np,status:e.target.value})}>{STAT.map(s=><option key={s}>{s}</option>)}</select></div>
                <div><label style={lbl}>Notes</label><input value={np.notes} onChange={e=>setNp({...np,notes:e.target.value})} placeholder="Reminders, visuals needed, etc."/></div>
                <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}><button style={GBtn} onClick={()=>setShowPF(false)}>Cancel</button><button style={PBtn} onClick={addPost}>Save Post</button></div>
              </div>
            </div></div>)}
          </div>
        )}

        {/* FINANCE */}
        {tab==="Finance"&&(
          <div>
            <div style={{marginBottom:20}}>
              <div style={ST}>Finance</div>
              <div style={SS}>Track money, customers, vendors, and pricing for {profile.business_name}</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{FTABS.map(ft=><button key={ft} className="fsb" onClick={()=>setFtab(ft)} style={{background:ftab===ft?"#111":"#fff",color:ftab===ft?"#fff":"#6b7280",border:ftab===ft?"1px solid #111":"1px solid #e5e7eb",fontWeight:ftab===ft?700:500}}>{ft}</button>)}</div>
            </div>

            {ftab==="Overview"&&(
              <div>
                {goalSet&&(<div style={{...card,marginBottom:20}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,flexWrap:"wrap",gap:8}}><div style={{fontSize:14,fontWeight:700,color:"#111"}}>Monthly Income Goal</div><div style={{fontSize:14,color:income>=goal?G:AC,fontWeight:700}}>{money(income)} of {money(goal)} — {pct(income,goal)}%</div></div><div style={{height:8,background:"#f3f4f6",borderRadius:4,overflow:"hidden"}}><div style={{height:"100%",width:pct(income,goal)+"%",background:income>=goal?G:AC,borderRadius:4,transition:"width 0.5s"}}/></div></div>)}
                <div className="g3" style={{marginBottom:20}}>{[{l:"Total Income",v:money(income),c:G},{l:"Total Expenses",v:money(expense),c:"#dc2626"},{l:"Net Profit",v:money(profit),c:profit>=0?G:"#dc2626"}].map(item=>(<div key={item.l} style={{...card,borderTop:`3px solid ${item.c}`}}><div style={{fontSize:10,color:item.c,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8}}>{item.l}</div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:24,fontWeight:700,color:item.c}}>{item.v}</div></div>))}</div>
                <div className="g2">
                  <div style={card}><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:15,fontWeight:700,color:G,marginBottom:14}}>Income by Category</div>{niche.inc.map(cat=>{const total=txs.filter(t=>t.type==="Income"&&t.category===cat).reduce((a,b)=>a+Number(b.amount),0);if(!total)return null;return<div key={cat} style={{display:"flex",justifyContent:"space-between",fontSize:13,padding:"8px 0",borderBottom:"1px solid #f9fafb",fontWeight:500}}><span style={{color:"#374151"}}>{cat}</span><span style={{color:G,fontWeight:700}}>{money(total)}</span></div>;})}{txs.filter(t=>t.type==="Income").length===0&&<div style={{fontSize:12,color:"#9ca3af"}}>No income recorded yet</div>}</div>
                  <div style={card}><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:15,fontWeight:700,color:"#dc2626",marginBottom:14}}>Expenses by Category</div>{niche.exp.map(cat=>{const total=txs.filter(t=>t.type==="Expense"&&t.category===cat).reduce((a,b)=>a+Number(b.amount),0);if(!total)return null;return<div key={cat} style={{display:"flex",justifyContent:"space-between",fontSize:13,padding:"8px 0",borderBottom:"1px solid #f9fafb",fontWeight:500}}><span style={{color:"#374151"}}>{cat}</span><span style={{color:"#dc2626",fontWeight:700}}>{money(total)}</span></div>;})}{txs.filter(t=>t.type==="Expense").length===0&&<div style={{fontSize:12,color:"#9ca3af"}}>No expenses recorded yet</div>}</div>
                </div>
              </div>
            )}

            {ftab==="Transactions"&&(
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:12}}><input type="month" value={fMonth} onChange={e=>setFMonth(e.target.value)} style={{width:"auto",minWidth:160}}/><button style={PBtn} onClick={()=>setShowTF(true)}>+ Add Transaction</button></div>
                <div style={{display:"grid",gridTemplateColumns:"80px 1fr 110px 90px 72px",gap:12,padding:"6px 16px",fontSize:10,color:"#9ca3af",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8}}><span>Date</span><span>Description</span><span>Category</span><span>Amount</span><span></span></div>
                {ftxs.length===0&&<div style={{textAlign:"center",color:"#9ca3af",padding:"32px 0",fontSize:14}}>No transactions for this period</div>}
                {ftxs.map(t=>(<div key={t.id} style={{display:"grid",gridTemplateColumns:"80px 1fr 110px 90px 72px",gap:12,alignItems:"center",padding:"12px 16px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:10,marginBottom:8,fontSize:13}}><span style={{fontSize:11,color:"#9ca3af"}}>{t.date}</span><div><div style={{fontWeight:600,color:"#111"}}>{t.description}</div><span style={{fontSize:10,color:"#9ca3af"}}>{t.type}</span></div><span className="tag">{t.category}</span><span style={{fontWeight:700,color:t.type==="Income"?G:"#dc2626"}}>{t.type==="Income"?"+":"-"}{money(t.amount)}</span><button style={DBtn} onClick={()=>delTx(t.id)}>Remove</button></div>))}
                {showTF&&(<div className="mo"><div className="md">
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,color:"#111",marginBottom:20,fontWeight:700}}>Add Transaction</div>
                  <div style={{display:"grid",gap:14}}>
                    <div><label style={lbl}>Date</label><input type="date" value={nt.date} onChange={e=>setNt({...nt,date:e.target.value})}/></div>
                    <div className="g2"><div><label style={lbl}>Type</label><select value={nt.type} onChange={e=>setNt({...nt,type:e.target.value,category:(e.target.value==="Income"?niche.inc:niche.exp)[0]})}><option>Income</option><option>Expense</option></select></div><div><label style={lbl}>Category</label><select value={nt.category} onChange={e=>setNt({...nt,category:e.target.value})}>{(nt.type==="Income"?niche.inc:niche.exp).map(c=><option key={c}>{c}</option>)}</select></div></div>
                    <div><label style={lbl}>Description</label><input value={nt.description} onChange={e=>setNt({...nt,description:e.target.value})} placeholder="What was this for?"/></div>
                    <div><label style={lbl}>Amount ($)</label><input type="number" value={nt.amount} onChange={e=>setNt({...nt,amount:e.target.value})} placeholder="0.00" min="0" step="0.01"/></div>
                    <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}><button style={GBtn} onClick={()=>setShowTF(false)}>Cancel</button><button style={PBtn} onClick={addTx}>Save</button></div>
                  </div>
                </div></div>)}
              </div>
            )}

            {ftab==="Customers"&&(
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
                  <div className="g3" style={{flex:1}}>{[{l:"Total Customers",v:custs.length,c:AC},{l:"Total Customer Value",v:money(custs.reduce((a,b)=>a+(Number(b.total_spent)||0),0)),c:G},{l:"Avg. Customer Value",v:custs.length?money(custs.reduce((a,b)=>a+(Number(b.total_spent)||0),0)/custs.length):money(0),c:"#f59e0b"}].map(item=>(<div key={item.l} className="sc" style={{borderTop:`3px solid ${item.c}`}}><div style={{fontSize:10,color:item.c,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>{item.l}</div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,fontWeight:700,color:item.c}}>{item.v}</div></div>))}</div>
                  <button style={PBtn} onClick={()=>setShowCF(true)}>+ Add Customer</button>
                </div>
                {custs.length===0&&<div style={{...card,textAlign:"center",padding:"40px 24px",background:"#f9fafb"}}><div style={{fontSize:14,color:"#111",marginBottom:6,fontWeight:600}}>No customers yet</div><div style={{fontSize:13,color:"#6b7280"}}>Add your first customer to build your client database</div></div>}
                {custs.map(c=>(<div key={c.id} className="row"><div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}><div style={{display:"flex",gap:14,alignItems:"flex-start",flex:1,flexWrap:"wrap"}}><div style={{width:40,height:40,borderRadius:"50%",background:"#111",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:15,color:"#fff",fontWeight:700,fontFamily:"'Playfair Display',Georgia,serif"}}>{c.name.charAt(0).toUpperCase()}</div><div style={{flex:1}}><div style={{fontSize:15,fontWeight:700,color:"#111",marginBottom:4}}>{c.name}</div><div style={{display:"flex",gap:16,flexWrap:"wrap",fontSize:12,color:"#6b7280"}}>{c.phone&&<span>{c.phone}</span>}{c.email&&<span>{c.email}</span>}{c.address&&<span>{c.address}</span>}</div>{c.notes&&<div style={{fontSize:12,color:"#9ca3af",marginTop:6,fontStyle:"italic"}}>{c.notes}</div>}</div></div><div style={{display:"flex",gap:12,alignItems:"center"}}><div style={{textAlign:"right"}}>{c.total_spent>0&&<div style={{fontSize:14,fontWeight:700,color:G}}>{money(c.total_spent)}</div>}{c.last_purchase&&<div style={{fontSize:11,color:"#9ca3af"}}>Last: {c.last_purchase}</div>}</div><button style={DBtn} onClick={()=>delCust(c.id)}>Remove</button></div></div></div>))}
                {showCF&&(<div className="mo"><div className="md">
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,color:"#111",marginBottom:20,fontWeight:700}}>Add Customer</div>
                  <div style={{display:"grid",gap:14}}>
                    <div><label style={lbl}>Full Name</label><input value={nc.name} onChange={e=>setNc({...nc,name:e.target.value})} placeholder="Customer full name"/></div>
                    <div className="g2"><div><label style={lbl}>Phone</label><input value={nc.phone} onChange={e=>setNc({...nc,phone:e.target.value})} placeholder="+234..."/></div><div><label style={lbl}>Email</label><input value={nc.email} onChange={e=>setNc({...nc,email:e.target.value})} placeholder="email@example.com"/></div></div>
                    <div><label style={lbl}>Address</label><input value={nc.address} onChange={e=>setNc({...nc,address:e.target.value})} placeholder="City, area, or full address"/></div>
                    <div className="g2"><div><label style={lbl}>Total Spent ($)</label><input type="number" value={nc.spent} onChange={e=>setNc({...nc,spent:e.target.value})} placeholder="0.00"/></div><div><label style={lbl}>Last Purchase Date</label><input type="date" value={nc.lastBuy} onChange={e=>setNc({...nc,lastBuy:e.target.value})}/></div></div>
                    <div><label style={lbl}>Notes</label><textarea value={nc.notes} onChange={e=>setNc({...nc,notes:e.target.value})} placeholder="Preferences, allergies, important details..."/></div>
                    <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}><button style={GBtn} onClick={()=>setShowCF(false)}>Cancel</button><button style={PBtn} onClick={addCust}>Save Customer</button></div>
                  </div>
                </div></div>)}
              </div>
            )}

            {ftab==="Vendors"&&(
              <div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20,flexWrap:"wrap",gap:12}}>
                  <div className="g2" style={{flex:1}}>{[{l:"Total Vendors",v:vendors.length,c:AC},{l:"Total Outstanding",v:money(vendors.reduce((a,b)=>a+(Number(b.outstanding)||0),0)),c:"#dc2626"}].map(item=>(<div key={item.l} className="sc" style={{borderTop:`3px solid ${item.c}`}}><div style={{fontSize:10,color:item.c,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>{item.l}</div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,fontWeight:700,color:item.c}}>{item.v}</div></div>))}</div>
                  <button style={PBtn} onClick={()=>setShowVF(true)}>+ Add Vendor</button>
                </div>
                {vendors.length===0&&<div style={{...card,textAlign:"center",padding:"40px 24px",background:"#f9fafb"}}><div style={{fontSize:14,color:"#111",marginBottom:6,fontWeight:600}}>No vendors yet</div><div style={{fontSize:13,color:"#6b7280"}}>Track your suppliers and what you owe them</div></div>}
                {vendors.map(v=>(<div key={v.id} className="row"><div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10}}><div style={{flex:1}}><div style={{fontSize:15,fontWeight:700,color:"#111",marginBottom:4}}>{v.name}</div><div style={{display:"flex",gap:14,flexWrap:"wrap",fontSize:12,color:"#6b7280",marginBottom:v.supplies?6:0}}>{v.contact&&<span>{v.contact}</span>}{v.phone&&<span>{v.phone}</span>}{v.email&&<span>{v.email}</span>}</div>{v.supplies&&<div style={{fontSize:12,color:"#374151",fontWeight:500}}>Supplies: {v.supplies}</div>}{v.payment_terms&&<div style={{fontSize:12,color:"#9ca3af",marginTop:2}}>Terms: {v.payment_terms}</div>}</div><div style={{display:"flex",gap:12,alignItems:"center"}}>{v.outstanding>0&&<div style={{textAlign:"right"}}><div style={{fontSize:11,color:"#9ca3af",marginBottom:2}}>Outstanding</div><div style={{fontSize:14,fontWeight:700,color:"#dc2626"}}>{money(v.outstanding)}</div></div>}<button style={DBtn} onClick={()=>delVendor(v.id)}>Remove</button></div></div></div>))}
                {showVF&&(<div className="mo"><div className="md">
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,color:"#111",marginBottom:20,fontWeight:700}}>Add Vendor</div>
                  <div style={{display:"grid",gap:14}}>
                    <div><label style={lbl}>Business Name</label><input value={nv.name} onChange={e=>setNv({...nv,name:e.target.value})} placeholder="e.g. Lagos Beauty Wholesale"/></div>
                    <div className="g2"><div><label style={lbl}>Contact Person</label><input value={nv.contact} onChange={e=>setNv({...nv,contact:e.target.value})} placeholder="Your contact there"/></div><div><label style={lbl}>Phone</label><input value={nv.phone} onChange={e=>setNv({...nv,phone:e.target.value})} placeholder="+234..."/></div></div>
                    <div><label style={lbl}>Email</label><input value={nv.email} onChange={e=>setNv({...nv,email:e.target.value})} placeholder="vendor@email.com"/></div>
                    <div><label style={lbl}>What do they supply?</label><input value={nv.supplies} onChange={e=>setNv({...nv,supplies:e.target.value})} placeholder="e.g. Hair products, packaging"/></div>
                    <div className="g2"><div><label style={lbl}>Payment Terms</label><input value={nv.terms} onChange={e=>setNv({...nv,terms:e.target.value})} placeholder="e.g. Pay on delivery"/></div><div><label style={lbl}>Outstanding ($)</label><input type="number" value={nv.outstanding} onChange={e=>setNv({...nv,outstanding:e.target.value})} placeholder="0.00"/></div></div>
                    <div style={{display:"flex",gap:10,justifyContent:"flex-end"}}><button style={GBtn} onClick={()=>setShowVF(false)}>Cancel</button><button style={PBtn} onClick={addVendor}>Save Vendor</button></div>
                  </div>
                </div></div>)}
              </div>
            )}

            {ftab==="Calculator"&&(
              <div className="g2" style={{alignItems:"start"}}>
                <div style={card}>
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:18,fontWeight:700,color:"#111",marginBottom:6}}>Profit Margin Calculator</div>
                  <div style={{fontSize:13,color:"#6b7280",marginBottom:20,lineHeight:1.6}}>Enter your cost and selling price to see your exact profit margin, markup, and total earnings.</div>
                  <div style={{display:"grid",gap:16}}>
                    <div><label style={lbl}>Cost Price — what you pay</label><input type="number" value={margin.cost} onChange={e=>setMargin({...margin,cost:e.target.value})} placeholder="0.00" min="0" step="0.01"/><div style={{fontSize:11,color:"#6b7280",marginTop:4}}>The price you paid to produce or buy the item</div></div>
                    <div><label style={lbl}>Selling Price — what you charge</label><input type="number" value={margin.sell} onChange={e=>setMargin({...margin,sell:e.target.value})} placeholder="0.00" min="0" step="0.01"/><div style={{fontSize:11,color:"#6b7280",marginTop:4}}>The price your customer pays</div></div>
                    <div><label style={lbl}>Quantity</label><input type="number" value={margin.qty} onChange={e=>setMargin({...margin,qty:e.target.value})} placeholder="1" min="1"/><div style={{fontSize:11,color:"#6b7280",marginTop:4}}>How many units you are selling</div></div>
                  </div>
                </div>
                <div style={{display:"grid",gap:14}}>
                  {[{l:"Profit Margin",v:mpct+"%",d:"Percentage of selling price that is profit",c:Number(mpct)>30?G:Number(mpct)>15?AC:"#dc2626"},{l:"Markup",v:mkp+"%",d:"How much above cost price you are charging",c:AC},{l:"Profit Per Unit",v:money(ppu),d:"How much you make on each item",c:ppu>=0?G:"#dc2626"},{l:"Total Profit",v:money(tpro),d:`For ${margin.qty||1} unit${Number(margin.qty||1)>1?"s":""}`,c:tpro>=0?G:"#dc2626"}].map(item=>(
                    <div key={item.l} style={{...card,padding:18,borderTop:`3px solid ${item.c}`}}>
                      <div style={{fontSize:10,color:item.c,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>{item.l}</div>
                      <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:24,fontWeight:700,color:item.c,marginBottom:4}}>{item.v}</div>
                      <div style={{fontSize:11,color:"#6b7280"}}>{item.d}</div>
                    </div>
                  ))}
                  <div style={{...card,padding:18,background:Number(mpct)>30?"#f0fdf4":Number(mpct)>15?"#f9fafb":"#fef2f2",borderTop:`3px solid ${Number(mpct)>30?G:Number(mpct)>15?"#e5e7eb":"#dc2626"}`}}>
                    <div style={{fontSize:13,fontWeight:700,color:"#111",marginBottom:6}}>{Number(mpct)>30?"Excellent margin":Number(mpct)>15?"Healthy margin":Number(mpct)>0?"Low margin — consider raising your price":"Enter prices above to see your analysis"}</div>
                    <div style={{fontSize:12,color:"#374151",lineHeight:1.7}}>{Number(mpct)>30?"You are keeping more than 30% of every sale as profit. That is strong.":Number(mpct)>15?"Your margin is healthy. Most businesses aim for 20 to 40 percent.":Number(mpct)>0?"Below 15% leaves little room for business expenses. Consider raising your price.":"A healthy profit margin is typically 20 to 40 percent depending on your industry."}</div>
                  </div>
                </div>
              </div>
            )}

            {ftab==="Invoice"&&(
              <div>
                <div style={card}>
                  <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:18,fontWeight:700,color:"#111",marginBottom:20}}>Invoice Generator</div>
                  <div className="g2" style={{marginBottom:16}}><div><label style={lbl}>Your Business Name</label><input value={profile.business_name} readOnly style={{opacity:0.6}}/></div><div><label style={lbl}>Invoice Date</label><input type="date" value={inv.date} onChange={e=>setInv({...inv,date:e.target.value})}/></div></div>
                  <div className="g2" style={{marginBottom:16}}><div><label style={lbl}>Client Name</label><input value={inv.clientName} onChange={e=>setInv({...inv,clientName:e.target.value})} placeholder="Who are you invoicing?"/></div><div><label style={lbl}>Client Email</label><input value={inv.clientEmail} onChange={e=>setInv({...inv,clientEmail:e.target.value})} placeholder="client@email.com"/></div></div>
                  <div style={{marginBottom:16}}><label style={lbl}>Service or Product Description</label><textarea value={inv.service} onChange={e=>setInv({...inv,service:e.target.value})} placeholder="Describe what you are charging for..."/></div>
                  <div className="g2" style={{marginBottom:16}}><div><label style={lbl}>Amount ($)</label><input type="number" value={inv.amount} onChange={e=>setInv({...inv,amount:e.target.value})} placeholder="0.00"/></div><div><label style={lbl}>Payment Notes</label><input value={inv.notes} onChange={e=>setInv({...inv,notes:e.target.value})} placeholder="Bank details, due date, etc."/></div></div>
                  <button style={PBtn} onClick={()=>setInvShow(true)}>Preview Invoice</button>
                </div>
                {invShow&&(
                  <div style={{...card,marginTop:20,boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:32,flexWrap:"wrap",gap:12}}>
                      <div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:26,fontWeight:700,color:"#111",marginBottom:2}}>{profile.business_name}</div>{profile.tagline&&<div style={{fontSize:13,color:"#6b7280"}}>{profile.tagline}</div>}</div>
                      <div style={{textAlign:"right"}}><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:20,fontWeight:700,color:"#111"}}>INVOICE</div><div style={{fontSize:12,color:"#6b7280",marginTop:4}}>Date: {inv.date||new Date().toISOString().slice(0,10)}</div><div style={{fontSize:12,color:"#6b7280"}}>No. {Math.floor(Math.random()*9000)+1000}</div></div>
                    </div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:28}}><div><div style={{fontSize:10,color:"#6b7280",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:700}}>Billed To</div><div style={{fontSize:14,fontWeight:700,color:"#111"}}>{inv.clientName||"Client Name"}</div>{inv.clientEmail&&<div style={{fontSize:12,color:"#6b7280"}}>{inv.clientEmail}</div>}</div><div><div style={{fontSize:10,color:"#6b7280",marginBottom:4,textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:700}}>From</div><div style={{fontSize:14,fontWeight:700,color:"#111"}}>{profile.business_name}</div></div></div>
                    <div style={{background:"#f9fafb",borderRadius:10,padding:"16px 20px",marginBottom:20}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:10}}><span style={{fontSize:11,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:700}}>Description</span><span style={{fontSize:11,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:700}}>Amount</span></div><div style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderTop:"1px solid #e5e7eb"}}><span style={{fontSize:14,color:"#111",fontWeight:500}}>{inv.service||"Service description"}</span><span style={{fontSize:14,fontWeight:700,color:"#111"}}>{money(inv.amount||0)}</span></div></div>
                    <div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}><div style={{background:"#111",color:"#fff",borderRadius:10,padding:"12px 24px"}}><div style={{fontSize:11,marginBottom:2,opacity:0.7,fontWeight:600}}>Total Due</div><div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:22,fontWeight:700}}>{money(inv.amount||0)}</div></div></div>
                    {inv.notes&&<div style={{borderTop:"1px solid #e5e7eb",paddingTop:16,fontSize:13,color:"#374151",fontWeight:500}}><span style={{fontWeight:700,color:"#111"}}>Payment notes: </span>{inv.notes}</div>}
                    <div style={{display:"flex",gap:10,marginTop:20}}><button style={PBtn} onClick={()=>window.print()}>Print Invoice</button><button style={GBtn} onClick={()=>setInvShow(false)}>Close</button></div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* GUIDE */}
        {tab==="Guide"&&(
          <div>
            <div style={ST}>How to Use BizKit Pro</div>
            <div style={SS}>A plain-English guide to every section — no jargon, no overwhelm</div>
            {[
              {title:"Your Account",content:`BizKit Pro uses a secure account system. All your data — posts, transactions, customers, vendors, analytics, and checklist — is saved to the cloud.\n\nYou can log in from any device and all your data will be there. Nothing is lost if you close the tab or switch devices.\n\nTo sign out, click the Sign out button in the top right corner.`},
              {title:"Home Dashboard",content:`Your command centre. At a glance you see total income, expenses, profit, and your content pipeline.\n\nThe brand card at the top shows your business name and tagline. If you have set a monthly goal in Brand Hub, you will see a live progress bar tracking how close you are.\n\nUse the quick action buttons at the bottom to jump into adding content, logging a transaction, or opening the profit calculator.`},
              {title:"Brand Hub",content:`Define who you are and what your business stands for.\n\n**Business Identity** shows your name, tagline, niche, audience, and brand colour. Your brand colour themes the entire app.\n\n**Monthly Goal** lets you set an income target with a live progress bar across the app.\n\n**Setup Checklist** has pre-loaded tasks for your specific niche. Tick them off as you go, and add your own custom items at the bottom.\n\n**Support** — the email support button connects you directly to our team.`},
              {title:"Content Planner",content:`Plan every post before it goes live.\n\n**Content Ideas** are written specifically for your niche. Click any idea to instantly pre-fill a new post.\n\n**Caption Starters** are fill-in-the-blank captions. Replace the brackets with your own details.\n\n**Status tracking** — move posts from Idea to In Progress to Scheduled to Posted.\n\n**Log Analytics** — after posting, paste in your stats from Instagram, TikTok, or LinkedIn. The app shows you exactly where to find your numbers. Over time you will see which content your audience responds to most.`},
              {title:"Finance — Overview and Transactions",content:`**Overview** shows your total income, expenses, and net profit broken down by category.\n\n**Transactions** is where you log every payment in and out. Categories are tailored to your specific niche.\n\nLog every transaction, even the small ones. After three months the data will show you things about your business you would not have noticed otherwise.`},
              {title:"Finance — Customers and Vendors",content:`**Customers** — build your full client database with name, phone, email, address, notes, total spending, and last purchase date. The summary cards show your total customers, total value, and average value per customer.\n\n**Vendors** — track your suppliers with contact details, what they supply, payment terms, and outstanding balance. This keeps you on top of what you owe.`},
              {title:"Finance — Calculator and Invoice",content:`**Profit Margin Calculator** — enter your cost price and selling price to instantly see your profit margin percentage, markup, profit per unit, and total profit. The colour-coded result tells you if your margin is excellent, healthy, or too low.\n\nUse this before setting any price. Most small businesses underprice and wonder why they struggle.\n\n**Invoice Generator** — fill in client details, service description, and amount to get a clean, professional, printable invoice with your business name. Print it to send to your client.`},
              {title:"Tips for Success",content:`Log every transaction even the small ones. After three months the data tells you things you would not have noticed otherwise.\n\nUse the profit calculator before you quote any client. Know your numbers first.\n\nPost consistently rather than perfectly. An imperfect post published today beats a perfect one that never goes out.\n\nAdd your customers. Businesses that grow fastest know their customers by name.\n\nLog analytics after every post. After a few weeks you will know exactly what content your audience responds to.\n\nReview your numbers every Monday morning for ten minutes. Check your pipeline, your finances, and your goal. That is all it takes.`},
            ].map(section=>(
              <div key={section.title} className="gsec">
                <div style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:17,color:"#111",marginBottom:12,fontWeight:700}}>{section.title}</div>
                {section.content.split("\n\n").map((para,i)=>(
                  <p key={i} style={{fontSize:14,color:"#374151",lineHeight:1.8,marginBottom:10}}>
                    {para.split(/\*\*(.*?)\*\*/g).map((chunk,j)=>j%2===1?<strong key={j} style={{color:"#111",fontWeight:700}}>{chunk}</strong>:chunk)}
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

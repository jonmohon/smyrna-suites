/* eslint-disable */
// Generates the Smyrna Salon Suites technical SEO audit + ranking-page roadmap as a PDF.
// Run with: node scripts/generate-seo-audit-pdf.cjs

const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const OUTPUT = path.join(__dirname, "..", "docs", "smyrna-salon-suites-seo-audit-2026-05-01.pdf");

const COLORS = {
  green: "#1A5C2A",
  greenDark: "#0f3e1b",
  gold: "#D1B468",
  goldDark: "#b89a50",
  text: "#1f1f1f",
  muted: "#5a5a5a",
  light: "#9a9a9a",
  border: "#e8e2d4",
};

const SEVERITY = {
  high: { label: "HIGH", color: "#9b2c2c" },
  medium: { label: "MEDIUM", color: "#b89a50" },
  low: { label: "LOW", color: "#3b6e3f" },
  done: { label: "DONE", color: "#3b6e3f" },
};

const doc = new PDFDocument({
  size: "LETTER",
  margins: { top: 64, bottom: 72, left: 64, right: 64 },
  info: {
    Title: "Smyrna Salon Suites — Technical SEO Audit & Ranking-Page Roadmap",
    Author: "Smyrna Salon Suites",
    Subject: "Technical SEO Audit",
    Keywords: "Smyrna Salon Suites, SEO, salon suites Smyrna GA",
    CreationDate: new Date(),
  },
  bufferPages: true,
});

doc.pipe(fs.createWriteStream(OUTPUT));

// ----- helpers ---------------------------------------------------------------

const PAGE_W = doc.page.width;
const CONTENT_W = PAGE_W - doc.page.margins.left - doc.page.margins.right;

function hRule(color = COLORS.border, width = 0.7) {
  const y = doc.y;
  doc
    .save()
    .moveTo(doc.page.margins.left, y)
    .lineTo(PAGE_W - doc.page.margins.right, y)
    .lineWidth(width)
    .strokeColor(color)
    .stroke()
    .restore();
  doc.moveDown(0.5);
}

function goldDivider() {
  const y = doc.y + 4;
  const x = doc.page.margins.left;
  doc.save().rect(x, y, 36, 2).fillColor(COLORS.gold).fill().restore();
  doc.moveDown(1);
}

function h1(text) {
  doc
    .font("Helvetica-Bold")
    .fontSize(22)
    .fillColor(COLORS.green)
    .text(text, { width: CONTENT_W });
  goldDivider();
}

function h2(text) {
  doc.moveDown(0.6);
  doc
    .font("Helvetica-Bold")
    .fontSize(15)
    .fillColor(COLORS.green)
    .text(text, { width: CONTENT_W });
  doc.moveDown(0.25);
  hRule(COLORS.gold, 0.8);
}

function h3(text) {
  doc.moveDown(0.4);
  doc
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .fillColor(COLORS.greenDark)
    .text(text, { width: CONTENT_W });
  doc.moveDown(0.2);
}

function eyebrow(text) {
  doc
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor(COLORS.goldDark)
    .text(text.toUpperCase(), { characterSpacing: 2, width: CONTENT_W });
  doc.moveDown(0.15);
}

function body(text, opts = {}) {
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor(COLORS.text)
    .text(text, {
      width: CONTENT_W,
      lineGap: 2,
      paragraphGap: 6,
      ...opts,
    });
}

function muted(text) {
  doc
    .font("Helvetica-Oblique")
    .fontSize(9.5)
    .fillColor(COLORS.muted)
    .text(text, { width: CONTENT_W, lineGap: 1 });
  doc.moveDown(0.25);
}

function bullet(text) {
  const x = doc.page.margins.left;
  const y = doc.y + 5;
  doc.save().circle(x + 4, y, 1.6).fillColor(COLORS.gold).fill().restore();
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor(COLORS.text)
    .text(text, x + 14, doc.y, { width: CONTENT_W - 14, lineGap: 2, paragraphGap: 4 });
}

function severityChip(sev) {
  const meta = SEVERITY[sev];
  if (!meta) return;
  const padX = 8;
  const padY = 3.5;
  const label = meta.label;
  const fontSize = 7.5;
  doc.font("Helvetica-Bold").fontSize(fontSize);
  const labelW = doc.widthOfString(label);
  const w = Math.ceil(labelW + padX * 2);
  const h = Math.ceil(fontSize + padY * 2 + 1);
  const x = doc.x;
  const y = doc.y;
  doc
    .save()
    .roundedRect(x, y, w, h, h / 2)
    .fillColor(meta.color)
    .fill()
    .fillColor("#ffffff")
    .text(label, x + padX, y + padY, { lineBreak: false });
  doc.restore();
  doc.x = x + w + 8;
  doc.y = y;
}

function findingBlock({ severity, title, why, fix }) {
  if (doc.y > doc.page.height - 200) doc.addPage();
  const startY = doc.y;
  severityChip(severity);
  doc
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .fillColor(COLORS.greenDark)
    .text(title, doc.x, doc.y, { width: CONTENT_W - (doc.x - doc.page.margins.left), lineGap: 1 });
  doc.x = doc.page.margins.left;
  doc.moveDown(0.15);
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.muted)
    .text("Why it matters", { continued: false });
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(COLORS.text)
    .text(why, { width: CONTENT_W, lineGap: 2 });
  doc.moveDown(0.2);
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.muted)
    .text("Fix");
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(COLORS.text)
    .text(fix, { width: CONTENT_W, lineGap: 2 });
  doc.moveDown(0.5);
  hRule();
}

function pageBlock({ url, h1Text, intent, primary, secondary, why, brief }) {
  if (doc.y > doc.page.height - 230) doc.addPage();
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor(COLORS.green)
    .text(url, { width: CONTENT_W });
  doc
    .font("Helvetica-Oblique")
    .fontSize(9.5)
    .fillColor(COLORS.muted)
    .text(`H1: ${h1Text}`, { width: CONTENT_W });
  doc.moveDown(0.15);
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.goldDark)
    .text(`SEARCH INTENT  ·  ${intent.toUpperCase()}`, { characterSpacing: 1, width: CONTENT_W });
  doc.moveDown(0.15);
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.muted)
    .text("Primary keyword");
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor(COLORS.text)
    .text(primary, { width: CONTENT_W });
  if (secondary && secondary.length) {
    doc
      .font("Helvetica-Bold")
      .fontSize(9)
      .fillColor(COLORS.muted)
      .text("Secondary keywords");
    doc
      .font("Helvetica")
      .fontSize(10)
      .fillColor(COLORS.text)
      .text(secondary.join(" · "), { width: CONTENT_W });
  }
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.muted)
    .text("Why it ranks");
  doc.font("Helvetica").fontSize(10).fillColor(COLORS.text).text(why, { width: CONTENT_W, lineGap: 2 });
  doc
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor(COLORS.muted)
    .text("Page brief");
  doc.font("Helvetica").fontSize(10).fillColor(COLORS.text).text(brief, { width: CONTENT_W, lineGap: 2 });
  doc.moveDown(0.4);
  hRule();
}

// ----- COVER PAGE ------------------------------------------------------------

(function cover() {
  doc.rect(0, 0, PAGE_W, doc.page.height).fillColor("#ffffff").fill();

  // Top gold band
  doc.rect(0, 0, PAGE_W, 6).fillColor(COLORS.gold).fill();

  // Brand strip
  doc
    .fillColor(COLORS.greenDark)
    .font("Helvetica-Bold")
    .fontSize(10)
    .text("SMYRNA SALON SUITES", doc.page.margins.left, 64, {
      characterSpacing: 4,
      width: CONTENT_W,
    });

  // Hero title
  doc.y = 180;
  doc
    .fillColor(COLORS.green)
    .font("Helvetica-Bold")
    .fontSize(34)
    .text("Technical SEO Audit", doc.page.margins.left, doc.y, { width: CONTENT_W, lineGap: 4 });
  doc
    .fillColor(COLORS.goldDark)
    .font("Helvetica-Oblique")
    .fontSize(20)
    .text("& Ranking-Page Roadmap", { width: CONTENT_W });

  // Decorative gold rule
  const rY = doc.y + 16;
  doc.rect(doc.page.margins.left, rY, 80, 3).fillColor(COLORS.gold).fill();
  doc.y = rY + 28;

  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor(COLORS.muted)
    .text(
      "A focused review of smyrnasalonsuites.com — what is already strong, the technical issues to fix, and the new pages most likely to land Smyrna Salon Suites on the first page of Google for high-intent local queries.",
      { width: CONTENT_W, lineGap: 3 }
    );

  // Meta block
  doc.y = doc.page.height - 200;
  hRule(COLORS.gold, 0.8);
  doc.font("Helvetica-Bold").fontSize(9).fillColor(COLORS.muted).text("PREPARED FOR", { characterSpacing: 2 });
  doc.font("Helvetica").fontSize(11).fillColor(COLORS.text).text("Smyrna Salon Suites · Jade & Baldem Gonzalez");
  doc.moveDown(0.5);
  doc.font("Helvetica-Bold").fontSize(9).fillColor(COLORS.muted).text("PREPARED BY", { characterSpacing: 2 });
  doc.font("Helvetica").fontSize(11).fillColor(COLORS.text).text("Claude · Anthropic");
  doc.moveDown(0.5);
  doc.font("Helvetica-Bold").fontSize(9).fillColor(COLORS.muted).text("DATE", { characterSpacing: 2 });
  doc.font("Helvetica").fontSize(11).fillColor(COLORS.text).text("May 1, 2026");

  // Bottom band
  doc.rect(0, doc.page.height - 6, PAGE_W, 6).fillColor(COLORS.gold).fill();

  doc.addPage();
})();

// ----- 1. EXECUTIVE SUMMARY --------------------------------------------------

h1("1.  Executive Summary");

body(
  "Smyrna Salon Suites already has a strong technical baseline: a single-page Next.js 16 app with clean URLs, sitemap and robots.txt in place, valid HTML, security headers, mobile-responsive CSS, LocalBusiness JSON-LD, and an FAQPage schema on /faq. The site is in good shape to rank for branded queries (\"Smyrna Salon Suites\") and a handful of generic ones (\"salon suites Smyrna GA\")."
);
body(
  "The opportunity is converting that baseline into first-page rankings for the high-intent commercial searches that actually drive tours and signed leases. Two things are blocking that: (a) thin content footprint — the homepage tries to rank for everything, but each profession and each nearby city deserves its own page; and (b) a handful of technical fixes that are quick wins (image optimization on the new hero, schema additions for Service / Review / Breadcrumb, Google Analytics + Search Console wiring)."
);

h3("Top three priorities (do these first)");
bullet("Optimize the new homepage hero image — switch from raw <img> tags inside the SalonLandingContent component to next/image so the LCP image is automatically resized, AVIF/WebP-served, and preloaded. Likely 1.5–3s LCP improvement on mobile.");
bullet("Ship five profession-specific landing pages: hair stylist, barber, nail tech, esthetician, and braider/loctician. These capture exactly the queries beauty professionals type when they decide they want their own suite.");
bullet("Wire up Google Search Console + Google Business Profile + GA4. Without these you cannot see what is actually working — and Google Business Profile alone usually doubles local-pack visibility within 30 days.");

doc.moveDown(0.5);

// ----- 2. CURRENT STATE ------------------------------------------------------

h2("2.  Current State Snapshot");

eyebrow("What is already strong");
bullet("Clean Next.js 16 / App Router architecture; static pre-rendering on all marketing routes.");
bullet("Sitemap (sitemap.ts) and robots.txt are present and well-formed.");
bullet("LocalBusiness JSON-LD is rendered globally in layout.tsx (NAP, geo, image, priceRange).");
bullet("FAQPage JSON-LD is rendered on /faq using the FAQ_ITEMS constant — strong signal for FAQ rich results.");
bullet("Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy) and aggressive image cache headers are configured in next.config.ts.");
bullet("OpenGraph + Twitter card metadata is configured globally with a dedicated 1200×630 OG image.");
bullet("Per-page metadata with canonical URLs is already implemented on most routes.");
bullet("301-equivalent (308) redirect is now in place from /salon-suites-smyrna-ga to / — link equity from the old URL is preserved.");

doc.moveDown(0.4);
eyebrow("What is missing or weak");
bullet("New homepage hero uses raw <img> tags (logo + background) — bypasses Next.js image optimization. Largest Contentful Paint is currently the hero plaza background.");
bullet("Only six URLs in the sitemap. Each profession, each nearby city, and pricing all share the homepage — so the homepage cannibalizes itself.");
bullet("No Service, Offer, Product, BreadcrumbList, Organization, or Review schema. Only LocalBusiness + FAQPage are in place.");
bullet("No Google Analytics 4, no Google Search Console verification, no Google Tag Manager — so SEO performance cannot be measured or course-corrected.");
bullet("Limited internal linking. The new homepage does not link out to /faq, /about, /pricing (does not exist), /book-a-tour copy is the only internal CTA.");
bullet("No blog or content hub for top-of-funnel queries (\"booth rental vs salon suite\", \"how much does a salon suite cost\", \"how to start an independent salon business\").");
bullet("No reviews / testimonials section with structured data — direct hit on E-E-A-T (Experience, Expertise, Authoritativeness, Trust) which Google heavily weights for local services since 2024.");

doc.addPage();

// ----- 3. TECHNICAL FINDINGS -------------------------------------------------

h1("3.  Technical SEO Findings");
muted("Each finding is rated by impact on rankings. Fix HIGH first — they typically move rankings within 30–60 days of indexing.");

findingBlock({
  severity: "high",
  title: "3.1  Replace <img> with next/image inside SalonLandingContent",
  why: "The homepage hero is the page's Largest Contentful Paint. Right now it loads /images/jade-courtyard.webp at full resolution for every viewport, with no fetchpriority hint and no responsive sizes. Core Web Vitals (LCP, INP) are confirmed Google ranking signals; a 3-second mobile LCP versus a 1.5-second LCP can be the difference between page 2 and page 1 for borderline keywords.",
  fix: "Convert the <img> in SalonLandingContent.tsx (the hero-plaza-bg img and the logo-mark-large img) to <Image> from next/image. Add `priority` to the hero image so Next.js emits a <link rel=\"preload\"> and renders responsive srcset/sizes. The hair-wash image and the spa image lower down the page should keep loading=\"lazy\" but should also become <Image>.",
});

findingBlock({
  severity: "high",
  title: "3.2  Set up Google Business Profile + Search Console + GA4",
  why: "For a single-location business in Smyrna, Google Business Profile is the single biggest ranking lever — it powers the Local 3-Pack, Maps results, and the knowledge panel. Search Console tells you which queries are surfacing the site, what pages are indexed, and what is broken. GA4 tells you what is actually converting. None of these are wired up today.",
  fix: "Claim and complete the Google Business Profile (fill every field, add 10+ photos, confirm hours, add the Head Spa as an attribute, add categories: \"Beauty Salon\", \"Hair Salon\", \"Salon Suite Rental\"). Verify the property in Search Console and submit https://smyrnasalonsuites.com/sitemap.xml. Add GA4 via @next/third-parties/google in the root layout. All three are free.",
});

findingBlock({
  severity: "high",
  title: "3.3  Add Service, Offer, BreadcrumbList, and AggregateRating schema",
  why: "Google's local pack and rich result eligibility are heavily driven by structured data. LocalBusiness alone signals \"this is a business\" — but Service, Offer (priced rental tiers), and AggregateRating (review stars) signal \"this is a business that does X, costs Y, and has Z reputation.\" Reviews schema in particular pulls star ratings into the SERP listing.",
  fix: "Add a Service schema for each rental tier (Day Pass, Part-Time, Full-Time) with priceSpecification, areaServed (Smyrna, Vinings, Cumberland, Marietta, Mableton). Add BreadcrumbList JSON-LD on every internal page. Add AggregateRating once at least 5 Google reviews exist. Add Organization schema with sameAs links to the Facebook page and Jade Salon of Atlanta as a parent organization.",
});

findingBlock({
  severity: "medium",
  title: "3.4  Migrate robots.txt and sitemap to dynamic routes",
  why: "The robots.txt in /public is static. As the site adds blog posts, profession pages, and city pages, the sitemap will grow — and a static robots.txt will not pick up changes to BUSINESS.url if the production domain ever differs. Next.js 16 has built-in robots.ts and sitemap.ts file conventions that read the same configuration as the rest of the app.",
  fix: "Create src/app/robots.ts that emits the same content driven from BUSINESS.url. Keep sitemap.ts dynamic; ensure new pages (added per Section 4) are added to it as they ship. Long-term, generate sitemap entries from the routes manifest so it cannot drift.",
});

findingBlock({
  severity: "medium",
  title: "3.5  Strengthen internal linking from the homepage",
  why: "Internal links pass PageRank-equivalent equity and tell Google how the site is structured. Today the homepage only links to /book-a-tour and the new /luxury-salon-suites-smyrna. Once the new ranking pages ship (Section 4), the homepage should link to each of them with descriptive anchor text.",
  fix: "Add an \"Explore\" or \"Who We Serve\" section on the homepage that links to each profession page (\"Salon Suites for Hair Stylists in Smyrna\", \"Barber Suites Smyrna\", \"Nail Tech Suites Smyrna\", etc.) using the target keyword as the anchor text. Add a sub-nav row in the Header (or at minimum a footer column) that lists all the pillar pages.",
});

findingBlock({
  severity: "medium",
  title: "3.6  Improve image alt text for keyword relevance",
  why: "Image alt text is a legitimate ranking signal for image search and reinforces topical relevance for the page itself. Several alt texts on the homepage are generic (\"Salon interior\", \"Premium private salon suite interior with chandelier\").",
  fix: "Rewrite alt text to include the city + suite type where natural. Example: \"Salon interior\" → \"Private salon suite interior in Smyrna, GA at Integrity Heights Plaza\". \"Premium private salon suite interior with chandelier\" → \"Luxury salon suite interior in Smyrna GA with chandelier and styling station\". Do not stuff — keep alt text natural and descriptive.",
});

findingBlock({
  severity: "medium",
  title: "3.7  Add page-level metadata to /book-a-tour, /about, /contact",
  why: "Per-page Title/Description metadata is the single most important on-page factor for click-through rate from the SERP. Generic titles like \"Book a Tour | Smyrna Salon Suites\" can be made far more compelling and keyword-rich.",
  fix: "/book-a-tour → \"Book a Private Tour of Smyrna Salon Suites | Same-Week Appointments\". /about → \"About Smyrna Salon Suites | 20+ Years in Atlanta Beauty\". /contact → \"Contact Smyrna Salon Suites | (470) 662-8690 · Smyrna, GA\". Each meta description should pass the \"would I click this from search?\" test.",
});

findingBlock({
  severity: "low",
  title: "3.8  Add a manifest.ts for PWA / mobile install",
  why: "A web app manifest is a mild trust signal and lets the site appear properly when added to a phone home screen. It is not a direct ranking factor but contributes to Core Web Vitals and \"app-like\" experiences which Google has been emphasizing.",
  fix: "Create src/app/manifest.ts with name, short_name, start_url, theme_color (#1a5c2a — already used in viewport themeColor), background_color, and icon entries pointing to the existing /icon.png and /apple-icon.png.",
});

findingBlock({
  severity: "low",
  title: "3.9  Add `inLanguage` and explicit `geo.areaServed` to LocalBusiness JSON-LD",
  why: "More explicit JSON-LD properties give Google more confidence in classifying the business. areaServed is especially helpful when the physical address is in Smyrna but most clients drive in from Vinings, Cumberland, Marietta, and Mableton.",
  fix: "In layout.tsx, extend the jsonLd object with areaServed (array of GeoCircle / AdministrativeArea covering surrounding cities), inLanguage: \"en-US\", and openingHours (or openingHoursSpecification) once business hours are confirmed.",
});

findingBlock({
  severity: "low",
  title: "3.10  Add review collection automation",
  why: "Reviews are the single biggest local SEO ranking factor (after proximity). A page with 25 recent 5-star reviews ranks above a page with 3 reviews even when the on-page SEO is weaker.",
  fix: "Add a post-tour or 30-day-after-move-in email/SMS asking suite renters to leave a Google review. Embed a one-click review link to the Google Business Profile in every email signature and on the /contact page.",
});

doc.addPage();

// ----- 4. RANKING PAGES ------------------------------------------------------

h1("4.  Pages To Add For First-Page Rankings");
muted("Ranked by expected rank-and-convert ROI. Each page targets a primary keyword that real beauty professionals type into Google when they are ready (or close to ready) to lease a suite.");

h2("Tier 1 — Profession landing pages (highest ROI)");
muted("These five pages cover the actual professions Smyrna Salon Suites serves. Each one matches a keyword cluster that the homepage cannot reasonably win because the homepage tries to speak to all five at once.");

pageBlock({
  url: "/hair-stylist-suites-smyrna-ga",
  h1Text: "Salon Suites for Hair Stylists in Smyrna, GA",
  intent: "Commercial — high",
  primary: "hair stylist suite for rent Smyrna",
  secondary: ["salon chair rental Smyrna GA", "hair stylist studio Smyrna", "private hair stylist room Smyrna"],
  why: "Stylists are the largest segment renting suites and they search with their profession in the query. Searching \"salon suites Smyrna\" returns the homepage; \"hair stylist suite Smyrna\" returns competitors. A dedicated page wins both.",
  brief: "1,000+ words, H1 with primary keyword, photos of suites set up for hair work (chair, mirror, color station, washing reference to the head spa). Embed Jade Salon's Japanese hair straightening + keratin links as authority signals. Strong CTA pair (Book a Tour + Check Availability) above and below the fold. Internal-link to /head-spa-room-rental and /pricing-salon-suites.",
});

pageBlock({
  url: "/barber-suites-smyrna-ga",
  h1Text: "Barber Suite & Chair Rental in Smyrna, GA",
  intent: "Commercial — high",
  primary: "barber suite rental Smyrna",
  secondary: ["barber chair rental Smyrna GA", "barber booth rental Smyrna", "private barber studio Smyrna"],
  why: "Barbers are a high-value, often male segment that searches for their craft specifically and often have higher tolerance for premium pricing.",
  brief: "Same 1,000+ word structure as the stylist page but reframed for barbers. Photos of barber-set-up suites. Mention TVs, music systems, walk-in friendly hours, and how a private suite differs from a barbershop chair rental (income split vs. flat rate).",
});

pageBlock({
  url: "/nail-tech-room-rental-smyrna-ga",
  h1Text: "Nail Tech Room Rental in Smyrna, GA",
  intent: "Commercial — high",
  primary: "nail tech room rental Smyrna",
  secondary: ["nail technician suite rental Smyrna", "nail salon space rental Smyrna GA", "private nail room rental"],
  why: "Nail technicians have very specific space requirements (ventilation, electrical, gel curing). Calling out the suite's suitability lifts conversion meaningfully.",
  brief: "Highlight ventilation, electrical capacity, sink access, dust mitigation, no-shared-product policy. Photos of a nail-station setup. Internal-link to /pricing and /book-a-tour. Add a short FAQ block: \"Can I do gel and acrylic?\", \"Is there a sink?\", \"Can I bring my own chair?\".",
});

pageBlock({
  url: "/esthetician-room-rental-smyrna-ga",
  h1Text: "Esthetician Treatment Room Rental in Smyrna, GA",
  intent: "Commercial — high",
  primary: "esthetician room rental Smyrna",
  secondary: ["esthetician suite Smyrna GA", "facial room rental Smyrna", "private treatment room Smyrna"],
  why: "Estheticians need privacy, dim lighting capability, plumbing access, and skincare-friendly surfaces. Calling these out beats a generic \"salon suite\" page every time for this audience.",
  brief: "Lead with privacy, lockable door, ambient lighting controls. Photos of a clean treatment-room setup. Cross-reference the head spa amenity (massage-style services pair naturally). Mention proximity to upscale Vinings clientele.",
});

pageBlock({
  url: "/braider-loctician-suite-rental-smyrna",
  h1Text: "Braider & Loctician Suite Rental in Smyrna, GA",
  intent: "Commercial — high (low competition)",
  primary: "braider suite rental Smyrna",
  secondary: ["loctician suite rental Atlanta", "braiding salon space Smyrna GA", "private braiding suite"],
  why: "This is an underserved keyword cluster in metro Atlanta. Competition is thin, search volume is real (especially across Smyrna / Mableton / South Cobb). Likely first-page within 60–90 days of indexing if the page is well built.",
  brief: "Lead with longer-appointment-friendly hours, suitable for 6–8 hour braiding sessions. Mention waiting area for clients, restroom access, secure storage for hair extensions. Photos of a braider-friendly setup. Internal-link prominently from the homepage.",
});

doc.addPage();

h2("Tier 2 — Geographic landing pages");
muted("These pages capture nearby city searches. Each one repeats the value proposition but is tuned to convince a stylist in (e.g.) Vinings that the 6-minute drive to Smyrna is worth it.");

pageBlock({
  url: "/salon-suites-near-vinings-ga",
  h1Text: "Salon Suites Near Vinings, GA",
  intent: "Commercial — high (geographic)",
  primary: "salon suites near Vinings",
  secondary: ["salon suites Vinings GA", "salon suite rental Vinings", "hair salon Vinings GA suite"],
  why: "Vinings is high-income and 6 minutes from the Integrity Heights Plaza. A dedicated page makes the geographic value prop explicit (\"5 minutes from Vinings, free parking, easier than booking a Buckhead suite\").",
  brief: "Open with drive-time map (Google Maps embed centered on Vinings), Vinings demographic mention, parking ease vs. Buckhead/Atlanta. Same suite/amenity content as the homepage but reframed for a Vinings reader.",
});

pageBlock({
  url: "/salon-suites-near-cumberland-the-battery",
  h1Text: "Salon Suites Near Cumberland & The Battery, GA",
  intent: "Commercial — high (geographic)",
  primary: "salon suites near Cumberland Atlanta",
  secondary: ["salon suite rental Cumberland mall", "Battery Atlanta salon suite", "salon near The Battery"],
  why: "Cumberland and The Battery have high foot traffic, lots of beauty professionals, and \"near The Battery\" is a real search pattern.",
  brief: "Mention proximity to Cumberland Mall, The Battery Atlanta, Truist Park. Reframe the Plaza's I-285 access as the central convenience point.",
});

pageBlock({
  url: "/salon-suites-mableton-ga",
  h1Text: "Salon Suites Near Mableton, GA",
  intent: "Commercial — medium",
  primary: "salon suites Mableton GA",
  secondary: ["salon suite rental near Mableton", "salon space Mableton stylist"],
  why: "Mableton is geographically close, growing, and an underserved area for premium suite rentals.",
  brief: "Drive-time block from Mableton (10–12 minutes), highway access via East-West Connector. Otherwise same evergreen content.",
});

pageBlock({
  url: "/salon-suites-marietta-ga",
  h1Text: "Salon Suites Near Marietta, GA",
  intent: "Commercial — medium",
  primary: "salon suites near Marietta GA",
  secondary: ["salon suite rental Marietta", "Marietta hair salon suite"],
  why: "Larger city, more competition for the term, but worth pursuing because Marietta has many independent stylists already searching.",
  brief: "Lead with the difference between a Marietta booth rental and a private suite. Drive-time from East Cobb / Marietta Square.",
});

doc.addPage();

h2("Tier 3 — Service & amenity pages");

pageBlock({
  url: "/private-head-spa-room-rental-smyrna",
  h1Text: "Private Head Spa Room Rental in Smyrna, GA",
  intent: "Commercial — high",
  primary: "head spa room rental Smyrna",
  secondary: ["Japanese head spa rental Atlanta", "scalp treatment room rental Smyrna", "head spa equipment rental"],
  why: "This is the unique amenity that no competitor in metro Atlanta offers as a rentable room to suite tenants. Owning the keyword cements competitive moat and pulls in stylists evaluating other suite providers.",
  brief: "Photos of the head spa room, scope-camera, scalp steam equipment. Hourly rate. Three free hours per week per resident stylist (already in the messaging). Add a short \"What is a Japanese head spa?\" educational section to capture top-of-funnel.",
});

pageBlock({
  url: "/pricing-salon-suites-smyrna",
  h1Text: "Salon Suite Pricing in Smyrna, GA — Day, Part-Time, & Full-Time Plans",
  intent: "Commercial — high",
  primary: "salon suite cost Smyrna",
  secondary: ["how much does a salon suite cost Smyrna", "salon suite rates Atlanta", "salon suite pricing GA"],
  why: "\"Cost\" / \"price\" / \"rates\" are bottom-of-funnel keywords. Currently the homepage and /book-a-tour both say \"Call for Details\" — but a transparent pricing page (even if the actual numbers say \"starting at\" + \"call for current pricing\") wins clicks and trust.",
  brief: "Three-tier table (Day, Part-Time, Full-Time) with what is included in each. Comparison row: \"What you would pay at a traditional booth rental\" vs. \"What you pay here\". CTA to schedule a tour at the bottom.",
});

pageBlock({
  url: "/tour",
  h1Text: "Take a Virtual Tour of Smyrna Salon Suites",
  intent: "Commercial — medium",
  primary: "Smyrna salon suites tour",
  secondary: ["virtual tour salon suite Smyrna", "see salon suites Smyrna GA"],
  why: "Adding a video tour or photo gallery boosts engagement metrics (dwell time, scroll depth) which feed back into rankings. Also gives sales-qualified leads a low-friction way to get serious before booking.",
  brief: "30–60 second walkthrough video (phone camera is fine), 12+ high-quality photos, embedded floor plan. The video itself can be uploaded to YouTube and embedded — the YouTube listing becomes an additional ranking surface for \"Smyrna Salon Suites\".",
});

pageBlock({
  url: "/testimonials  (or  /success-stories)",
  h1Text: "Smyrna Salon Suites Reviews & Success Stories",
  intent: "Trust — high",
  primary: "Smyrna Salon Suites reviews",
  secondary: ["Smyrna Salon Suites testimonials", "salon suite reviews Smyrna"],
  why: "Pulls in branded \"reviews\" searches (high-intent — visitor is evaluating the business) and provides E-E-A-T signal. Pair with AggregateRating JSON-LD once 5+ Google reviews exist.",
  brief: "Quote 6–10 current suite renters with name, profession, photo (with permission), and a 1-paragraph success story. Embed the latest 3 Google reviews via the Places API. Cross-link to /book-a-tour with copy like \"Hear it from the team — book your private tour\".",
});

doc.addPage();

h2("Tier 4 — Blog / topical authority (slow burn, big payoff)");
muted("These are top-of-funnel articles that capture researchers and build domain authority. They typically take 3–6 months to rank but the payoff compounds — every additional article makes the next one rank faster.");

pageBlock({
  url: "/blog/salon-suite-rental-cost-smyrna",
  h1Text: "How Much Does a Salon Suite Cost in Smyrna, GA?",
  intent: "Informational — high commercial overlap",
  primary: "how much does a salon suite cost",
  secondary: ["salon suite rental cost Atlanta", "salon suite price 2026", "average salon suite cost"],
  why: "High monthly search volume, mostly research-stage stylists who will become commercial-stage in the next 30–90 days. The first article that comprehensively answers the question becomes a long-term traffic engine.",
  brief: "Cover ranges in metro Atlanta, what is and is not included in typical pricing, hidden costs (utilities, supplies, marketing), break-even math (\"how many clients per week to cover your suite\"), then naturally surface Smyrna Salon Suites as the example with transparent included amenities.",
});

pageBlock({
  url: "/blog/booth-rental-vs-salon-suite-rental",
  h1Text: "Booth Rental vs. Salon Suite Rental: Which Is Right for You?",
  intent: "Informational",
  primary: "booth rental vs salon suite",
  secondary: ["salon booth rental vs suite", "is a salon suite worth it", "salon suite advantages"],
  why: "Captures stylists at the moment they decide what kind of space they want. Whoever ranks here gets first-mover access to that decision.",
  brief: "Honest comparison: cost, privacy, branding, taxes (1099 vs. employee), client experience. Lean toward salon suites when the math supports it but be balanced — Google rewards even-handed content.",
});

pageBlock({
  url: "/blog/how-to-start-an-independent-salon-business",
  h1Text: "How to Start an Independent Salon Business in Atlanta",
  intent: "Informational",
  primary: "how to start a salon business",
  secondary: ["independent stylist business Atlanta", "going independent as a stylist Georgia", "open salon suite business"],
  why: "Top-of-funnel, broad. Captures researchers months before they are ready to lease. Email-capture at the bottom feeds future tour bookings.",
  brief: "Licenses, insurance, GA business registration, choosing a space, building a client book, marketing on Instagram, retention. Embed a downloadable checklist (gated by email).",
});

pageBlock({
  url: "/blog/what-is-a-japanese-head-spa-treatment",
  h1Text: "What Is a Japanese Head Spa Treatment? A Stylist's Guide",
  intent: "Informational",
  primary: "what is a Japanese head spa",
  secondary: ["Japanese head spa benefits", "head spa treatment explained", "scalp treatment Atlanta"],
  why: "Head Spa is trending and the volume is rising fast. Owning this informational keyword strengthens topical authority for the head-spa-room-rental commercial page.",
  brief: "Explain origins, technique, equipment, expected results. Cross-link to /private-head-spa-room-rental and to Jade Salon of Atlanta's existing service pages as authority signals.",
});

doc.addPage();

// ----- 5. ROADMAP ------------------------------------------------------------

h1("5.  Suggested 90-Day Roadmap");

h3("Weeks 1–2  ·  Quick wins");
bullet("Replace <img> with next/image in SalonLandingContent (Section 3.1).");
bullet("Claim Google Business Profile, verify, fill 100% of fields, upload 10–15 photos (Section 3.2).");
bullet("Wire Google Search Console + GA4 + submit sitemap (Section 3.2).");
bullet("Write meta descriptions for /book-a-tour, /about, /contact (Section 3.7).");
bullet("Add BreadcrumbList JSON-LD to all internal pages (Section 3.3).");

h3("Weeks 3–6  ·  Tier 1 ranking pages");
bullet("Ship hair stylist + barber pages first (highest volume keyword cluster).");
bullet("Then nail tech + esthetician pages.");
bullet("Then braider/loctician page (lowest competition — quickest first-page win).");
bullet("Add Service + Offer JSON-LD to each page (Section 3.3).");
bullet("Add internal links from homepage to each profession page with keyword-matched anchor text.");

h3("Weeks 7–10  ·  Tier 2 + Tier 3");
bullet("Vinings, Cumberland, Mableton, Marietta geographic pages.");
bullet("Pricing page with three-tier comparison.");
bullet("Head Spa Room Rental dedicated page.");
bullet("Virtual tour page with embedded video + 12+ photos.");
bullet("Begin actively requesting Google reviews from current suite renters.");

h3("Weeks 11–13  ·  Authority content");
bullet("First two blog posts: \"Salon suite cost\" + \"Booth rental vs. salon suite\".");
bullet("Add AggregateRating JSON-LD once 5 reviews are live (Section 3.3).");
bullet("Add testimonials/success-stories page.");
bullet("Audit Search Console: which queries are surfacing? Double down on what is working.");

doc.moveDown(0.6);
hRule(COLORS.gold, 1.2);
doc.moveDown(0.4);

eyebrow("Expected outcomes (cautious estimates)");
bullet("First-page rank for \"luxury salon suites Smyrna GA\" and \"salon suites Smyrna\" within 60 days of homepage launch + Search Console verification.");
bullet("First-page rank for the braider/loctician + nail tech queries within 60–90 days of those pages going live (low competition).");
bullet("First-page rank for hair stylist + barber + esthetician queries within 90–120 days.");
bullet("First-page rank for the geographic queries (Vinings, Cumberland, etc.) within 90–120 days.");
bullet("Local 3-Pack appearance for \"salon suites near me\" inside Smyrna / Vinings / Cumberland inside 60 days of Google Business Profile verification + first 5 reviews.");
bullet("Blog rankings start materializing at month 3–6, compound from there.");

doc.moveDown(1);
muted(
  "These estimates assume the technical fixes in Section 3 are completed, each new page is 800+ words of original content, and no Google algorithm event interrupts. Real-world ranking is non-deterministic and we do not control Google."
);

// ----- FOOTERS ---------------------------------------------------------------

const range = doc.bufferedPageRange();
for (let i = 0; i < range.count; i++) {
  doc.switchToPage(i);
  const oldBottom = doc.page.margins.bottom;
  doc.page.margins.bottom = 0;
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(COLORS.light)
    .text(
      "Smyrna Salon Suites · Technical SEO Audit · May 2026",
      doc.page.margins.left,
      doc.page.height - 32,
      {
        width: CONTENT_W,
        align: "left",
      }
    );
  doc.text(`${i + 1} / ${range.count}`, doc.page.margins.left, doc.page.height - 32, {
    width: CONTENT_W,
    align: "right",
  });
  doc.page.margins.bottom = oldBottom;
}

doc.end();

console.log(`PDF written: ${OUTPUT}`);

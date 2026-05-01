"use client";

import { useEffect, useRef } from "react";
import "./salon-landing.css";

type Props = { fontClass: string };

const GOOGLE_PROFILE_URL = "https://www.google.com/maps/search/?api=1&query=Smyrna+Salon+Suites+Smyrna+GA";
const FACEBOOK_URL = "https://www.facebook.com/";
const BOOK_TOUR_URL = "/book-a-tour";
const CHECK_AVAIL_URL = "/book-a-tour";

function CtaPair({ className = "", small = false }: { className?: string; small?: boolean }) {
  const padding = small ? { padding: "13px 26px", fontSize: "0.78rem" } : undefined;
  return (
    <div className={`cta-pair ${className}`}>
      <a className="btn" href={BOOK_TOUR_URL} style={padding}>
        <span>Book a Tour</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
      <a className="btn btn-outline" href={CHECK_AVAIL_URL} style={padding}>
        <span>Check Availability</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </a>
    </div>
  );
}

export default function SalonLandingContent({ fontClass }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const particles = particlesRef.current;
    if (particles && particles.childElementCount === 0) {
      for (let i = 0; i < 24; i++) {
        const p = document.createElement("span");
        const size = 2 + Math.random() * 4;
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.left = Math.random() * 100 + "%";
        p.style.bottom = -5 - Math.random() * 20 + "%";
        p.style.animationDuration = 8 + Math.random() * 14 + "s";
        p.style.animationDelay = Math.random() * 12 + "s";
        p.style.opacity = String(0.3 + Math.random() * 0.5);
        particles.appendChild(p);
      }
    }

    const revealEls = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    const statEls = root.querySelectorAll<HTMLElement>(".stat .num");
    const statObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const raw = el.textContent?.trim() || "";
          const match = raw.match(/^(\d+)(.*)$/);
          if (match) {
            const target = parseInt(match[1], 10);
            const originalHTML = el.innerHTML;
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 40));
            el.textContent = "0";
            const run = () => {
              current += step;
              if (current >= target) {
                el.innerHTML = originalHTML;
                return;
              }
              el.textContent = String(current);
              setTimeout(run, 30);
            };
            run();
          }
          statObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    statEls.forEach((el) => statObs.observe(el));

    return () => {
      io.disconnect();
      statObs.disconnect();
    };
  }, []);

  return (
    <div ref={rootRef} className={`${fontClass} salon-landing`}>
      {/* ========= HERO — Jade's spec: Luxury headline + dual CTAs ========= */}
      <section className="hero-plaza">
        <div className="hero-plaza-bg">
          <img src="/images/jade-courtyard.webp" alt="Luxury salon suites at Smyrna Salon Suites in Integrity Heights Plaza" />
          <div className="hero-plaza-overlay" />
        </div>
        <div className="hero-plaza-content">
          <span className="hero-availability-pill">
            <span className="dot" />
            Limited Suites Available
          </span>

          <h1 className="hero-luxury-h1">
            Luxury Salon Suites <em>in Smyrna, GA</em>
          </h1>

          <p className="hero-luxury-sub">
            Private, fully furnished suites + exclusive Head Spa access
          </p>

          <div className="brand-divider" aria-hidden="true">
            <span className="ln" />
            <span className="dot" />
            <span className="ln" />
          </div>

          <CtaPair className="hero-cta-pair" />

          <p className="hero-microcopy">
            Boutique setting · A limited number of suites · By appointment only
          </p>
        </div>
        <div className="scroll-indicator">Scroll</div>
      </section>

      {/* ========= INTRO — first paragraph on white ========= */}
      <section className="block intro-white">
        <div className="container">
          <div className="reveal">
            <span className="section-eyebrow">Welcome</span>
            <h2 className="intro-heading">
              A career upgrade for <em>beauty professionals.</em>
            </h2>
            <p className="intro-lead">
              Jade Salon of Atlanta proudly introduces{" "}
              <strong>Smyrna Salon Suites</strong>, a premier luxury salon suite destination in
              Smyrna, Georgia, designed for ambitious beauty professionals ready to elevate their
              brand and income. Created by owners{" "}
              <strong>Jade and Baldem Gonzalez</strong>, established industry experts with over 20
              years of experience, this upscale concept blends sophistication, functionality, and
              real business opportunity.
            </p>
            <p className="intro-lead">
              Smyrna Salon Suites offers fully equipped, modern suites in a high-end environment
              where stylists can deliver exceptional client experiences while building their own
              independent business. With a focus on growth, innovation, and elevated services, this
              is more than just a workspace. It is a career upgrade. Ideally located in the
              Smyrna/Atlanta area, our salon suites provide the perfect setting to attract premium
              clientele, increase revenue, and stand out in a competitive beauty market.
            </p>
            <CtaPair className="intro-cta-row" />
          </div>
          <div className="hero-stats reveal delay-1">
            <div className="stat">
              <span className="num" dangerouslySetInnerHTML={{ __html: "20<sup>+</sup>" }} />
              <span className="lbl">Years Experience</span>
            </div>
            <div className="stat">
              <span className="num" dangerouslySetInnerHTML={{ __html: "3<sup>hr</sup>" }} />
              <span className="lbl">Weekly Spa Access</span>
            </div>
            <div className="stat">
              <span className="num" dangerouslySetInnerHTML={{ __html: "100<sup>%</sup>" }} />
              <span className="lbl">Move-In Ready</span>
            </div>
            <div className="stat">
              <span className="num">I-285</span>
              <span className="lbl">Prime Location</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========= SUITES + HEAD SPA ========= */}
      <section className="block suites-spa" id="suites">
        <div className="container split">
          <div className="section-text reveal">
            <span className="section-eyebrow">Our Space</span>
            <h2>
              Beautifully Furnished <em>Salon Suites</em> and Head Spa
            </h2>
            <p>
              What truly sets Smyrna Salon Suites apart is our exclusive access to a private Head
              Spa room, a rare and powerful advantage for beauty professionals searching for salon
              suites for rent in Smyrna, GA. This fully equipped, ready-to-use space allows our
              renters to offer luxury head spa treatments, scalp therapy services, and high-end
              wellness experiences without the cost of building their own head spa.
            </p>
            <p>
              By adding these high-demand services, you can attract new clientele, increase your
              service pricing, and position your brand as a premium provider in the Smyrna and
              Metro Atlanta area. In addition to our beautifully designed, fully furnished salon
              suites, this one-of-a-kind amenity gives you the ability to grow your business,
              expand your service menu, and stand out in a competitive market.
            </p>
            <CtaPair className="cta-row-mt" />
          </div>
          <div className="clean-image reveal delay-1">
            <img
              src="/images/hair-wash.webp"
              onError={(e) => {
                const el = e.currentTarget;
                el.onerror = null;
                el.src = "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=80";
              }}
              alt="Relaxing head spa scalp and hair treatment at Smyrna Salon Suites"
              loading="lazy"
            />
            <div className="clean-image-caption">
              <span className="cap-eyebrow">Our Private Head Spa</span>
              <span className="cap-title">Ready for you to use.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========= BENEFITS OF OFFERING HEAD SPA SERVICES ========= */}
      <section className="block benefits-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: 900, margin: "0 auto 20px" }}>
            <span className="section-eyebrow">Grow Your Income</span>
            <h2>
              Benefits of Offering <em>Head Spa Services</em>
            </h2>
          </div>
          <div className="benefits-body reveal delay-1">
            <p>
              Offering head spa treatments inside your Smyrna salon suite is more than just a
              trend. It is a powerful way to elevate your services, boost revenue, and deliver real
              results your clients can see and feel. Our head spa experience focuses on essential
              hair and scalp health, helping clients address concerns like dryness, buildup,
              thinning, and overall scalp balance while enjoying a deeply relaxing, luxury service.
            </p>
            <p>
              Stylists can easily upsell premium add-ons such as scalp scope analysis, scalp
              exfoliation, and steam-infused deep conditioning masks, creating a high-end
              experience that keeps clients coming back.
            </p>
            <p>
              Even better, we provide stylists with{" "}
              <strong>three complimentary hours each week</strong> of free access to our fully
              equipped spa room, giving you the opportunity to offer these in-demand services
              without additional overhead. In fact, performing just two head spa treatments per
              week can realistically cover your entire salon suite rent, making this not only a
              client favorite, but a smart, income-generating addition to your business in Smyrna.
            </p>
          </div>
          <div className="reveal delay-2" style={{ textAlign: "center", marginTop: 40 }}>
            <CtaPair />
          </div>
        </div>
      </section>

      {/* ========= FEATURES — interactive bullet points ========= */}
      <section className="block features-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 50px" }}>
            <span className="section-eyebrow">What&apos;s Included</span>
            <h2>
              Everything You Need, <em>Built for Your Brand</em>
            </h2>
          </div>
          <div className="features-grid">
            <div className="feature-item reveal">
              <div className="feat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>Fully Furnished</h3>
              <p>Move-in ready suites with everything you need to serve clients from day one.</p>
            </div>
            <div className="feature-item reveal delay-1">
              <div className="feat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Flexible Plans</h3>
              <p>Daily, part-time, and full-time rental options to fit every stage of your business.</p>
            </div>
            <div className="feature-item reveal delay-2">
              <div className="feat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5" />
                </svg>
              </div>
              <h3>Elevated Environment</h3>
              <p>An exclusive, refined atmosphere built for you and the clients you serve.</p>
            </div>
            <div className="feature-item reveal delay-3">
              <div className="feat-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>Prime Location</h3>
              <p>Minutes from Vinings and I-285, perfectly placed for Metro Atlanta clients.</p>
            </div>
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: 50 }}>
            <CtaPair />
          </div>
        </div>
      </section>

      {/* ========= LOCATION ========= */}
      <section className="block location" id="location">
        <div className="container split">
          <div className="section-text reveal">
            <span className="section-eyebrow">The Location</span>
            <h2>
              Prime Salon Suites Location <em>in Metro Atlanta</em>
            </h2>
            <p>
              Conveniently located near Vinings and I-285 in the heart of the Metro Atlanta area,
              Smyrna Salon Suites offers a prime, high-visibility location for beauty professionals
              seeking salon suites for rent in Smyrna, GA. Just minutes from Vinings and a short
              drive to Atlanta, this central location makes it easy to attract and serve a diverse,
              upscale clientele while benefiting from convenient access to major highways and
              surrounding high-traffic communities.
            </p>
            <p>
              Designed for independent hairstylists, cosmetologists, and beauty entrepreneurs, our
              fully furnished salon suites provide a polished, private environment with flexible
              rental options to support your growth. With modern amenities, a professional
              atmosphere, and opportunities to elevate your services, Smyrna Salon Suites delivers
              everything you need to build your brand, increase your income, and create an
              exceptional client experience in one of Metro Atlanta&apos;s most desirable locations.
            </p>
            <p>
              <strong>A limited number of suites are available.</strong> Schedule your private tour
              today.
            </p>

            <div className="location-actions">
              <CtaPair />

              <div className="social-row">
                <a className="social-chip" href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
                  </svg>
                  <span>Google Profile</span>
                </a>
                <a className="social-chip" href={FACEBOOK_URL} target="_blank" rel="noopener">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div className="reveal delay-1">
            <div className="map-card">
              <div className="map-badge">
                <span className="dot" />
                Smyrna · Vinings
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Smyrna%20Salon%20Suites%2C%20Smyrna%2C%20GA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smyrna Salon Suites, Smyrna, GA"
                allowFullScreen
              />
              <div className="map-overlay">
                <div className="sub">You Are Here</div>
                <div className="name">Smyrna Salon Suites</div>
                <a
                  className="directions"
                  href="https://www.google.com/maps/search/?api=1&query=Smyrna+Salon+Suites+Smyrna+GA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= SIGNATURE SERVICES FROM OUR ANCHOR SALON ========= */}
      <section className="block signature-anchor" id="heritage">
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 50px" }}>
            <span className="section-eyebrow">Our Anchor Salon</span>
            <h2>
              Signature Services from{" "}
              <em>
                <a
                  href="https://jadesalonofatlanta.com/"
                  target="_blank"
                  rel="noopener"
                  className="heritage-link"
                >
                  Jade Salon of Atlanta
                </a>
              </em>
            </h2>
            <p
              className="section-text"
              style={{ fontSize: "1.05rem", marginTop: 18 }}
            >
              Built by the team behind Jade Salon of Atlanta, a trusted name in the Atlanta beauty
              scene for more than two decades. Explore the signature services offered at our
              anchor salon.
            </p>
          </div>

          <div className="sig-cards">
            <a
              className="sig-card reveal"
              href="https://jadesalonofatlanta.com/japanese-hair-straightening/"
              target="_blank"
              rel="noopener"
            >
              <div className="sig-card-num">01</div>
              <h3>Japanese Hair Straightening in Smyrna</h3>
              <p>
                Precision straightening for permanently sleek, smooth, and manageable hair.
              </p>
              <span className="sig-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
            <a
              className="sig-card reveal delay-1"
              href="https://jadesalonofatlanta.com/brazilian-keratin-treatment/"
              target="_blank"
              rel="noopener"
            >
              <div className="sig-card-num">02</div>
              <h3>Brazilian Blowout &amp; Keratin Treatments</h3>
              <p>
                Professional frizz-reducing treatments that leave hair shiny, soft, and easy to
                maintain.
              </p>
              <span className="sig-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
            <a
              className="sig-card reveal delay-2"
              href="https://jadesalonofatlanta.com/services-pricing/"
              target="_blank"
              rel="noopener"
            >
              <div className="sig-card-num">03</div>
              <h3>Hair Color Services in Smyrna</h3>
              <p>
                Customized color, from dimensional highlights to full transformations, tailored to
                each client.
              </p>
              <span className="sig-card-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: 55 }}>
            <CtaPair />
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: 22 }}>
            <a
              className="btn btn-outline"
              href="https://jadesalonofatlanta.com/services-pricing/"
              target="_blank"
              rel="noopener"
            >
              <span>View All Services at Jade Salon of Atlanta</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ========= EXPERIENCE LINK ========= */}
      <section className="block experience-link-section">
        <div className="container reveal">
          <div className="experience-link-card">
            <span className="section-eyebrow">Want the Full Story?</span>
            <h2>
              Explore the <em>Smyrna Salon Suites Experience</em>
            </h2>
            <p>
              See the suites, the atmosphere, the philosophy, and what daily life looks like for
              the boutique group of professionals who call this space home.
            </p>
            <a className="btn btn-outline" href="/luxury-salon-suites-smyrna">
              <span>View The Experience</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ========= FINAL INVITATION ========= */}
      <section className="final-invite">
        <div className="invite-particles" ref={particlesRef} />

        {(["tl", "tr", "bl", "br"] as const).map((c) => (
          <svg
            key={c}
            className={`ornament-corner ${c}`}
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <path d="M10,10 L10,40 M10,10 L40,10" strokeLinecap="round" />
            <path d="M10,55 Q25,55 25,40 Q25,25 10,25" opacity="0.7" />
            <circle cx="10" cy="10" r="2" fill="currentColor" stroke="none" />
            <circle cx="40" cy="40" r="1.5" fill="currentColor" stroke="none" opacity="0.6" />
          </svg>
        ))}

        <div className="invite-content reveal">
          <div className="invite-eyebrow">
            <span className="dot" />
            Limited Availability
            <span className="dot" />
          </div>

          <h2 className="invite-heading">
            Come see <em>the space.</em>
            <br />
            Book your <em>private tour.</em>
          </h2>

          <p className="invite-sub">A quiet walkthrough, entirely on your schedule.</p>

          <div className="invite-divider" aria-hidden="true">
            <span className="ln" />
            <svg className="orn" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="20" cy="20" r="14" opacity="0.5" />
              <circle cx="20" cy="20" r="7" />
              <path d="M20,6 L20,2 M20,38 L20,34 M6,20 L2,20 M38,20 L34,20" strokeLinecap="round" />
              <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none" />
            </svg>
            <span className="ln" />
          </div>

          <div className="invite-pills">
            <span className="invite-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Private Walkthrough
            </span>
            <span className="invite-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Approx. 30 Minutes
            </span>
            <span className="invite-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              By Appointment
            </span>
          </div>

          <p className="invite-body">
            We keep our suite count intentionally small. It is part of what makes this place feel
            the way it does. Openings are not always available, so if you feel it is time for your
            next chapter, reach out while there is still room for you here.
          </p>

          <div className="invite-ctas">
            <a className="btn-invite primary" href={BOOK_TOUR_URL}>
              <span>Book a Tour</span>
              <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a className="btn-invite secondary" href={CHECK_AVAIL_URL}>
              <span>Check Availability</span>
              <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </a>
          </div>

          <div className="invite-signature">
            <div className="script">We can&apos;t wait to welcome you in.</div>
            <div className="team">The Smyrna Salon Suites Team</div>
          </div>
        </div>
      </section>
    </div>
  );
}

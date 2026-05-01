'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ConsultationForm from '../components/ConsultationForm';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [heroImgReady, setHeroImgReady] = useState(false);
  const [credImgReady, setCredImgReady] = useState(false);
  const [aboutImgReady, setAboutImgReady] = useState(false);
  const [billImgReady, setBillImgReady] = useState(false);

  const heroLeftRef = useRef(null);
  const heroRightRef = useRef(null);
  const heroImgRef = useRef(null);
  const heroSectionRef = useRef(null);
  const particleContainerRef = useRef(null);
  const scrollYRef = useRef(0);

  // Track scroll for hero parallax
  useEffect(() => {
    const onScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // PARTICLES (home-only)
  useEffect(() => {
    const ptcl = particleContainerRef.current;
    if (!ptcl) return;
    ptcl.innerHTML = '';
    for (let i = 0; i < 24; i++) {
      const p = document.createElement('div');
      p.className = 'pt';
      const s = Math.random() * 6 + 3;
      const z = Math.random() * 600 - 300;
      p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;background:${
        Math.random() > 0.5 ? 'rgba(9,168,130,0.6)' : 'rgba(196,147,42,0.5)'
      };animation-duration:${Math.random() * 14 + 9}s;animation-delay:${Math.random() * 9}s;--z:${z}px`;
      ptcl.appendChild(p);
    }
  }, []);

  // HERO 3D PARALLAX
  useEffect(() => {
    const onMove = (e) => {
      const heroSection = heroSectionRef.current;
      if (!heroSection || scrollYRef.current > heroSection.offsetHeight) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rX = ((e.clientY - cy) / cy) * -5;
      const rY = ((e.clientX - cx) / cx) * 5;

      if (heroLeftRef.current) {
        heroLeftRef.current.style.transition = 'transform 0.1s ease-out';
        heroLeftRef.current.style.transform = `perspective(1200px) rotateX(${rX}deg) rotateY(${rY}deg) translateZ(20px)`;
      }
      if (heroRightRef.current) {
        heroRightRef.current.style.transition = 'transform 0.1s ease-out';
        heroRightRef.current.style.transform = `perspective(1200px) rotateX(${rX * 0.5}deg) rotateY(${rY * 0.5}deg) translateZ(10px)`;
      }
      if (heroImgRef.current) {
        heroImgRef.current.style.transition = 'transform 0.1s ease-out';
        heroImgRef.current.style.transform = `scale(1.08) translate3d(${rY * -3}px, calc(${rX * -3}px + ${scrollYRef.current * 0.22}px), 0)`;
      }
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  // HERO ENTRANCE
  useEffect(() => {
    const seq = [
      ['hbadge', 150],
      ['hh1', 380],
      ['hdesc', 620],
      ['hctas', 840],
      ['hc1', 900],
      ['hstat', 1060],
    ];
    const timers = seq.map(([id, delay]) =>
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.transition = 'all 0.95s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // COUNT UP
  useEffect(() => {
    const cobs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !e.target.dataset.done) {
            e.target.dataset.done = '1';
            const t = +e.target.dataset.t;
            const dur = 1900;
            let s = null;
            const step = (ts) => {
              if (!s) s = ts;
              const p = Math.min((ts - s) / dur, 1);
              const ease = 1 - Math.pow(1 - p, 4);
              e.target.textContent = Math.round(ease * t);
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll('.count').forEach((el) => cobs.observe(el));

    const t = setTimeout(() => {
      document.querySelectorAll('[data-target]').forEach((el) => {
        const target = +el.dataset.target;
        const dur = 1600;
        let s = null;
        const step = (ts) => {
          if (!s) s = ts;
          const p = Math.min((ts - s) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          el.textContent = Math.round(ease * target);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, 1200);

    return () => {
      cobs.disconnect();
      clearTimeout(t);
    };
  }, []);

  const toggleFaq = (i) => setActiveFaq((v) => (v === i ? null : i));

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home" ref={heroSectionRef}>
        <div className="hero-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={heroImgRef}
            className={heroImgReady ? 'rdy' : ''}
            onLoad={() => setHeroImgReady(true)}
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1900&q=90"
            alt="Doctor"
          />
        </div>
        <div className="hero-grad"></div>
        <div className="hero-grad2"></div>
        <div className="hero-ptcl" ref={particleContainerRef}></div>
        <div className="hero-inner">
          <div ref={heroLeftRef}>
            <div className="hbadge" id="hbadge">
              <div className="hbdot"></div>
              <span className="hbtxt">Trusted by Providers Nationwide</span>
            </div>
            <h1 className="hh1" id="hh1">
              Credentialing That Clears<br />
              <em>Every Barrier.</em>
            </h1>
            <p className="hdesc" id="hdesc">
              Quad Healthcare Solutions handles the full complexity of provider enrollment, CAQH maintenance, and insurance contracting — so you can focus entirely on patient care.
            </p>
            <div className="hctas" id="hctas">
              <Link href="/contact" className="bteal">Start Your Enrollment →</Link>
              <Link href="/services" className="bghost">View Services</Link>
            </div>
          </div>
          <div className="hright" id="hright" ref={heroRightRef}>
            <div className="hcard" id="hc1">
              <div className="hcard-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1645066928295-2506defde470?w=700&q=85" alt="Doctor in white coat" />
              </div>
              <div className="hcard-body">
                <div className="hcard-label">Primary Service</div>
                <div className="hcard-title">Medical Credentialing</div>
                <div className="hcard-text">Full payer enrollment managed start to finish — CAQH, NPI, contracts, and follow-up.</div>
                <div className="hcard-bar"></div>
              </div>
            </div>
            <div className="hstat" id="hstat">
              <div className="hstat-num" data-target="98">0</div>
              <div className="hstat-label">% Approval<br />Rate</div>
              <div style={{ width: 1, height: 44, background: 'rgba(255,255,255,0.12)', margin: '0 4px' }}></div>
              <div className="hstat-num" data-target="14">0</div>
              <div className="hstat-label">Day Avg.<br />Enrollment</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust">
        <div className="trust-in">
          <div className="tstat rv d1">
            <div className="tnum">
              <span className="count a" data-t="500">0</span>
              <span className="a">+</span>
            </div>
            <div className="tlbl">Providers Credentialed</div>
          </div>
          <div className="tdiv"></div>
          <div className="tstat rv d2">
            <div className="tnum">
              <span className="count a" data-t="98">0</span>
              <span className="a">%</span>
            </div>
            <div className="tlbl">Approval Rate</div>
          </div>
          <div className="tdiv"></div>
          <div className="tstat rv d3">
            <div className="tnum">
              <span className="count a" data-t="14">0</span>
              <span className="a"> Days</span>
            </div>
            <div className="tlbl">Avg. Enrollment Time</div>
          </div>
          <div className="tdiv"></div>
          <div className="tpayers rv d4">
            <div className="tplbl">Payer Network</div>
            <div className="tprow">
              <span className="tpill">Aetna</span>
              <span className="tpill">Humana</span>
              <span className="tpill">BCBS</span>
              <span className="tpill">Optum</span>
              <span className="tpill">Magellan</span>
              <span className="tpill">Molina</span>
              <span className="tpill">CareSource</span>
            </div>
          </div>
        </div>
      </div>

      {/* CREDENTIALING */}
      <section className="cred-sec" id="credentialing">
        <div className="cred-in">
          <div className="cred-head">
            <div className="rl">
              <div className="cred-hero-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={credImgReady ? 'rdy' : ''}
                  onLoad={() => setCredImgReady(true)}
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=900&q=88"
                  alt="Doctor reviewing credentialing documents"
                />
                <div className="cib-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(7,22,40,0.65),transparent 60%)' }}></div>
                <div className="cred-img-badge">
                  <div className="cib-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v18" />
                      <path d="M3 21h18" />
                      <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
                      <path d="M9 11h6" />
                      <path d="M12 8v6" />
                    </svg>
                  </div>
                  <div>
                    <div className="cib-text">End-to-End Credentialing</div>
                    <div className="cib-sub">All payers. All specialties. Full follow-up.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rr">
              <div style={{ marginBottom: 8, display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal)' }}>
                <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal)' }}></span>Our Core Service
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,4vw,56px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.1, marginTop: 18 }}>
                Medical<br /><span style={{ color: 'var(--teal)' }}>Credentialing</span> &amp;<br />Provider Enrollment
              </h2>
              <p style={{ fontSize: '16.5px', fontWeight: 300, color: 'var(--gm)', lineHeight: 1.8, marginTop: 20, marginBottom: 36 }}>
                We manage the entire credentialing lifecycle so your practice gets in-network faster, with less paperwork, fewer rejections, and better contract terms. This is all we do — and we do it exceptionally well.
              </p>
              <Link href="/contact" className="bteal" style={{ display: 'inline-flex' }}>Get Credentialed Now →</Link>
            </div>
          </div>
          <div className="cred-services-grid">
            {[
              { slug: 'provider-enrollment', num: '01 — CREDENTIALING', name: 'Provider Enrollment', text: 'Full enrollment with Medicare, Medicaid, and all commercial payers. Applications, follow-ups, and payer communication handled entirely by our team.', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=82', alt: 'Provider Enrollment', cls: 'd1' },
              { slug: 'caqh-management', num: '02 — CREDENTIALING', name: 'CAQH Setup & Maintenance', text: 'Profile creation, attestation management, and ongoing updates so your CAQH record never lapses or stalls an enrollment.', img: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&q=82', alt: 'CAQH Setup', cls: 'd2' },
              { slug: 're-credentialing', num: '03 — CREDENTIALING', name: 'Re-Credentialing', text: 'Proactive cycle tracking and timely resubmission to keep your payer contracts active without interruption or revenue loss.', img: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=600&q=82', alt: 'Re-Credentialing', cls: 'd3' },
              { slug: 'contract-negotiation', num: '04 — CREDENTIALING', name: 'Contract Negotiation', text: 'We advocate for favorable reimbursement rates and contract terms, maximizing your revenue potential with each payer from day one.', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=82', alt: 'Contract Negotiation', cls: 'd4' },
              { slug: 'npi-registration', num: '05 — CREDENTIALING', name: 'NPI Registration & PECOS Enrollment', text: 'Type 1 and Type 2 NPI registration, PECOS enrollment, and taxonomy classification managed accurately for new and existing providers.', img: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&q=82', alt: 'NPI Registration', cls: 'd5' },
            ].map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={`csvc rv ${s.cls}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="csvc-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={s.img} alt={s.alt} /></div>
                <div className="csvc-num">{s.num}</div>
                <div className="csvc-name">{s.name}</div>
                <div className="csvc-text">{s.text}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="about" id="about">
        <div className="about-in">
          <div className="about-imgs rl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={`main-img ${aboutImgReady ? 'rdy' : ''}`}
              onLoad={() => setAboutImgReady(true)}
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=88"
              alt="Medical professionals team"
            />
            <div className="about-imgs-overlay"></div>
            <div className="about-imgs-overlay2"></div>
            <div className="about-stat-card">
              <div className="asc-row">
                <div className="asc-item"><div className="asc-num">500+</div><div className="asc-lbl">Providers Enrolled</div></div>
                <div className="asc-div"></div>
                <div className="asc-item"><div className="asc-num">7+</div><div className="asc-lbl">Major Payers</div></div>
                <div className="asc-div"></div>
                <div className="asc-item"><div className="asc-num">14 Days</div><div className="asc-lbl">Avg. Approval</div></div>
              </div>
            </div>
          </div>
          <div className="about-content rr">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: 18 }}>
              <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal2)' }}></span>Why Choose Us
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px,3.8vw,52px)', fontWeight: 600, color: '#fff', lineHeight: 1.1 }}>
              Credentialing Specialists<br />Who Know <span style={{ color: 'var(--teal2)' }}>Every Payer</span>
            </h2>
            <p className="sdesc">Our team works exclusively in healthcare administration. We know the requirements, the timelines, and the specific quirks of each major payer — knowledge that eliminates delays and prevents denials.</p>
            <div className="apoints">
              <div className="apoint rv d1"><div><div className="apoint-title">Deep Payer Relationships</div><div className="apoint-text">Direct working relationships with Aetna, Humana, BCBS, Optum, Magellan, Molina, and CareSource — built over years of high-volume submissions.</div></div></div>
              <div className="apoint rv d2"><div><div className="apoint-title">Relentless Follow-Up</div><div className="apoint-text">We don&apos;t wait for payers to respond. We chase them — proactively, on your behalf, until your credentialing is complete.</div></div></div>
              <div className="apoint rv d3"><div><div className="apoint-title">One Dedicated Account Manager</div><div className="apoint-text">One contact who knows your file, your payers, and your goals. No ticket queues, no call centers.</div></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="proc-in">
          <div className="proc-head">
            <div className="rl">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 18 }}>
                <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal)' }}></span>How We Work
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px,3.8vw,52px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.12 }}>
                From Application<br />to <span style={{ color: 'var(--teal)' }}>Approval</span>
              </h2>
            </div>
            <p className="rr" style={{ fontSize: 17, fontWeight: 300, color: 'var(--gm)', lineHeight: 1.78, maxWidth: 520 }}>
              A structured, proven credentialing process that eliminates delays, reduces denials, and gets your practice generating revenue faster.
            </p>
          </div>
          <div className="proc-steps">
            {[
              { n: '01', t: 'Discovery & Audit', d: 'We assess your current enrollment status, identify gaps, and build a custom roadmap for your practice and specialty.', img: 'https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?w=600&q=82', alt: 'Discovery & Audit consultation', cls: 'd1' },
              { n: '02', t: 'Documentation & Filing', d: 'We collect all required documents, complete every application, and submit to all target payers simultaneously.', img: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&q=82', alt: 'Documentation', cls: 'd2' },
              { n: '03', t: 'Active Follow-Up', d: 'We track every application, respond to payer inquiries, and escalate proactively — you never need to chase anyone.', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=82', alt: 'Follow-up', cls: 'd3' },
              { n: '04', t: 'Approval & Reporting', d: 'Receive clear confirmation of approvals, effective dates, and provider IDs with full documentation for your records.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=82', alt: 'Approval', cls: 'd4' },
            ].map((s) => (
              <div key={s.n} className={`pstep rv ${s.cls}`}>
                <div className="pstep-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.alt} />
                  <div className="pstep-num">{s.n}</div>
                </div>
                <div className="pstep-body">
                  <div className="pstep-title">{s.t}</div>
                  <div className="pstep-text">{s.d}</div>
                  <div className="pstep-dot"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYERS */}
      <section className="payers" id="payers">
        <div className="payers-glow"></div>
        <div className="payers-in">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal2)', justifyContent: 'center', marginBottom: 18 }}>
            <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal2)' }}></span>Our Payer Network
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px,4vw,54px)', fontWeight: 600, color: '#fff', lineHeight: 1.1 }} className="rv">
            Relationships That <span style={{ color: 'var(--teal2)' }}>Open Doors</span>
          </h2>
          <p style={{ fontSize: '16.5px', fontWeight: 300, color: 'rgba(255,255,255,0.48)', lineHeight: 1.78, margin: '18px auto 0', maxWidth: 580 }} className="rv d1">
            Years of direct payer relationships mean faster turnaround, fewer rejections, and better contracts for your practice.
          </p>
          <div className="pgrid">
            {[
              { name: 'Aetna', type: 'Commercial Payer', logo: 'Aetna-Logo.png', fallbackName: 'Aetna', cls: 'd1' },
              { name: 'Humana', type: 'Commercial & Medicare', logo: 'https://logo.clearbit.com/humana.com', fallbackName: 'Humana', cls: 'd2' },
              { name: 'Blue Cross Blue Shield', type: 'Commercial Payer', logo: 'https://logo.clearbit.com/bcbs.com', fallbackName: 'BCBS', cls: 'd3' },
              { name: 'Optum / UHC', type: 'Commercial Payer', logo: 'https://logo.clearbit.com/optum.com', fallbackName: 'Optum', cls: 'd4' },
              { name: 'Magellan Health', type: 'Behavioral Health', logo: 'https://logo.clearbit.com/magellanhealth.com', fallbackName: 'Magellan', cls: 'd1' },
              { name: 'Molina Healthcare', type: 'Medicaid / Marketplace', logo: 'https://logo.clearbit.com/molinahealthcare.com', fallbackName: 'Molina', cls: 'd2' },
              { name: 'CareSource', type: 'Medicaid / Medicare', logo: 'https://logo.clearbit.com/caresource.com', fallbackName: 'CareSource', cls: 'd3' },
              { name: 'Medicare & Medicaid', type: 'Federal Programs', logo: 'https://logo.clearbit.com/cms.gov', fallbackName: 'CMS', cls: 'd4' },
            ].map((p) => (
              <div key={p.name} className={`pcard rv ${p.cls}`}>
                <div className="pcard-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={p.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.fallbackName)}&background=fff&color=09A882&bold=true`;
                    }}
                  />
                </div>
                <div className="pcard-name">{p.name}</div>
                <div className="pcard-type">{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BILLING */}
      <section className="mktg" id="billing">
        <div className="mktg-in">
          <div className="mktg-head">
            <div className="mktg-head-img rl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={billImgReady ? 'rdy' : ''}
                onLoad={() => setBillImgReady(true)}
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=85"
                alt="Medical billing and finance"
              />
            </div>
            <div className="rr">
              <div className="mktg-note">Additional Service</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 16 }}>
                <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal)' }}></span>Medical Billing
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px,3.5vw,48px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.12, marginTop: 12 }}>
                Enrolled &amp; Ready? Now<br /><span style={{ color: 'var(--gold)' }}>Maximize Revenue.</span>
              </h2>
              <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gm)', lineHeight: 1.8, marginTop: 18, marginBottom: 8 }}>
                Once you&apos;re credentialed, we ensure you get paid accurately and on time. Comprehensive medical billing, coding, and end-to-end revenue cycle management.
              </p>
            </div>
          </div>
          <div className="mktg-grid">
            {[
              { slug: 'claim-submission', name: 'Claim Submission', text: 'Accurate medical coding and rapid claim submission to clearinghouses for faster payer turnaround.', cls: 'd1', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
              { slug: 'denial-management', name: 'Denial Management', text: 'Aggressive investigation and appeals for denied claims to recover revenue that belongs to your practice.', cls: 'd2', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
              { slug: 'ar-follow-up', name: 'A/R Follow-up', text: 'Consistent follow-up on aging accounts, ensuring nothing falls through the cracks over 30, 60, or 90 days.', cls: 'd3', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> },
              { slug: 'payment-posting', name: 'Payment Posting', text: 'Precise logging of ERAs, EOBs, and patient payments to keep your financial ledgers perfectly balanced.', cls: 'd1', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> },
              { slug: 'patient-invoicing', name: 'Patient Billing', text: 'Professional, compliant statement generation and patient support for outstanding balance inquiries.', cls: 'd2', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
            ].map((m) => (
              <Link key={m.slug} href={`/billing/${m.slug}`} className={`mcard rv ${m.cls}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mcard-icon">{m.icon}</div>
                <div className="mcard-name">{m.name}</div>
                <div className="mcard-text">{m.text}</div>
              </Link>
            ))}
            <div className="mcard rv d3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'var(--navy)', borderColor: 'var(--navy)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 12 }}>Boost Cash Flow</div>
              <p style={{ fontSize: '13.5px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 22 }}>
                Bundle credentialing and billing for complete revenue cycle support.
              </p>
              <Link href="/contact" className="bteal" style={{ fontSize: 14, padding: '12px 24px' }}>Get Started →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="tests" id="testimonials">
        <div className="tests-in">
          <div style={{ textAlign: 'center' }} className="rv">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal)', justifyContent: 'center', marginBottom: 18 }}>
              <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal)' }}></span>Client Results
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px,4vw,52px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.12 }}>
              Providers Who <span style={{ color: 'var(--teal)' }}>Trusted Us</span>
            </h2>
          </div>
        </div>
        <div className="track-wrap" style={{ marginTop: 68 }}>
          <div className="track">
            {Array.from({ length: 4 }).flatMap((_, rep) =>
              [
                { q: 'Quad credentialed our chiropractic practice with four payers in under three weeks. Completely hands-off for us. Best decision we made when opening the practice.', name: 'Dr. Rachel M.', role: 'Chiropractor, Atlanta, GA', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&fit=crop&q=80' },
                { q: 'We had been waiting months with another company. Quad took over our Aetna enrollment, resolved the issue, and got us approved in eleven days. Remarkable turnaround.', name: 'Dr. James K.', role: 'Multi-Specialty Group, Dallas, TX', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&fit=crop&q=80' },
                { q: 'Their contract negotiation alone paid for their fee. We got significantly better reimbursement rates with Humana than our previous credentialing vendor ever secured for us.', name: 'Dr. Sarah L.', role: 'Family Medicine, Phoenix, AZ', img: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=150&fit=crop&q=80' },
                { q: 'Finally a credentialing company that actually follows up without being asked. I didn’t make a single call to a payer. They handled everything and kept me informed throughout.', name: 'Dr. Marcus P.', role: 'Psychiatrist, Chicago, IL', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&fit=crop&q=80' },
                { q: 'Quad enrolled our group with six payers simultaneously. The process was clean, fast, and completely transparent. We were billing within three weeks of starting with them.', name: 'Amanda H., Administrator', role: 'PT Group, Miami, FL', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&fit=crop&q=80' },
              ].map((t, i) => (
                <div className="tcard" key={`${rep}-${i}`}>
                  <div className="tstars">★★★★★</div>
                  <p className="tquote">{t.q}</p>
                  <div className="tauthor">
                    <div className="tavatar">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={t.img} alt={t.name} /></div>
                    <div>
                      <div className="tname">{t.name}</div>
                      <div className="trole">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog" id="blog">
        <div className="blog-in">
          <div className="blog-head">
            <div className="rl">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 18 }}>
                <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal)' }}></span>Latest Insights
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px,3.8vw,52px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.12 }}>
                Healthcare <span style={{ color: 'var(--teal)' }}>Credentialing</span> Blog
              </h2>
            </div>
            <div className="rr">
              <p style={{ fontSize: 16, fontWeight: 300, color: 'var(--gm)', lineHeight: 1.7, maxWidth: 420 }}>
                Stay up-to-date with the latest trends in provider enrollment, medical billing, and contract negotiation.
              </p>
            </div>
          </div>
          <div className="blog-grid">
            {[
              { slug: 'caqh-proview-mistakes', tag: 'Credentialing', t: 'Navigating CAQH ProView: Top 5 Mistakes Providers Make', ex: 'CAQH is the backbone of commercial payer credentialing. Discover the most common errors that stall applications and delay your effective dates.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=82', alt: 'CAQH ProView', cls: 'd1' },
              { slug: 'medicare-pecos-2026', tag: 'Provider Enrollment', t: 'Medicare PECOS Enrollment: 2026 Compliance Updates', ex: 'Medicare has tightened its revalidation rules. Learn what you need to know about the latest PECOS updates to keep your billing privileges active.', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=82', alt: 'Medicare PECOS', cls: 'd2' },
              { slug: 'commercial-payer-negotiation-strategies', tag: 'Revenue Cycle', t: 'Strategies for Negotiating Better Commercial Payer Contracts', ex: 'Never accept the standard fee schedule. Explore proven strategies for negotiating higher reimbursement rates for your specialty’s top CPT codes.', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=82', alt: 'Contract Negotiation', cls: 'd3' },
            ].map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className={`bcard rv ${b.cls}`}>
                <div className="bcard-img">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={b.img} alt={b.alt} /></div>
                <div className="bcard-body">
                  <div className="bcard-tag">{b.tag}</div>
                  <div className="bcard-title">{b.t}</div>
                  <div className="bcard-excerpt">{b.ex}</div>
                  <div className="bcard-link">Read Full Article <span style={{ fontSize: 16 }}>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq-in">
          <div className="faq-head rv">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal)', justifyContent: 'center', marginBottom: 18 }}>
              <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal)' }}></span>Got Questions?
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px,4vw,52px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.12 }}>
              Frequently Asked <span style={{ color: 'var(--teal)' }}>Questions</span>
            </h2>
          </div>
          <div className="faq-list">
            {[
              { q: 'How long does the credentialing process usually take?', a: 'While commercial payers generally state it takes 90-120 days to process an application, our proactive tracking and pristine application submissions often reduce this timeline significantly. On average, we see approvals in 14 to 45 days, depending on the specific payer and whether a site visit is required.', cls: 'd1' },
              { q: 'Do I have to get credentialed with every single insurance payer?', a: 'Not at all. During our Discovery phase, we will consult with you to identify the most strategic payers for your specific specialty and local patient demographic. We focus on enrolling you with the networks that will drive the most value and volume to your practice.', cls: 'd2' },
              { q: 'What is the difference between credentialing and contracting?', a: 'Credentialing is the primary source verification process where payers confirm your education, licensing, and malpractice history (often via CAQH). Contracting is the subsequent step where we negotiate your reimbursement rates and you sign the agreement to officially become an in-network provider. We handle both seamlessly.', cls: 'd3' },
              { q: 'I have a gap in my work history. Will this cause a denial?', a: "It won't automatically cause a denial, but it will stall the process if not addressed correctly. CAQH and most payers require a continuous 5-year work history. We assist you in drafting the necessary written explanations for any gaps longer than 30 days so the application processes smoothly without pushback.", cls: 'd4' },
              { q: 'How do you price your credentialing services?', a: 'Our pricing is transparent and highly competitive. We offer flat-fee pricing per provider/per payer for standalone credentialing, as well as discounted bundled rates if you utilize our ongoing re-credentialing or medical billing services. We provide a custom quote after our initial free consultation.', cls: 'd5' },
            ].map((f, i) => (
              <div key={i} className={`faq-item rv ${f.cls} ${activeFaq === i ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(i)}>
                  {f.q} <div className="faq-icon">+</div>
                </div>
                <div className="faq-answer">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-bg-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80" alt="Medical background" />
        </div>
        <div className="contact-glow"></div>
        <div className="contact-in">
          <div className="cinfo rl">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--teal2)', marginBottom: 18 }}>
              <span style={{ display: 'block', width: 28, height: 2, background: 'var(--teal2)' }}></span>Get Started
            </div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px,3.8vw,52px)', fontWeight: 600, color: '#fff', lineHeight: 1.1 }}>
              Start Your<br /><span style={{ color: 'var(--teal2)' }}>Credentialing</span> Today
            </h2>
            <p className="sdesc">Tell us about your practice and we&apos;ll build a custom enrollment strategy — free of charge. Most providers are credentialed within 14–30 days depending on payer timelines.</p>
            <div className="cdet">
              <div className="cdet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Email</div>
                <div className="cdet-val">info@quadhealthcaresolutions.com</div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Phone</div>
                <div className="cdet-val">
                  <a href="tel:+13074272883" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +1 (307) 427-2883
                  </a>
                </div>
              </div>
            </div>
            <div className="cdet">
              <div className="cdet-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="cdet-lbl">Business Hours</div>
                <div className="cdet-val">Monday – Friday, 8 AM – 5 PM MT</div>
              </div>
            </div>
          </div>
          <div className="rr">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}

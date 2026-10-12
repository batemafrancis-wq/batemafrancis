"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroStats } from "@/lib/data";

const heroTitle = [
  { text: "We" },
  { text: "create" },
  { text: "Websites,", accent: true },
  { text: "Mobile" },
  { text: "&" },
  { text: "Web" },
  { text: "Apps" },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          let current = 0;
          const step = Math.max(1, Math.round(target / 40));
          timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              if (timer) clearInterval(timer);
            }
            el.textContent = String(current);
          }, 30);
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return <span ref={ref} className="stat-num">0</span>;
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <motion.span
            className="badge"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            ⚡ Perfection Driven · Since 2024
          </motion.span>
          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {heroTitle.map((word, index) => (
              <motion.span
                key={word.text}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className={`inline-block ${word.accent ? "accent" : ""}`}
              >
                {word.text}
                {index < heroTitle.length - 1 ? "\u00A0" : null}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            We aim to deliver nothing less than perfection. Skilled engineers &amp; creatives
            building software that makes an impact — from Kampala to the world.
          </motion.p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Let&apos;s talk →
            </a>
            <a href="#products" className="btn btn-outline">
              Explore work
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div className="stat" key={stat.label}>
                {"count" in stat ? (
                  <Counter target={stat.count as number} />
                ) : (
                  <span className="stat-num">{stat.value}</span>
                )}
                <span className="stat-plus">{stat.suffix}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-avatar">
          <div className="avatar-ring">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/rubais.jpeg" alt="Batema Francis — Founder & CEO of Essence" />
            <span className="exp-badge">2+ yrs</span>
          </div>
          <h2 className="avatar-name">BATEMA FRANCIS</h2>
          <p className="avatar-role">Co Founder &amp; Software Engineer, Essence</p>
          <p className="avatar-langs">🌍 English · Luganda · Korean</p>
        </div>
      </div>
    </section>
  );
}

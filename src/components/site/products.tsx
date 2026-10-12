"use client";

import { useEffect, useState } from "react";
import { products, svgThumb, type Product } from "@/lib/data";
import { Reveal } from "./reveal";

export function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const handleFallback = (event: React.SyntheticEvent<HTMLImageElement>, product: Product) => {
    const target = event.currentTarget;
    target.onerror = null;
    target.src = svgThumb(product.emoji, product.tag, product.c1, product.c2);
  };

  const prefillContact = () => {
    const message = document.getElementById("message") as HTMLTextAreaElement | null;
    if (message && selected) {
      message.value = `Hi Batema, I'm interested in a project similar to "${selected.title}". `;
    }
    setSelected(null);
  };

  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">
          Websites <span className="accent">designed by us</span>
        </h2>
        <p className="section-sub">Ten real-world solutions we&apos;ve delivered for businesses across Uganda.</p>

        <div className="cards-grid products-grid">
          {products.map((product, i) => (
            <Reveal
              as="article"
              className="card product-card"
              key={product.title}
              delay={(i % 4) * 0.05}
            >
              <button
                type="button"
                onClick={() => setSelected(product)}
                style={{ all: "unset", cursor: "pointer", display: "block", width: "100%" }}
                aria-label={`View case study: ${product.title}`}
              >
                <div className="product-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.img}
                    alt={`${product.title} — website preview`}
                    loading="lazy"
                    onError={(event) => handleFallback(event, product)}
                  />
                  <span className="product-tag">{product.tag}</span>
                </div>
                <div className="product-body">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  <span className="product-link">View case study →</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <div
        className={`modal-overlay${selected ? " open" : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
      >
        <div className="modal" role="dialog" aria-modal="true" aria-label={selected?.title}>
          <button type="button" className="modal-close" aria-label="Close" onClick={() => setSelected(null)}>
            ✕
          </button>
          {selected && (
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.img}
                alt={`${selected.title} — website preview`}
                onError={(event) => handleFallback(event, selected)}
              />
              <div className="modal-content">
                <span className="m-tag">{selected.tag}</span>
                <h3>{selected.title}</h3>
                <p>{selected.desc}</p>
                <p>
                  <strong>Key features:</strong>
                </p>
                <ul>
                  {selected.features.map((feature) => (
                    <li key={feature}>✅ {feature}</li>
                  ))}
                </ul>
                <p>
                  <strong>Impact:</strong> {selected.impact}
                </p>
                <a href="#contact" className="btn btn-primary" onClick={prefillContact}>
                  Build something like this →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

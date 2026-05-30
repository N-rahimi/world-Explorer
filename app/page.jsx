
// app/page.jsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "World Explorer | Home",
  description :"Access comprehensive country data including flags, capitals, population statistics, currencies, and languages through a sleek Next.js application.",
};

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          🌍 <span className="gradient-text">World Explorer</span>
        </h1>

        <p className="hero-subtitle">
          Discover countries from every corner of the globe and learn fascinating facts about their 
          flags, capital cities, population sizes, local currencies, and spoken languages.
        </p>

        <div className="hero-cta">
          <Link href="/countries" className="btn-primary">
            Start Exploring →
          </Link>
          <Link href="/search" className="btn-secondary">
            🔍 Quick Search
          </Link>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">250+</div>
            <div className="stat-label">Countries Covered</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">Continents</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Live</div>
            <div className="stat-label">Data from REST API</div>
          </div>
        </div>
      </section>

      {/* Optional: Quick Info Cards (for premium feel) */}
      <section className="features-section">
        <h2 className="section-title">✨ What You Can Do Here</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Browse All Countries</h3>
            <p>Quickly view flags, capitals, regions, and population numbers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📖</div>
            <h3>In-Depth Details</h3>
            <p>Explore languages, currencies, time zones, and a link to Google Maps.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔎</div>
            <h3>Smart Search</h3>
            <p>Type any country name to find exactly what you're looking for.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
// app/about/page.jsx

export const metadata = {
    title: "World Explorer | About",
    description: "Learn more about the World Explorer project and the technologies used to build it.",
  };
  
  export default function AboutPage() {
    return (
      <div className="about-container">
        <div className="page-header" style={{ textAlign: 'center' }}>
          <h1 className="page-title">About This Project</h1>
          <p className="page-description">The architecture and technical overview of World Explorer.</p>
        </div>
  
        <div className="about-card">
          <h2>Project Purpose</h2>
          <p>
            <strong>World Explorer</strong> is a modern, high-performance Next.js application designed to help users 
            quickly and easily discover countries from around the world. 
            It uses live data to show accurate details about flags, capitals, population sizes, 
            geographic regions, local currencies, and spoken languages.
          </p>
        </div>
  
        <div className="about-card">
          <h2> Data Source (API)</h2>
          <p>
            This app pulls data from the free and open-source <strong>REST Countries API</strong>. 
            It requests full country lists for browsing and searching, and individual country data 
            using alpha country codes to power the detailed country pages.
          </p>
        </div>
  
        <div className="about-card">
          <h2>🛠 Next.js Core Topics Practiced</h2>
          <p>
            This project covers the following key Next.js concepts and features:
          </p>
          
          <div className="tech-grid">
            <div className="tech-tag">App Router</div>
            <div className="tech-tag">File-based Routing</div>
            <div className="tech-tag">Shared Layouts</div>
            <div className="tech-tag">Dynamic Routes</div>
            <div className="tech-tag">Server Components</div>
            <div className="tech-tag">Client Components</div>
            <div className="tech-tag">Static Caching</div>
            <div className="tech-tag">Dynamic Rendering</div>
            <div className="tech-tag">Metadata Generation</div>
            <div className="tech-tag">Loading UI</div>
            <div className="tech-tag">Custom 404 Page</div>
            <div className="tech-tag">Responsive Design</div>
          </div>
        </div>
  
        <div className="about-card">
          <h2> Bonus Features Implemented</h2>
          <div className="tech-grid">
            <div className="tech-tag">Region Filter</div>
            <div className="tech-tag">Population Sort</div>
            <div className="tech-tag">Loading Skeleton</div>
            <div className="tech-tag">Custom 404 Page</div>
            <div className="tech-tag">Dynamic Metadata</div>
            <div className="tech-tag">Glassmorphism UI</div>
            <div className="tech-tag">Neon Glow Effects</div>
            <div className="tech-tag">Smooth Animations</div>
          </div>
        </div>
      </div>
    );
  }
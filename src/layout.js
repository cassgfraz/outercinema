import './style.css'

export function renderLayout(content) {
  const app = document.querySelector('#app')
  app.innerHTML = `
    <header>
      <nav>
        <div class="logo">
          <a href="/"><img src="/logo_primary.png" alt="OUTER CINEMA" style="height: 60px;"></a>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/pricing.html">Pricing</a></li>
          <li><a href="/how-it-works.html">How It Works</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/booking.html" class="btn-primary">Book Now</a></li>
        </ul>
      </nav>
    </header>
    <main>
      ${content}
    </main>
    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <img src="/logo_primary.png" alt="OUTER CINEMA" style="filter: brightness(0) invert(1);">
        </div>
        <div class="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pricing.html">Pricing</a></li>
            <li><a href="/how-it-works.html">How It Works</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <p>Email: hello@outercinema.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; ${new Date().getFullYear()} Outer Cinema. All rights reserved.
      </div>
    </footer>
  `
}

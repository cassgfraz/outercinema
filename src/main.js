import { renderLayout } from './layout.js'

const content = `
  <section class="hero-home">
    <h1>Cinema Under the Stars, Luxury in Your Yard.</h1>
    <p>Turn any outdoor space into a premium cinema experience. We handle the setup and breakdown, you just bring the movie.</p>
    <div class="hero-btns">
      <a href="/booking.html" class="btn-primary">Book Your Event</a>
      <a href="/pricing.html" class="btn-secondary" style="margin-left: 1rem; border: 1px solid white; padding: 0.6rem 1.2rem; border-radius: 4px; color: white; font-weight: bold;">View Packages</a>
    </div>
  </section>

  <section class="value-prop">
    <h2 class="text-center mb-2">Why Choose Outer Cinema?</h2>
    <div class="grid">
      <div class="card">
        <h3>Turnkey Service</h3>
        <p>Full delivery, professional setup, and breakdown. You don't lift a finger.</p>
      </div>
      <div class="card">
        <h3>Premium Equipment</h3>
        <p>High-definition projectors, massive screens (up to 24ft!), and concert-quality sound.</p>
      </div>
      <div class="card">
        <h3>Luxury Add-ons</h3>
        <p>From popcorn machines to bean bag lounge sets, we make it a true event.</p>
      </div>
    </div>
  </section>

  <section class="featured-packages" style="background: var(--gray-light); max-width: none;">
    <div style="max-width: var(--max-width); margin: 0 auto;">
      <h2 class="text-center mb-2">Our Signature Packages</h2>
      <div class="grid">
        <div class="card">
          <h3>The Neighborhood Favorite</h3>
          <div class="price">16ft Screen</div>
          <p>Perfect for backyard parties and intimate gatherings.</p>
          <ul style="text-align: left; margin: 1rem 0;">
            <li>✓ 16ft Inflatable Screen</li>
            <li>✓ HD Projector</li>
            <li>✓ Pro Sound System</li>
          </ul>
          <a href="/pricing.html" class="btn-primary">View Details</a>
        </div>
        <div class="card" style="border: 2px solid var(--accent);">
          <div style="background: var(--accent); color: var(--primary); padding: 0.2rem; position: absolute; top: 0; left: 0; width: 100%; font-size: 0.8rem; font-weight: bold;">MOST POPULAR</div>
          <h3 style="margin-top: 1rem;">The Grand Premiere</h3>
          <div class="price">24ft Screen</div>
          <p>The ultimate cinema experience for large events.</p>
          <ul style="text-align: left; margin: 1rem 0;">
            <li>✓ Massive 24ft Screen</li>
            <li>✓ Ultra HD Projector</li>
            <li>✓ Premium Sound Array</li>
          </ul>
          <a href="/pricing.html" class="btn-primary">View Details</a>
        </div>
      </div>
    </div>
  </section>
`

renderLayout(content)

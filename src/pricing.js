import { renderLayout } from './layout.js'

const content = `
  <section class="pricing-header text-center">
    <h1>Transparent Pricing for Any Event</h1>
    <p>Choose the screen size that fits your space and guest list.</p>
  </section>

  <section class="packages">
    <div class="grid">
      <div class="card">
        <h3>16ft Screen Package</h3>
        <div class="price">$299.99</div>
        <p>Ideal for up to 30 guests. Fits comfortably in most backyards.</p>
        <ul style="text-align: left; margin: 1.5rem 0;">
          <li>✓ 16' x 9' Inflatable Screen</li>
          <li>✓ 4000 Lumens HD Projector</li>
          <li>✓ 2.1 Stereo Sound System</li>
          <li>✓ Blu-ray/DVD Player or Streaming Connection</li>
          <li>✓ 24-hour Rental Period</li>
          <li>✓ Full Setup & Breakdown</li>
        </ul>
        <a href="/booking.html?package=16ft" class="btn-primary">Book 16ft Package</a>
      </div>
      <div class="card" style="border: 2px solid var(--accent);">
        <h3>24ft Screen Package</h3>
        <div class="price">$399.99</div>
        <p>Our flagship experience. Perfect for schools, parks, and large events.</p>
        <ul style="text-align: left; margin: 1.5rem 0;">
          <li>✓ 24' x 13.5' Inflatable Screen</li>
          <li>✓ 6000 Lumens HD Projector</li>
          <li>✓ Dual Subwoofer Sound Array</li>
          <li>✓ All Media Connections Provided</li>
          <li>✓ 24-hour Rental Period</li>
          <li>✓ Priority Setup & Breakdown</li>
        </ul>
        <a href="/booking.html?package=24ft" class="btn-primary">Book 24ft Package</a>
      </div>
    </div>
  </section>

  <section class="add-ons" style="background: var(--gray-light); max-width: none;">
    <div style="max-width: var(--max-width); margin: 0 auto;">
      <h2 class="text-center mb-2">Enhance Your Experience</h2>
      <p class="text-center mb-2">Add these items to any rental to make your event even more special.</p>
      <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <div class="card" style="background: white;">
          <h4>Popcorn Machine</h4>
          <p>$49.99</p>
          <p><small>Includes kernels, oil, and 50 bags.</small></p>
        </div>
        <div class="card" style="background: white;">
          <h4>Cotton Candy Machine</h4>
          <p>$49.99</p>
          <p><small>Includes sugar floss and 50 cones.</small></p>
        </div>
        <div class="card" style="background: white;">
          <h4>Lounge Set</h4>
          <p>$79.99</p>
          <p><small>4 Bean bags, 2 rugs, and string lights.</small></p>
        </div>
        <div class="card" style="background: white;">
          <h4>Pink Inflatable Pool</h4>
          <p>$39.99</p>
          <p><small>Perfect for "dive-in" movies!</small></p>
        </div>
      </div>
      <div class="text-center" style="margin-top: 3rem;">
        <h3>Premium Tier Services</h3>
        <p>Ask about our **Full-Service Concessions Package** and **Food Truck Coordination**!</p>
      </div>
    </div>
  </section>
`

renderLayout(content)

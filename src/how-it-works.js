import { renderLayout } from './layout.js'

const content = `
  <section class="text-center">
    <h1>How It Works</h1>
    <p>We take the stress out of event planning. Here's our simple 3-step process.</p>
  </section>

  <section>
    <div class="grid">
      <div class="card">
        <div style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;">1</div>
        <h3>Book Your Date</h3>
        <p>Choose your screen size and any add-ons through our inquiry form. We'll confirm availability and send you a rental agreement.</p>
      </div>
      <div class="card">
        <div style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;">2</div>
        <h3>We Setup</h3>
        <p>Our professional team arrives 1-2 hours before sunset to set up the screen, projector, and sound system. We ensure everything is perfectly calibrated.</p>
      </div>
      <div class="card">
        <div style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;">3</div>
        <h3>Enjoy & Breakdown</h3>
        <p>Host your movie night! When the credits roll, we'll return to pack everything up. You don't have to clean or store a thing.</p>
      </div>
    </div>
  </section>

  <section style="background: var(--primary); color: white; max-width: none;">
    <div style="max-width: 800px; margin: 0 auto; text-align: center;">
      <h2 style="color: white;">What You Need to Provide</h2>
      <p style="margin-bottom: 2rem;">To ensure a successful event, we only ask for three things:</p>
      <ul style="list-style: none; text-align: left; display: inline-block;">
        <li style="margin-bottom: 1rem;">📍 <strong>Flat Ground:</strong> A level surface (grass or pavement) for the screen.</li>
        <li style="margin-bottom: 1rem;">🔌 <strong>Power:</strong> Access to a standard electrical outlet within 50 feet.</li>
        <li style="margin-bottom: 1rem;">🎬 <strong>Content:</strong> Your choice of movie on a laptop, streaming device, or Blu-ray player (we provide the cables!).</li>
      </ul>
    </div>
  </section>
`

renderLayout(content)

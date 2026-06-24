import { renderLayout } from './layout.js'

const urlParams = new URLSearchParams(window.location.search);
const selectedPackage = urlParams.get('package');

const content = `
  <section>
    <h1 class="text-center">Book Your Cinema Event</h1>
    <p class="text-center mb-2">Fill out the form below and we'll get back to you within 24 hours to confirm your date.</p>

    <form id="booking-form">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" required placeholder="John Doe">
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required placeholder="john@example.com">
      </div>

      <div class="form-group">
        <label for="date">Event Date</label>
        <input type="date" id="date" name="date" required>
      </div>

      <div class="form-group">
        <label for="package">Select Package</label>
        <select id="package" name="package">
          <option value="16ft" ${selectedPackage === '16ft' ? 'selected' : ''}>16ft Screen Package ($299.99)</option>
          <option value="24ft" ${selectedPackage === '24ft' ? 'selected' : ''}>24ft Screen Package ($399.99)</option>
        </select>
      </div>

      <div class="form-group">
        <label>Add-ons (Optional)</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
          <label style="font-weight: normal;"><input type="checkbox" name="addons" value="popcorn"> Popcorn Machine</label>
          <label style="font-weight: normal;"><input type="checkbox" name="addons" value="cotton-candy"> Cotton Candy</label>
          <label style="font-weight: normal;"><input type="checkbox" name="addons" value="lounge"> Lounge Set</label>
          <label style="font-weight: normal;"><input type="checkbox" name="addons" value="pool"> Pink Inflatable Pool</label>
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message / Special Requests</label>
        <textarea id="message" name="message" rows="4" placeholder="Tell us about your event..."></textarea>
      </div>

      <button type="submit">Submit Inquiry</button>
    </form>
  </section>
`

renderLayout(content)

document.getElementById('booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your inquiry! We will contact you shortly.');
  window.location.href = '/';
});

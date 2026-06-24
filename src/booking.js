import { renderLayout } from './layout.js'

const urlParams = new URLSearchParams(window.location.search);
const selectedPackage = urlParams.get('package');

const today = new Date();
    const minDate = '2026-07-01';

    const content = `
      <section>
        <div style="background: var(--accent); color: var(--primary); padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 2rem; font-weight: bold;">
          📅 Now accepting bookings for events on or after July 1st, 2026
        </div>

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
            <input type="date" id="date" name="date" required min="${minDate}">
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

          <button type="submit">Submit Inquiry & Proceed to Payment</button>
        </form>
      </section>
    `

renderLayout(content)

document.getElementById('booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const pkg = document.getElementById('package').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;

  // Build add-ons summary
  const checked = [...document.querySelectorAll('input[name="addons"]:checked')].map(cb => cb.value);
  const addonStr = checked.length ? checked.join(', ') : 'None';

  // Prepare data for Web3Forms
  const formData = new FormData();
  formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Placeholder - Lead should replace this
  formData.append("subject", `New Cinema Booking: ${name}`);
  formData.append("from_name", name);
  formData.append("email", email);
  formData.append("date", date);
  formData.append("package", pkg);
  formData.append("addons", addonStr);
  formData.append("message", document.getElementById('message').value);

  // Send email notification via Web3Forms
  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log("Email notification sent status:", response.status);
    // Redirect to appropriate Stripe payment link based on package
    const stripeLinks = {
      '16ft': 'https://buy.stripe.com/cNi9AT5mx9JXdek2ON8IU01',
      '24ft': 'https://buy.stripe.com/4gM3cKV1mdreio1KJ8IU00'
    };
    
    alert(`Thanks ${name}! We've received your inquiry for ${date} and will be in touch. You'll now be redirected to secure payment to lock in your date.`);
    window.location.href = stripeLinks[pkg];
  })
  .catch(error => {
    console.error("Error sending email notification:", error);
    alert("There was an error processing your inquiry. Please try again or contact us directly.");
  });
});

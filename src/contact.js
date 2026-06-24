import { renderLayout } from './layout.js'

const content = `
  <section>
    <h1 class="text-center">Contact Us</h1>
    <p class="text-center mb-2">Have a question or a custom request? Reach out to us below.</p>

    <div class="grid" style="grid-template-columns: 1fr 1fr;">
      <div>
        <h3>Get in Touch</h3>
        <p>Whether it's a neighborhood social, a school fundraiser, or a private birthday party, we're here to help make it memorable.</p>
        <p style="margin-top: 1.5rem;"><strong>Email:</strong> hello@outercinema.com</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Location:</strong> Serving the greater Metro area and beyond.</p>
      </div>
      <div>
        <form id="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
`

renderLayout(content)

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! We will get back to you soon.');
  window.location.href = '/';
});

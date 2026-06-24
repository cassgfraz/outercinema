import { renderLayout } from './layout.js'

const content = `
  <section class="faq-header text-center">
    <h1>Frequently Asked Questions</h1>
    <p>Everything you need to know about your Outer Cinema experience.</p>
  </section>

  <section class="faq-content">
    <div class="faq-item">
      <h3>What do I need to provide?</h3>
      <p>We handle the heavy lifting, but we need a few things from you:</p>
      <ul>
        <li><strong>Space:</strong> A relatively flat area (grass, pavement, or deck) large enough for your chosen screen.</li>
        <li><strong>Power:</strong> Access to a dedicated standard 110V power outlet within 50 feet of the setup.</li>
        <li><strong>The Movie:</strong> You provide the media! We can connect to your laptop, streaming device (Roku, FireStick), or use our provided Blu-ray/DVD player.</li>
      </ul>
    </div>

    <div class="faq-item">
      <h3>What if it rains?</h3>
      <p>Safety is our priority. If rain or high winds (15mph+) are forecast, we can move the setup indoors if space allows. If we must cancel due to weather, you can reschedule your event for any available date within 90 days at no extra cost.</p>
    </div>

    <div class="faq-item">
      <h3>How much space is required?</h3>
      <p>For the 16ft screen, you'll need about 20ft of width and 15ft of depth. For the 24ft screen, plan for 30ft of width and 20ft of depth to accommodate the screen, projector throw distance, and guest seating.</p>
    </div>

    <div class="faq-item">
      <h3>What is your service area?</h3>
      <p>We serve the Greater Metro area and surrounding suburbs. Locations more than 25 miles from our central warehouse may incur a modest travel fee.</p>
    </div>

    <div class="faq-item">
      <h3>What are your payment terms?</h3>
      <p>A 50% non-refundable deposit is required to secure your date. The remaining balance is due 24 hours before your event begins.</p>
    </div>

    <div class="faq-item">
      <h3>When do you set up and pack up?</h3>
      <p>We typically arrive 60-90 minutes before your scheduled start time (usually sunset). Setup takes about 45-60 minutes. Teardown starts the following morning or at a pre-arranged time, taking about 45 minutes.</p>
    </div>
  </section>

  <section class="terms text-center" style="background: var(--gray-light); padding: 4rem 2rem;">
    <h2>Terms of Service</h2>
    <div style="max-width: 800px; margin: 0 auto; text-align: left;">
      <p>By booking with Outer Cinema, you agree to the following:</p>
      <ul>
        <li>Equipment remains the property of Outer Cinema at all times.</li>
        <li>The customer is responsible for any damage to equipment caused by guests or improper use.</li>
        <li>Outer Cinema is not responsible for any technical issues related to the customer's provided media or internet connection.</li>
        <li>Cancellations made less than 7 days before the event forfeit the deposit.</li>
      </ul>
    </div>
  </section>
`

renderLayout(content)

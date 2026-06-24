import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  console.error('STRIPE_SECRET_KEY is not set');
  process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const products = [
  {
    name: '24ft Screen Package',
    description: '24ft screen + projector + sound',
    price: 39999, // in cents
  },
  {
    name: '16ft Screen Package',
    description: '16ft screen + projector + sound',
    price: 29999,
  },
  {
    name: 'Popcorn Machine',
    description: 'Includes kernels, oil, and 50 bags.',
    price: 4999,
  },
  {
    name: 'Cotton Candy Machine',
    description: 'Includes sugar floss and 50 cones.',
    price: 4999,
  },
  {
    name: 'Lounge Set',
    description: '4 Bean bags, 2 rugs, and string lights.',
    price: 7999,
  },
  {
    name: 'Pink Inflatable Pool',
    description: 'Perfect for "dive-in" movies!',
    price: 3999,
  }
];

async function setup() {
  const results = [];
  for (const p of products) {
    try {
      const product = await stripe.products.create({
        name: p.name,
        description: p.description,
      });

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: p.price,
        currency: 'usd',
      });

      const paymentLink = await stripe.paymentLinks.create({
        line_items: [{ price: price.id, quantity: 1 }],
      });

      console.log(`${p.name}: ${paymentLink.url}`);
      results.push({ name: p.name, url: paymentLink.url, productId: product.id, priceId: price.id });
    } catch (err) {
      console.error(`Error creating ${p.name}:`, err.message);
    }
  }
  return results;
}

setup().then(results => {
  console.log('\\n--- Final Summary ---');
  console.log(JSON.stringify(results, null, 2));
}).catch(console.error);

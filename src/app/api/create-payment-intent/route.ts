import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
  typescript: true,
  apiVersion: '2023-10-16',
});

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const {
    amount, carrier, shippingDetails, products,
  } = data;
  try {
    // multiply your amount by 100, stripe only works with cents
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: 'EUR',
      metadata: {
        carrier: JSON.stringify(carrier),
        products: JSON.stringify(products),
        shippingDetails: JSON.stringify(shippingDetails),
      },
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (error) {
    return new NextResponse(error as BodyInit, { status: 400 });
  }
}

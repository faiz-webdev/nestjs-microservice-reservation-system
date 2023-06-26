import Stripe from 'stripe';

export class ChargeDto {
  card: Stripe.PaymentMethodCreateParams.Card1;
  amount: number;
}

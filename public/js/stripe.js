/* eslint-diable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51NI4MSK4vebGKnbCbXQD8MbHfD7935gzDCy92ia3Ms3PjkO7o0VWeTTO6LoTUrnpksccvaCxpPzsO7gtGIzIy0rJ00D2DBLvGs'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from endpoint/API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);

    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    consol.log(err);
    showAlert('error', err);
  }
};

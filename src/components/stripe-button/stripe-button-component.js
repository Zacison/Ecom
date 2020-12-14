import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { addItem } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_live_uvGaFCNz82Jfr17r4Ujbas4e';
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="ZD Clothing LLC"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    const selectedClass = useLoaderData()

    const price = selectedClass?.singleClass?.price.toFixed(2);
    // console.log(selectedClass.singleClass.price)
    return (
        <div className='w-full mx-auto mt-10 flex items-center flex-col'>
            <Helmet>
                <title>Rainbow || Payment</title>
            </Helmet>
            <p className='text-4xl font-bold text-center mb-10'>Payment For Enrolling</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} selectedClass={selectedClass}/>
            </Elements>
        </div>
    );
};

export default Payment;
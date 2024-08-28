'use client';
import React from 'react';
import { RootState } from '../lib/store';
import { useSelector } from 'react-redux';
import DeliveryDetails from '../components/checkout/delivery-details';
import PaymentDetails from '../components/checkout/payment-details';
import OrderSummary from '../components/checkout/order-summary';
import DeliveryMethod from '../components/checkout/delivery-method';
import MainLayout from '../layouts/main';
import { FormikProps, useFormik } from 'formik';
import checkoutFormSchema from '../schema/checkout-form';

export default function CheckoutForm() {
    const { items, subtotal } = useSelector((state: RootState) => state.cart);
    const paymentForm = useFormik({
        validationSchema: checkoutFormSchema,
        initialValues: {
            firstName: '',
            email: '',
            city: '',
            companyName: '',
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <MainLayout>
            <section className="bg-white py-8 antialiased text-dark md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                        <li className="after:border-1 flex items-center text-blue-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Cart
                            </span>
                        </li>

                        <li className="after:border-1 flex items-center text-blue-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-blue-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Checkout
                            </span>
                        </li>

                        <li className="flex shrink-0 items-center">
                            <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Order summary
                        </li>
                    </ol>

                    <form id='checkoutForm' onSubmit={paymentForm.handleSubmit}>
                        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                            <div className="min-w-0 flex-1 space-y-8">

                                <DeliveryDetails formObj={paymentForm as unknown as FormikProps<DeliveryFormFields>} />

                                {/* <PaymentDetails />

                                <DeliveryMethod method='' onSelect={() => { }} /> */}

                                <div>
                                    <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
                                    <div className="flex max-w-md items-center gap-4">
                                        <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder=""/>
                                        <button type="button" className="flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>
                                    </div>
                                </div>


                            </div>

                            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                                <OrderSummary subTotal={subtotal} />

                                <div className="space-y-3">
                                    <button type="submit"
                                        className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed to Payment</button>

                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. {JSON.stringify(paymentForm.errors)}<a href="#" title="" className="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500">Sign in or create an account now.</a>.</p>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}

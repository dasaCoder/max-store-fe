import { formatCurrency } from '@/app/lib/features/util/currency-formatter';
import React from 'react';

interface OrderSummaryProps {
    subTotal: number,
    currencyCode: string,
    deliveryFee: number,
    tax: number,
    total: number,
    savings: number
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subTotal, currencyCode, deliveryFee, tax, total, savings }) => {
    // Implement the logic for the OrderSummary component here

    return (
        <div className="flow-root">
            <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">{formatCurrency(subTotal, currencyCode)}</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                    <dd className="text-base font-medium text-green-500">{formatCurrency(savings, currencyCode)}</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Delivery Fee</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">{formatCurrency(deliveryFee, currencyCode)}</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">{formatCurrency(tax, currencyCode)}</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">{formatCurrency(total, currencyCode)}</dd>
                </dl>
            </div>
        </div>
    );
};

export default OrderSummary;
'use Client';
import { FormikProps } from 'formik';
import React from 'react';

interface DeliveryDetailsProps {
    formObj: FormikProps<DeliveryFormFields>;
}

const DeliveryDetails: React.FC<DeliveryDetailsProps> = ({formObj}) => {

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your name </label>
                    <input type="text" id="firstName"
                        value={formObj.values.firstName} 
                        onChange={formObj.handleChange}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Bonnie Green" />
                </div>

                <div>
                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
                    <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="name@flowbite.com" />
                </div>

                {/* <div>
                    <div className="mb-2 flex items-center gap-2">
                        <label htmlFor="select-city-input-3" className="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
                    </div>
                    <select id="select-city-input-3" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                        <option selected>San Francisco</option>
                        <option value="NY">New York</option>
                        <option value="LA">Los Angeles</option>
                        <option value="CH">Chicago</option>
                        <option value="HU">Houston</option>
                    </select>
                </div> */}

                <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email </label>
                    <input type="email" id="email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="name@flowbite.com"/>
                </div>

                <div>
                    <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
                    <input type="text" id="company_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Flowbite LLC"/>
                </div>

                <div>
                    <label htmlFor="vat_number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number </label>
                    <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="DE42313253"/>
                </div>

                <div className="sm:col-span-2">
                    <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                        </svg>
                        Add new address
                    </button>
                </div>
            </div>
        </div>
    );

}

export default DeliveryDetails;
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
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> First name </label>
                    <input type="text" id="firstName" name='first_name'
                        value={formObj.values.first_name} 
                        onChange={formObj.handleChange}
                        onBlur={formObj.handleBlur}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 " placeholder="Bonnie" />
                        {formObj.errors.first_name && (
                            <p className="text-red-500 text-sm">{formObj.errors.first_name}</p>
                        )}
                </div>

                <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Last name </label>
                    <input type="text" id="lastName" name='last_name'
                        value={formObj.values.last_name} 
                        onChange={formObj.handleChange}
                        onBlur={formObj.handleBlur}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 " placeholder="Green" />
                        {formObj.errors.last_name && (
                            <p className="text-red-500 text-sm">{formObj.errors.last_name}</p>
                        )}
                </div>

                <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Email </label>
                    <input type="text" id="email" name='email'
                        value={formObj.values.email} 
                        onChange={formObj.handleChange}
                        onBlur={formObj.handleBlur}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 " placeholder="myemail@gmail.com" />
                        {formObj.errors.email && (
                            <p className="text-red-500 text-sm">{formObj.errors.email}</p>
                        )}
                </div>

                <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Telephone </label>
                    <input type="text" id="phone" name='phone'
                        value={formObj.values.phone} 
                        onChange={formObj.handleChange}
                        onBlur={formObj.handleBlur}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 " placeholder="071345XXXX" />
                        {formObj.errors.phone && (
                            <p className="text-red-500 text-sm">{formObj.errors.phone}</p>
                        )}
                </div>

                <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Address </label>
                    <input type="text" id="address" name='address'
                        value={formObj.values.address} 
                        onChange={formObj.handleChange}
                        onBlur={formObj.handleBlur}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 " placeholder="1st Lane, Templers Road" />
                        {formObj.errors.address && (
                            <p className="text-red-500 text-sm">{formObj.errors.address}</p>
                        )}
                </div>

                <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> City </label>
                    <input type="text" id="city" name='city'
                        value={formObj.values.city} 
                        onChange={formObj.handleChange}
                        onBlur={formObj.handleBlur}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 " placeholder="Dehiwala" />
                        {formObj.errors.city && (
                            <p className="text-red-500 text-sm">{formObj.errors.city}</p>
                        )}
                </div>

                <div>
                    <label htmlFor="vat_number" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> VAT number </label>
                    <input type="text" id="vat_number" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 " placeholder="DE42313253"/>
                </div>

                <input type="hidden" name="country" value="Sri Lanka" />

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
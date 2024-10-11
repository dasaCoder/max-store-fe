import React from "react";

class PaymentDetails extends React.Component {
  render() {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Payment
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="mb-4">
            <label
              htmlFor="your_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Card number{" "}
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="1234 1234 1234 1234"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="your_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Name on card
            </label>
            <input
              id="name-on-card"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex space-x-4 w-full">
          <div className="mb-4 flex-1 ">
            <label
              htmlFor="your_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Expiration date (MM/YY)
            </label>
            <input
              id="expiration-date"
              type="text"
              placeholder="MM/YY"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4 w-1/3">
            <label
              htmlFor="your_name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              CVC
            </label>
            <input
              id="cvc"
              type="text"
              placeholder="CVC"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentDetails;

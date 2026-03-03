import { useNavigate } from 'react-router';

export default function Payment() {
  const navigate = useNavigate();

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/reservations');
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <h1 className="text-2xl mb-8 text-gray-800">Payment</h1>

      <div className="flex gap-6">
        {/* Payment Form */}
        <div className="flex-1 bg-white border-2 border-gray-400 p-8">
          <h2 className="text-lg mb-6 pb-3 border-b-2 border-gray-300">Payment Information</h2>
          
          <form onSubmit={handleConfirm}>
            <div className="space-y-6">
              {/* Cardholder Name */}
              <div>
                <label className="block text-gray-700 mb-2">Cardholder Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Name on card"
                  className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-gray-700 mb-2">Card Number *</label>
                <input
                  type="text"
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Expiry Date *</label>
                  <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">CVV *</label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                  />
                </div>
              </div>

              {/* Billing Address */}
              <div className="pt-6 border-t-2 border-gray-300">
                <h3 className="text-gray-700 mb-4">Billing Address</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Street Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="123 Main Street"
                      className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">City *</label>
                      <input
                        type="text"
                        required
                        placeholder="City"
                        className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">State/Province *</label>
                      <input
                        type="text"
                        required
                        placeholder="State"
                        className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Postal Code *</label>
                      <input
                        type="text"
                        required
                        placeholder="12345"
                        className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Country *</label>
                      <select required className="w-full border-2 border-gray-400 px-4 py-2 bg-white">
                        <option value="">Select country</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <div className="mt-8 pt-6 border-t-2 border-gray-300">
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-4 border-2 border-gray-900 hover:bg-gray-700"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>

        {/* Booking Summary */}
        <aside className="w-80 bg-white border-2 border-gray-400 p-6 h-fit">
          <h2 className="text-lg mb-4 pb-3 border-b-2 border-gray-300">Booking Summary</h2>
          
          <div className="space-y-4 text-sm">
            <div>
              <div className="text-gray-600 mb-1">Flight</div>
              <div className="text-gray-900">Airline A</div>
              <div className="text-gray-700">NYC → LAX</div>
            </div>

            <div className="border-t-2 border-gray-300 pt-4">
              <div className="text-gray-600 mb-1">Departure</div>
              <div className="text-gray-900">March 15, 2026</div>
              <div className="text-gray-700">08:00 AM</div>
            </div>

            <div className="border-t-2 border-gray-300 pt-4">
              <div className="text-gray-600 mb-1">Passenger</div>
              <div className="text-gray-900">1 Adult</div>
              <div className="text-gray-700">Economy Class</div>
            </div>

            <div className="border-t-2 border-gray-300 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">$350.00</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-600">Taxes & Fees</span>
                <span className="text-gray-900">$45.00</span>
              </div>
            </div>

            <div className="border-t-2 border-gray-900 pt-4">
              <div className="flex justify-between text-lg">
                <span className="text-gray-900">Total</span>
                <span className="text-gray-900">$395.00</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router';

export default function PassengerDetails() {
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/flights/payment');
  };

  return (
    <div className="max-w-3xl mx-auto px-8 py-8">
      <h1 className="text-2xl mb-8 text-gray-800">Passenger Details</h1>

      <div className="bg-white border-2 border-gray-400 p-8">
        <form onSubmit={handleContinue}>
          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter first name"
                  className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter last name"
                  className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-700 mb-2">Date of Birth *</label>
              <input
                type="date"
                required
                className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
              />
            </div>

            {/* Passport Number */}
            <div>
              <label className="block text-gray-700 mb-2">Passport Number *</label>
              <input
                type="text"
                required
                placeholder="Enter passport number"
                className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
              />
            </div>

            {/* Meal Preference */}
            <div>
              <label className="block text-gray-700 mb-2">Meal Preference</label>
              <select className="w-full border-2 border-gray-400 px-4 py-2 bg-white">
                <option>No preference</option>
                <option>Vegetarian</option>
                <option>Vegan</option>
                <option>Gluten-free</option>
                <option>Halal</option>
                <option>Kosher</option>
              </select>
            </div>

            {/* Seating Preference */}
            <div>
              <label className="block text-gray-700 mb-3">Seating Preference</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="seating"
                    value="window"
                    defaultChecked
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Window</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="seating"
                    value="aisle"
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Aisle</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="seating"
                    value="middle"
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Middle</span>
                </label>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-8 pt-6 border-t-2 border-gray-300">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-4 border-2 border-gray-900 hover:bg-gray-700"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

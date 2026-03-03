import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'flights' | 'hotels' | 'cars'>('flights');
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('round-trip');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'flights') {
      navigate('/flights/results');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      <h1 className="text-3xl mb-8 text-gray-800 text-center">International Online Reservation System</h1>
      
      <div className="bg-white border-2 border-gray-400 p-8">
        {/* Tabs */}
        <div className="flex border-b-2 border-gray-300 mb-8">
          <button
            onClick={() => setActiveTab('flights')}
            className={`px-8 py-3 border-2 border-b-0 ${
              activeTab === 'flights' 
                ? 'bg-white border-gray-300 -mb-0.5 relative z-10' 
                : 'bg-gray-200 border-transparent'
            }`}
          >
            Flights
          </button>
          <button
            onClick={() => setActiveTab('hotels')}
            className={`px-8 py-3 border-2 border-b-0 ${
              activeTab === 'hotels' 
                ? 'bg-white border-gray-300 -mb-0.5 relative z-10' 
                : 'bg-gray-200 border-transparent'
            }`}
          >
            Hotels
          </button>
          <button
            onClick={() => setActiveTab('cars')}
            className={`px-8 py-3 border-2 border-b-0 ${
              activeTab === 'cars' 
                ? 'bg-white border-gray-300 -mb-0.5 relative z-10' 
                : 'bg-gray-200 border-transparent'
            }`}
          >
            Cars
          </button>
        </div>

        {/* Flight Search Form */}
        {activeTab === 'flights' && (
          <form onSubmit={handleSearch}>
            {/* Trip Type */}
            <div className="mb-6">
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="tripType"
                    value="one-way"
                    checked={tripType === 'one-way'}
                    onChange={() => setTripType('one-way')}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">One-way</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="tripType"
                    value="round-trip"
                    checked={tripType === 'round-trip'}
                    onChange={() => setTripType('round-trip')}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">Round-trip</span>
                </label>
              </div>
            </div>

            {/* From and To */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  placeholder="Departure city"
                  className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  placeholder="Destination city"
                  className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                />
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Departure Date</label>
                <input
                  type="date"
                  className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                />
              </div>
              {tripType === 'round-trip' && (
                <div>
                  <label className="block text-gray-700 mb-2">Return Date</label>
                  <input
                    type="date"
                    className="w-full border-2 border-gray-400 px-4 py-2 bg-white"
                  />
                </div>
              )}
            </div>

            {/* Passengers and Class */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <label className="block text-gray-700 mb-2">Number of Passengers</label>
                <select className="w-full border-2 border-gray-400 px-4 py-2 bg-white">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Class</label>
                <select className="w-full border-2 border-gray-400 px-4 py-2 bg-white">
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-4 border-2 border-gray-900 hover:bg-gray-700"
            >
              Search
            </button>
          </form>
        )}

        {/* Hotel Search Placeholder */}
        {activeTab === 'hotels' && (
          <div className="py-12 text-center text-gray-600 border-2 border-dashed border-gray-400">
            Hotel search form goes here
          </div>
        )}

        {/* Car Rental Search Placeholder */}
        {activeTab === 'cars' && (
          <div className="py-12 text-center text-gray-600 border-2 border-dashed border-gray-400">
            Car rental search form goes here
          </div>
        )}
      </div>
    </div>
  );
}

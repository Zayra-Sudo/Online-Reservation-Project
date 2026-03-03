import { useState } from 'react';
import { useNavigate } from 'react-router';

const mockFlights = [
  {
    id: 1,
    airline: 'Airline A',
    departure: '08:00 AM',
    arrival: '11:30 AM',
    duration: '3h 30m',
    stops: 'Nonstop',
    price: '$350',
  },
  {
    id: 2,
    airline: 'Airline B',
    departure: '10:15 AM',
    arrival: '03:45 PM',
    duration: '5h 30m',
    stops: '1 Stop',
    price: '$275',
  },
  {
    id: 3,
    airline: 'Airline C',
    departure: '01:30 PM',
    arrival: '05:00 PM',
    duration: '3h 30m',
    stops: 'Nonstop',
    price: '$425',
  },
  {
    id: 4,
    airline: 'Airline A',
    departure: '04:00 PM',
    arrival: '10:20 PM',
    duration: '6h 20m',
    stops: '2+ Stops',
    price: '$220',
  },
  {
    id: 5,
    airline: 'Airline D',
    departure: '06:30 PM',
    arrival: '10:00 PM',
    duration: '3h 30m',
    stops: 'Nonstop',
    price: '$380',
  },
];

export default function FlightResults() {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [selectedStops, setSelectedStops] = useState<string[]>([]);

  const handleSelectFlight = () => {
    navigate('/flights/passenger-details');
  };

  const toggleAirline = (airline: string) => {
    setSelectedAirlines(prev =>
      prev.includes(airline)
        ? prev.filter(a => a !== airline)
        : [...prev, airline]
    );
  };

  const toggleStops = (stops: string) => {
    setSelectedStops(prev =>
      prev.includes(stops)
        ? prev.filter(s => s !== stops)
        : [...prev, stops]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <div className="flex gap-6">
        {/* Filter Sidebar */}
        <aside className="w-64 bg-white border-2 border-gray-400 p-6 h-fit">
          <h2 className="text-lg mb-6 pb-3 border-b-2 border-gray-300">Filters</h2>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-gray-700 mb-3">Price Range</h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full"
              />
              <div className="text-sm text-gray-600">
                ${priceRange[0]} - ${priceRange[1]}
              </div>
            </div>
          </div>

          {/* Airlines */}
          <div className="mb-8">
            <h3 className="text-gray-700 mb-3">Airlines</h3>
            <div className="space-y-2">
              {['Airline A', 'Airline B', 'Airline C', 'Airline D'].map((airline) => (
                <label key={airline} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAirlines.includes(airline)}
                    onChange={() => toggleAirline(airline)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700 text-sm">{airline}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Stops */}
          <div className="mb-8">
            <h3 className="text-gray-700 mb-3">Stops</h3>
            <div className="space-y-2">
              {['Nonstop', '1 Stop', '2+ Stops'].map((stop) => (
                <label key={stop} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedStops.includes(stop)}
                    onChange={() => toggleStops(stop)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700 text-sm">{stop}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Departure Time */}
          <div>
            <h3 className="text-gray-700 mb-3">Departure Time</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-700 text-sm">Morning (6AM - 12PM)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-700 text-sm">Afternoon (12PM - 6PM)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-700 text-sm">Evening (6PM - 12AM)</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Results List */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl text-gray-800">Flight Results</h1>
            <p className="text-gray-600 mt-1">{mockFlights.length} flights found</p>
          </div>

          <div className="space-y-4">
            {mockFlights.map((flight) => (
              <div
                key={flight.id}
                className="bg-white border-2 border-gray-400 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-lg mb-3 text-gray-800">{flight.airline}</div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Departure</div>
                        <div className="text-gray-900 mt-1">{flight.departure}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Arrival</div>
                        <div className="text-gray-900 mt-1">{flight.arrival}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Duration</div>
                        <div className="text-gray-900 mt-1">{flight.duration}</div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">{flight.stops}</div>
                  </div>

                  <div className="text-right ml-8">
                    <div className="text-2xl mb-3 text-gray-900">{flight.price}</div>
                    <button
                      onClick={handleSelectFlight}
                      className="bg-gray-800 text-white px-8 py-2 border-2 border-gray-900 hover:bg-gray-700"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

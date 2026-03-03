const mockReservations = [
  {
    id: 'RES001',
    type: 'Flight',
    date: 'March 15, 2026',
    status: 'Confirmed',
    details: 'NYC → LAX',
  },
  {
    id: 'RES002',
    type: 'Hotel',
    date: 'March 20, 2026',
    status: 'Confirmed',
    details: 'Grand Hotel - 3 nights',
  },
  {
    id: 'RES003',
    type: 'Car',
    date: 'March 22, 2026',
    status: 'Pending',
    details: 'Compact Car - 5 days',
  },
  {
    id: 'RES004',
    type: 'Flight',
    date: 'April 5, 2026',
    status: 'Confirmed',
    details: 'LAX → SFO',
  },
];

export default function MyReservations() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <h1 className="text-2xl mb-8 text-gray-800">My Reservations</h1>

      <div className="bg-white border-2 border-gray-400">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 px-6 py-4 bg-gray-200 border-b-2 border-gray-400">
          <div className="text-gray-700">Reservation ID</div>
          <div className="text-gray-700">Type</div>
          <div className="text-gray-700">Date</div>
          <div className="text-gray-700">Details</div>
          <div className="text-gray-700">Status</div>
          <div className="text-gray-700">Actions</div>
        </div>

        {/* Table Rows */}
        {mockReservations.map((reservation) => (
          <div
            key={reservation.id}
            className="grid grid-cols-6 gap-4 px-6 py-4 border-b-2 border-gray-300 items-center"
          >
            <div className="text-gray-900">{reservation.id}</div>
            <div className="text-gray-700">{reservation.type}</div>
            <div className="text-gray-700">{reservation.date}</div>
            <div className="text-gray-700">{reservation.details}</div>
            <div>
              <span
                className={`inline-block px-3 py-1 border-2 text-sm ${
                  reservation.status === 'Confirmed'
                    ? 'bg-gray-100 border-gray-400 text-gray-800'
                    : 'bg-white border-gray-400 text-gray-600'
                }`}
              >
                {reservation.status}
              </span>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-1 border-2 border-gray-400 bg-white text-gray-700 hover:bg-gray-100 text-sm">
                View Details
              </button>
              <button className="px-4 py-1 border-2 border-gray-400 bg-white text-gray-700 hover:bg-gray-100 text-sm">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state if no reservations */}
      {mockReservations.length === 0 && (
        <div className="bg-white border-2 border-gray-400 p-12 text-center">
          <div className="text-gray-600 mb-4">No reservations found</div>
          <a
            href="/"
            className="inline-block bg-gray-800 text-white px-6 py-2 border-2 border-gray-900 hover:bg-gray-700"
          >
            Make a Reservation
          </a>
        </div>
      )}
    </div>
  );
}

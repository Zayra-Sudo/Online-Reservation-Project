import { Link, Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo placeholder */}
            <div className="border-2 border-gray-400 px-6 py-3 text-gray-600 font-medium">
              LOGO
            </div>
            
            {/* Navigation Links */}
            <div className="flex gap-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-gray-900 border-2 border-transparent hover:border-gray-400 px-4 py-2"
              >
                Home
              </Link>
              <Link 
                to="/reservations" 
                className="text-gray-700 hover:text-gray-900 border-2 border-transparent hover:border-gray-400 px-4 py-2"
              >
                My Reservations
              </Link>
              <Link 
                to="#" 
                className="text-gray-700 hover:text-gray-900 border-2 border-transparent hover:border-gray-400 px-4 py-2"
              >
                Login / Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

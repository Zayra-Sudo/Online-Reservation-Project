import { createBrowserRouter } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import FlightResults from './components/FlightResults';
import PassengerDetails from './components/PassengerDetails';
import Payment from './components/Payment';
import MyReservations from './components/MyReservations';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'flights/results',
        Component: FlightResults,
      },
      {
        path: 'flights/passenger-details',
        Component: PassengerDetails,
      },
      {
        path: 'flights/payment',
        Component: Payment,
      },
      {
        path: 'reservations',
        Component: MyReservations,
      },
    ],
  },
]);

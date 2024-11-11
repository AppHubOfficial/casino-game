import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blackjack from './components/Blackjack';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import PokerPage from './pages/PokerPage';
import BlackjackPage from './pages/BlackjackPage';
import RoulettePage from './pages/RoulettePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blackjack",  // Add this route for Blackjack
    element: <Blackjack />,
  },
  {
    path: "*",
    element: <Page404 />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

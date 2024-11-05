import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    path: "/poker",
    element: <PokerPage />,
  },
  {
    path: "/blackjack",
    element: <BlackjackPage />,
  },
  {
    path: "/roulette",
    element: <RoulettePage />,
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

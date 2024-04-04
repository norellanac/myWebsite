import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './components/pages/HomePage.tsx';
import ResumePage from './components/pages/ResumePage.tsx';
//import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "/portfolio",
    element: <div>Contact us</div>,
  },
  {
    path: "/terms",
    element: <div>Terms and conditions</div>,
  },
  {
    path: "/privacy",
    element: <div>Privacy policy</div>,
  },
  {
    path: "/404",
    element: <div>Not found</div>,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)

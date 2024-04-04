import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './components/pages/HomePage.tsx';
import ResumePage from './components/pages/ResumePage.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { MainTemplate } from './components/templates/index.tsx';
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
    path: "/terms",
    element: <MainTemplate> <div>Terms and conditions</div></MainTemplate>,
  },
  {
    path: "/privacy",
    element: <MainTemplate> <div>Privacy policy</div></MainTemplate>,
  },
  {
    path: "/404",
    element: <MainTemplate> <div>Not found</div></MainTemplate>,
  },
  {
    path: "*",
    element: <MainTemplate> <div>Not found</div></MainTemplate>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
    <RouterProvider router={router} />
    </LanguageProvider>
    {/* <App /> */}
  </React.StrictMode>,
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import MainPage from './components/MainPage.jsx';
function App() {




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<MainPage />} />
      </Route>
    )
  );

  return (

        <RouterProvider router={router} />

  );
}

export default App;


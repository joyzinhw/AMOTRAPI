import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage'

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LandingPage />} />
))

function App() {
  return (
      <RouterProvider router={browserRouter} />
  )
}

export default App



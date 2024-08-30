import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage'
import PageAboutArtist from './pages/PageAboutArtist/PageAboutArtist';

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route index element={<LandingPage />} />
    <Route path='/Artista' element={<PageAboutArtist />} />
  </Route>
))

function App() {
  return (
      <RouterProvider router={browserRouter} />
  )
}

export default App



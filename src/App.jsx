import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage'
import PageAboutArtist from './pages/PageAboutArtist/PageAboutArtist';
import TopTracks from './components/topTrack/TopTrack';

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route index element={<LandingPage />} />
    <Route path='/artistInfo' element={<PageAboutArtist />} />
    <Route path='/topTracks' element={<TopTracks />} />
  </Route>
))

function App() {
  return (
      <RouterProvider router={browserRouter} />
  )
}

export default App



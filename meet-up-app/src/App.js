import { Route, Routes } from 'react-router-dom'

import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import AllMeetupsPage from './pages/AllMeetups';
import Layout from './components/layout/Layout';


function App() {
  return (
  <Layout>

    <Routes>
      <Route path='/' element={<AllMeetupsPage />} />
      <Route path='/new-meetup' element={<NewMeetupsPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>

  </Layout>
  )
}

export default App;

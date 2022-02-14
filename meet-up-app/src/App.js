import { Route, Routes } from 'react-router-dom'

import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import AllMeetupsPage from './pages/AllMeetups';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return <div>
    <MainNavigation />
    <Routes>
      <Route path='/' element={<AllMeetupsPage />} />
      <Route path='/new-meetup' element={<NewMeetupsPage />} />
      <Route path='/favorites' element={<FavoritesPage />} />
    </Routes>

  </div>
}

export default App;

import { Routes, Route } from 'react-router-dom'

import MusicPlayer from './Component/Player2.jsx'
import Home from './Component/Home.jsx'
import Favorites from './Component/Favorites.jsx'
import Profile from './Component/Profile.jsx'

function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player" element={<MusicPlayer />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  )
}

export default App
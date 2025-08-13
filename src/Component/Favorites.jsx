import { useNavigate } from 'react-router-dom';
import Tabs from './Tabs';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(Array.isArray(storedFavorites) ? storedFavorites : []);
  };

  useEffect(() => {
    loadFavorites();
  }, []);


  const handleGoToPlayer = (trackIndex) => {
    navigate('/player', { state: { trackIndex } });
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #1c0b30, hwb(223 4% 86%))', minHeight: '100vh', color: 'white' }}>

      <div className="px-4 pb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">SJ</span>
          </div>
          <div>
            <h1 className="text-white font-semibold text-xl">Sarwar Jahan</h1>
            <p className="text-gray-300 text-sm">sarwarjahan@gmail.com</p>
            <p className="text-gray-400 text-sm">Gold Member</p>
            <p className="text-gray-300 text-sm mt-1">Love Music and I am not a Musician</p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-32">
        <h2 className="text-white font-semibold text-lg mb-4">Favourite Music</h2>
        {favorites.length === 0 ? (
          <p className="text-gray-400 text-sm">No favourites yet</p>
        ) : (
          <div className="flex space-x-4 overflow-x-auto">
            {favorites.map((item, idx) => (
              <div
                key={item.id || idx}
                className="flex-shrink-0 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
                onClick={() => handleGoToPlayer(idx)}
              >
                <div className="w-24 h-24 bg-slate-800 rounded-lg overflow-hidden mb-2 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-white text-xs font-medium text-center transition-all duration-300 group-hover:text-blue-300">{item.title}</p>
                <p className="text-gray-400 text-xs text-center transition-all duration-300 group-hover:text-gray-300">{item.artist}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Tabs />
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Tabs from './Tabs';
import { useEffect, useState } from 'react';

export default function Favorites() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoToPlayer = (trackIndex) => {
    navigate('/player', { state: { trackIndex } });
  };

  return (
    <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #000000 100%)', minHeight: '100vh', color: 'white' }}>
      <div className="flex items-center justify-between p-4 pt-12">
        <ArrowLeft className="w-6 h-6 text-white cursor-pointer" onClick={handleGoBack} />
      </div>

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
                key={item.id}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => handleGoToPlayer(idx)}
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden mb-2">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-white text-xs font-medium text-center">{item.title}</p>
                <p className="text-gray-400 text-xs text-center">{item.artist}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Tabs />
    </div>
  );
}

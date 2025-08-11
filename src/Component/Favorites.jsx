import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Tabs from './Tabs';

export default function Favorites() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoToPlayer = () => {
    navigate('/player');
  };

  // Using the same songs from our app
  const favoriteAlbums = [
    {
      id: 1,
      title: "Shine",
      artist: "Lay Nee",
      image: "/Pics2.jpg"
    },
    {
      id: 2, 
      title: "Grace & Mercy",
      artist: "StaR'ex", 
      image: "/coverPics.jpg"
    },
    {
      id: 3,
      title: "Veronica", 
      artist: "StaR'ex",
      image: "/download.jpeg"
    }
  ];

  const favoriteMusic = [
    {
      id: 1,
      title: "Shine",
      artist: "Lay Nee",
      image: "/Pics2.jpg"
    },
    {
      id: 2,
      title: "Grace & Mercy", 
      artist: "StaR'ex",
      image: "/coverPics.jpg"
    },
    {
      id: 3,
      title: "Veronica",
      artist: "StaR'ex", 
      image: "/download.jpeg"
    }
  ];

  return (
    <div style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #000000 100%)', minHeight: '100vh', color: 'white'}}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <ArrowLeft 
          className="w-6 h-6 text-white cursor-pointer" 
          onClick={handleGoBack}
        />
      </div>

      {/* Profile Section */}
      <div className="px-4 pb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">SJ</span>
          </div>
          <div>
            <h1 className="text-white font-semibold text-xl">Sarwar Jahan</h1>
            <p className="text-gray-300 text-sm">sarwarjahan@gmail.com</p>
            <p className="text-gray-400 text-sm">Gold Member</p>
            <p className="text-gray-300 text-sm mt-1">Love Music and I am not an Musician</p>
          </div>
        </div>
      </div>

      {/* Favourite Album Section */}
      <div className="px-4 mb-8">
        <h2 className="text-white font-semibold text-lg mb-4">Favourite Album</h2>
        <div className="flex space-x-4">
          {favoriteAlbums.map((album) => (
            <div 
              key={album.id} 
              className="flex-shrink-0 cursor-pointer"
              onClick={handleGoToPlayer}
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden mb-2">
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-xs font-medium text-center">{album.title}</p>
              <p className="text-gray-400 text-xs text-center">{album.artist}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Favourite Music Section */}
      <div className="px-4 pb-32">
        <h2 className="text-white font-semibold text-lg mb-4">Favourite Music</h2>
        <div className="flex space-x-4">
          {favoriteMusic.map((music) => (
            <div 
              key={music.id} 
              className="flex-shrink-0 cursor-pointer"
              onClick={handleGoToPlayer}
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden mb-2">
                <img 
                  src={music.image} 
                  alt={music.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-xs font-medium text-center">{music.title}</p>
              <p className="text-gray-400 text-xs text-center">{music.artist}</p>
            </div>
          ))}
        </div>
      </div>

      <Tabs />
    </div>
  );
}

import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Tabs from './Tabs';


export default function MusicAppHome() {
  const navigate = useNavigate();

const handleGoToPlayer = (trackIndex) => {
  navigate('/player', { state: { trackIndex } });
};


  const recentlyPlayed = [
    {
      id: 1,
      title: "Shine",
      image: "/Pics2.jpg"
    },
    {
      id: 2,
      title: "Grace & Mercy",
      image: "/coverPics.jpg"
    },
    {
      id: 3,
      title: "Veronica",
      image: "/download.jpeg"
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: "Shine",
      artist: "Lay Nee",
      duration: "3:45 / dreams",
      image: "/Pics2.jpg"
    },
    {
      id: 2,
      title: "Grace & Mercy",
      artist: "StaR'ex",
      duration: "4:12 / dreams",
      image: "/coverPics.jpg"
    },
    {
      id: 3,
      title: "Veronica",
      artist: "StaR'ex",
      duration: "3:28 / dreams",
      image: "/download.jpeg"
    }
  ];

  return (
    <div style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #000000 100%)', minHeight: '100vh', color: 'white'}}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SJ</span>
          </div>
          <div>
            <h1 className="text-white font-semibold">Sarwar Jahan</h1>
            <p className="text-gray-400 text-sm">Gold Member</p>
          </div>
        </div>
        <Bell className="w-6 h-6 text-gray-400" />
      </div>

      
      <div className="px-4 mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Listen The Latest Musics</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Music" 
            className="w-full bg-slate-800 text-white placeholder-gray-400 px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

    
      <div className="px-4 mt-12">
        <h3 className="text-lg font-semibold text-white mb-4">Recently Played</h3>
        <div className="flex space-x-6">
          {recentlyPlayed.map((item, index) => (
  <div 
    key={item.id} 
    className="flex-shrink-0 cursor-pointer"
    onClick={() => handleGoToPlayer(index)}
  >
    <div className="w-24 h-24 bg-slate-800 rounded-lg overflow-hidden mb-2">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
    <p className="text-white text-sm font-medium text-center">{item.title}</p>
  </div>
))}

        </div>
      </div>

      
      <div className="px-4 mt-16 pb-32">
        <h3 className="text-lg font-semibold text-white mb-4">Recommend for you</h3>
        <div className="space-y-6">
          {recommendations.map((item, index) => (
  <div 
    key={item.id} 
    className="flex items-center space-x-3 cursor-pointer hover:bg-slate-800 p-2 rounded-lg transition-colors duration-200"
    onClick={() => handleGoToPlayer(index)}
  >
    <div className="w-12 h-12 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="text-white font-medium text-sm truncate">{item.title}</h4>
      <p className="text-gray-400 text-sm">{item.artist}</p>
      <p className="text-gray-500 text-xs">{item.duration}</p>
    </div>
  </div>
))}

        </div>
      </div>

      
      <Tabs />
    </div>
  );
}
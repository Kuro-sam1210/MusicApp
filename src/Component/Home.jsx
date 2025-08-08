import { Bell, Search, Home, Music, Heart, MapPin } from 'lucide-react';
import { CiHome } from "react-icons/ci"
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";


export default function MusicAppHome() {
  const recentlyPlayed = [
    {
      id: 1,
      title: "The Triangle",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Dune Of Visa",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=120&h=120&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Cocktail",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&h=120&fit=crop&crop=center"
    }
  ];

  const recommendations = [
    {
      id: 1,
      title: "Take care of you",
      artist: "Asiana Theme",
      duration: "1:1 lb / dreams",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "The stranger inside you",
      artist: "Hans Letten",
      duration: "50 lb / dreams",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Edwall of beauty mind",
      artist: "Jacob Gordon",
      duration: "44 lb / dreams",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=60&h=60&fit=crop&crop=center"
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
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

      {/* Title and Search */}
      <div className="px-4 mt-6">
        <h2 className="text-2xl font-bold text-white mb-4">Listen The Latest Musics</h2>
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search Music" 
            className="w-full bg-slate-800 text-white placeholder-gray-400 pl-12 pr-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Recently Played */}
      <div className="px-4 mt-8">
        <h3 className="text-lg font-semibold text-white mb-4">Recently Played</h3>
        <div className="flex space-x-4">
          {recentlyPlayed.map((item) => (
            <div key={item.id} className="flex-shrink-0">
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

      {/* Recommend for you */}
      <div className="px-4 mt-8 pb-24">
        <h3 className="text-lg font-semibold text-white mb-4">Recommend for you</h3>
        <div className="space-y-4">
          {recommendations.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700">
        <div className="flex items-center justify-around py-4">
          <Home className="w-6 h-6 text-gray-400" />
          <Music className="w-6 h-6 text-blue-400" />
          <Heart className="w-6 h-6 text-gray-400" />
          <MapPin className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
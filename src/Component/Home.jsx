import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Tabs from "./Tabs";
import { CiSearch } from "react-icons/ci";
import { Music } from "lucide-react"; // Logo icon

export default function MusicAppHome() {
  const navigate = useNavigate();

  const handleGoToPlayer = (trackIndex) => {
    navigate("/player", { state: { trackIndex } });
  };

  const recentlyPlayed = [
    { id: 1, title: "Shine", image: "/Pics2.jpg" },
    { id: 2, title: "Grace & Mercy", image: "/coverPics.jpg" },
    { id: 3, title: "Veronica", image: "/download.jpeg" },
  ];

  const recommendations = [
    {
      id: 1,
      title: "Shine",
      artist: "Lay Nee",
      duration: "3:45 / dreams",
      image: "/Pics2.jpg",
    },
    {
      id: 2,
      title: "Grace & Mercy",
      artist: "StaR'ex",
      duration: "4:12 / dreams",
      image: "/coverPics.jpg",
    },
    {
      id: 3,
      title: "Veronica",
      artist: "StaR'ex",
      duration: "3:28 / dreams",
      image: "/download.jpeg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #121212 0%, #000000 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header with Logo */}
      <div className="flex items-center justify-between p-4 pt-12">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-lg">
              <Music className="text-white w-6 h-6" />
            </div>
            <h1 className="text-white text-xl font-bold tracking-wide">
              Sound <span className="text-green-500">Mark</span>
            </h1>
          </div>
        </div>

        {/* Notification Bell */}
        <div className="p-2 rounded-full hover:bg-[#1a1a1a] transition-colors duration-300 cursor-pointer">
          <Bell className="text-gray-300 w-6 h-6 hover:text-green-500 transition-colors duration-300" />
        </div>
      </div>

      {/* Search Section */}
      <div className="relative justify-between items-center rounded-2xl px-6 py-5 text-white font-sans">
        <div className="flex items-center justify-between gap-8">
          <h2 className="text-2xl font-bold text-white">
            Listen The <br /> Latest Musics
          </h2>
          <div className="relative mb-4">
            <CiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search Music"
              className="bg-transparent outline-none pl-12 pr-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-green-500 text-white placeholder-gray-400 w-64"
            />
          </div>
        </div>
      </div>

      {/* Recently Played */}
      <div className="px-1 mt-4">
        <h3 className="text-lg font-semibold text-white mb-4">
          Recently Played
        </h3>
        <div className="flex space-x-6">
          {recentlyPlayed.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
              onClick={() => handleGoToPlayer(index)}
            >
              <div className="w-24 h-24 bg-slate-800 rounded-lg overflow-hidden mb-2 shadow-lg group-hover:shadow-xl group-hover:shadow-green-500/20 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-white text-sm font-medium text-center transition-all duration-300 group-hover:text-green-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div className="px-4 mt-16 pb-32">
        <h3 className="text-lg font-semibold text-white mb-4">
          Recommend for you
        </h3>
        <div className="space-y-6">
          {recommendations.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center space-x-3 cursor-pointer hover:bg-gradient-to-r hover:from-[#181818] hover:to-[#202020] p-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/10 group"
              onClick={() => handleGoToPlayer(index)}
            >
              <div className="w-12 h-12 bg-slate-800 rounded-xl overflow-hidden flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex-1 min-w-0 transition-all duration-300 group-hover:translate-x-1">
                <h4 className="text-white font-medium text-sm truncate group-hover:text-green-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {item.artist}
                </p>
                <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors duration-300">
                  {item.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Tabs />
    </div>
  );
}

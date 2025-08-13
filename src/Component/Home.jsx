import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Tabs from "./Tabs";
import { CiSearch } from "react-icons/ci";

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
        background: "linear-gradient(to bottom, #1c0b30, hwb(223 4% 86%))",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "16px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 rounded-full overflow-hidden">
      <img 
        src="download.jpeg" 
        className="w-full h-full object-cover"
      />
    </div>
    <div>
      <h1 className="text-white font-semibold">Sarwar Jahan</h1>
      <p className="text-gray-400 text-sm">Gold Member</p>
    </div>
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
            className="bg-transparent outline-none pl-12 pr-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 w-64"
          />
        </div>
        </div>
      </div>

      {/* Recently Played */}
      <div className="px-1 mt-4">
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
              <p className="text-white text-sm font-medium text-center">
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
                <h4 className="text-white font-medium text-sm truncate">
                  {item.title}
                </h4>
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

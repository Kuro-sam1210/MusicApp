
export const audioList = [
  { 
    header: "Shine by Lay Nee", 
    title: "Shine", 
    artist: "Lay Nee", 
    src: "/Audio.mp3", 
    image: "/Pics2.jpg",
    duration: "3:45"
  },
  { 
    header: "Grace & Mercy by StaR'ex", 
    title: "Grace & Mercy", 
    artist: "StaR'ex", 
    src: "/track2.ogg", 
    image: "/coverPics.jpg",
    duration: "4:12"
  },
  { 
    header: "Veronica by StaR'ex", 
    title: "Veronica", 
    artist: "StaR'ex", 
    src: "/track3.mp3", 
    image: "/download.jpeg",
    duration: "3:28"
  },
];

// Helper function to get formatted duration
export const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

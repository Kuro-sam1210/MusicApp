import { useNavigate, useLocation } from 'react-router-dom';
import { CiHome } from "react-icons/ci"
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function Tabs({ onNavigateFromPlayer, currentRoute }) {
  const navigate = useNavigate();
  const location = useLocation();

  
  const isOnPlayerRoute = currentRoute === '/player';
  const shouldUseCustomNavigation = isOnPlayerRoute && onNavigateFromPlayer;

  const handleGoToHome = () => {
    if (shouldUseCustomNavigation) {
      onNavigateFromPlayer('/');
    } else {
      navigate('/');
    }
  };

  const handleGoToPlayer = () => {
    navigate('/player');
  };

  const handleGoToFavorites = () => {
    if (shouldUseCustomNavigation) {
      onNavigateFromPlayer('/favorites');
    } else {
      navigate('/favorites');
    }
  };

  const handleGoToProfile = () => {
    if (shouldUseCustomNavigation) {
      onNavigateFromPlayer('/profile');
    } else {
      navigate('/profile');
    }
  };

  const isHome = location.pathname === '/';
  const isPlayer = location.pathname === '/player';
  const isFavorites = location.pathname === '/favorites';
  const isProfile = location.pathname === '/profile';

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      height: '60px',
      maxWidth: '530px',
      background: 'linear-gradient(to bottom, #0b1630, #0a1123)',
      backdropFilter: "blur(8px)",
      borderRadius: '20px 20px 0 0',
      boxShadow: "0 6px 17px rgba(0,0,0,0.3)",
      alignItems: 'center',
      // padding: '12px 0',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '16px 0'
      }}>
        <CiHome 
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: isHome ? 'rgb(96 165 250)' : 'rgb(156 163 175)'
          }}
          onClick={handleGoToHome}
        />
        <IoMusicalNotesOutline 
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: isPlayer ? 'rgb(96 165 250)' : 'rgb(156 163 175)'
          }}
          onClick={handleGoToPlayer}
        />
        <CiHeart 
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: isFavorites ? 'rgb(96 165 250)' : 'rgb(156 163 175)'
          }}
          onClick={handleGoToFavorites}
        />
        <CgProfile 
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: isProfile ? 'rgb(96 165 250)' : 'rgb(156 163 175)'
          }}
          onClick={handleGoToProfile}
        />
      </div>
    </div>
  );
}

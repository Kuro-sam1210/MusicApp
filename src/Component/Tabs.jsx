import { useNavigate, useLocation } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function Tabs({ onNavigateFromPlayer, currentRoute }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isOnPlayerRoute = currentRoute === '/player';
  const shouldUseCustomNavigation = isOnPlayerRoute && onNavigateFromPlayer;

  const handleGoToHome = () => {
    shouldUseCustomNavigation ? onNavigateFromPlayer('/') : navigate('/');
  };

  const handleGoToPlayer = () => {
    navigate('/player');
  };

  const handleGoToFavorites = () => {
    shouldUseCustomNavigation ? onNavigateFromPlayer('/favorites') : navigate('/favorites');
  };

  const handleGoToProfile = () => {
    shouldUseCustomNavigation ? onNavigateFromPlayer('/profile') : navigate('/profile');
  };

  const isHome = location.pathname === '/';
  const isPlayer = location.pathname === '/player';
  const isFavorites = location.pathname === '/favorites';
  const isProfile = location.pathname === '/profile';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '60px',
        maxWidth: '530px',
        background: `
          radial-gradient(circle at 40% 40%, rgba(0,51,0,0.8) 0%, transparent 20%),
          radial-gradient(circle at 30% 30%, rgba(0,102,51,0.8) 0%, transparent 20%),
          linear-gradient(to top, #000000, #002b1f)
        `,
        borderRadius: '20px 20px 0 0',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '16px 0'
        }}
      >
        <CiHome
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: isHome ? 'rgb(29,185,84)' : 'rgb(156, 163, 175)'
          }}
          onClick={handleGoToHome}
        />
        <IoMusicalNotesOutline
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: isPlayer ? 'rgb(29,185,84)' : 'rgb(156, 163, 175)'
          }}
          onClick={handleGoToPlayer}
        />
        <CiHeart
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: isFavorites ? 'rgb(29,185,84)' : 'rgb(156, 163, 175)'
          }}
          onClick={handleGoToFavorites}
        />
        <CgProfile
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: isProfile ? 'rgb(29,185,84)' : 'rgb(156, 163, 175)'
          }}
          onClick={handleGoToProfile}
        />
      </div>
    </div>
  );
}

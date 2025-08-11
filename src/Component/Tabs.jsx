import { useNavigate, useLocation } from 'react-router-dom';
import { CiHome } from "react-icons/ci"
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

export default function Tabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToHome = () => {
    navigate('/');
  };

  const handleGoToPlayer = () => {
    navigate('/player');
  };

  const handleGoToFavorites = () => {
    navigate('/favorites');
  };

  const isHome = location.pathname === '/';
  const isPlayer = location.pathname === '/player';
  const isFavorites = location.pathname === '/favorites';

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '375px',
      background: 'rgb(15 23 42)',
      borderTop: '1px solid rgb(51 65 85)'
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
        <CiLocationOn 
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            color: 'rgb(156 163 175)'
          }}
        />
      </div>
    </div>
  );
}

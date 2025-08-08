import './player2.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { CiPause1 } from "react-icons/ci";
import { CiHome } from "react-icons/ci"

export default function MusicPlayer() {
  return (
    <div className="music-player">
      <div className="status-bar">
        
        <div className="battery-container">
        </div>
      </div>

      <div className="header">
        <svg className="icon-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <div className="header-title">Ophelia by Steven</div>
        <svg className="icon-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>

      <div className="album-section">
        <div className="album-cover">
          <div className="album-content">
            <div className="album-title">OPHELIA</div>
            <div className="artist-avatar"></div>
            <div className="composer-text">MUSIC COMPOSED BY</div>
            <div className="composer-name">STEVEN PRICE</div>
          </div>
        </div>
      </div>

      <div className="song-info">
        <div className="song-title">Ophelia</div>
        <div className="artist-name">Steven Price</div>
      </div>

      <div className="progress-section">
        <div className="progress-times">
          <span>1:25</span>
          <span>3:15</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      <div className="controls">
        <svg className="icon-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5l5.196 5.196a1 1 0 010 1.414L8 17" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 5l5.196 5.196a1 1 0 010 1.414L16 17" />
        </svg>
        
        <GrFormPrevious className="icon-8" />
        
        <div className="play-button">
          <CiPause1 />
        </div>
        
        <MdNavigateNext className="icon-8" />
        
        <svg className="icon-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>

      <div className="bottom-nav">
        <svg className="nav-icon inactive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <svg className="nav-icon active" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
        <svg className="nav-icon inactive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <svg className="nav-icon inactive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </div>
  );
}
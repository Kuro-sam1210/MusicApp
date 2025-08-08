import './player2.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { CiPause1 } from "react-icons/ci";
import { CiHome } from "react-icons/ci"
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

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
        <CiHome className="nav-icon inactive" />
        <IoMusicalNotesOutline className="nav-icon active" />
        <CiHeart className="nav-icon inactive" />
        <CiLocationOn className="nav-icon inactive" />
      </div>
    </div>
  );
}
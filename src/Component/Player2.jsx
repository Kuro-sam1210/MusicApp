import './player2.css';
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { CiPause1 } from "react-icons/ci";
import { CiHome } from "react-icons/ci"
import { IoMusicalNotesOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import Tabs from '../Component/Tabs';

export default function MusicPlayer() {
  const audioList = [
    { header: "Shine by Lay Nee", title: "Shine", artist: "Lay Nee", src: "/Audio.mp3",  image: "/Pics2.jpg" },
    { header: "Grace & Mercy by StaR'ex", title: "Grace & Mercy", artist: "StaR'ex", src: "/track2.ogg",  image: "/coverPics.jpg", },
    { header: "Veronica by StaR'ex", title: "Veronica", artist: "StaR'ex", src: "/track3.mp3", image: "/download.jpeg" },
  ];
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const navigate = useNavigate();
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
   let nextTrack = currentTrack + 1;
   if (nextTrack >= audioList.length) {
     nextTrack = 0;
   }
   setCurrentTrack(nextTrack);
   setCurrentTrack(nextTrack);
   setIsPlaying(true);

 };

   const handleTimeUpdate = () => {
   const audio = audioRef.current;
   setCurrentTime(audio.currentTime);
   setDuration(audio.duration || 0);
 };

 const handleEnded = () => {
   handleNext();
 };

useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;
  audio.load();
  setCurrentTime(0);
  if (isPlaying) {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Playback error:", error);
      });
    }
  }
}, [currentTrack]);

  
  const handlePrev = () => {
    let prevTrack = currentTrack - 1;
    if (prevTrack < 0) {
      prevTrack = audioList.length - 1;
    }
    setCurrentTrack(prevTrack);
    setCurrentTrack(nextTrack);
    setIsPlaying(true);

 };

  const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
   };

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <div className="music-player">
      <div className="status-bar">
        
        <div className="battery-container">
        </div>
      </div>

      <div className="header">
        <GrFormPrevious 
          className="icon-6" 
          onClick={handleGoToHome}
          style={{ cursor: 'pointer' }}
        />
        <div className="header-title">{audioList[currentTrack].header}</div>
        <CiHeart 
          className={`icon-6 heart-icon ${isLiked ? 'heart-active' : ''}`}
          onClick={toggleHeart}
        />
      </div>

      <div className="album-section">
        <div className="album-cover">
          <div className="album-content">
            <div className="album-title">{audioList[currentTrack].title}</div>
            <div ><img
          src={audioList[currentTrack].image}
          alt="Track Art"
          className="w-40 h-40 mx-auto rounded-xl mb-4 object-cover"
        /></div>
            <div className="composer-text">MUSIC COMPOSED BY</div>
            <div className="composer-name">{audioList[currentTrack].artist}</div>
          </div>
        </div>
      </div>

      <div className="song-info">
        <div className="song-title">{audioList[currentTrack].title}</div>
        <div className="artist-name">{audioList[currentTrack].artist}</div>
      </div>

      <div className="progress-section">
        <div className="progress-times">
          <audio
            ref={audioRef}
            src={audioList[currentTrack].src}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          />
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="progress-bar">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                const newTime = Number(e.target.value);
                audioRef.current.currentTime = newTime;
                setCurrentTime(newTime);
              }}
              className="w-full accent-purple-500"
            />
          </div>
      </div>

      <div className="controls">
       <CiHeart 
          className={`icon-6 heart-icon ${isLiked ? 'heart-active' : ''}`}
          onClick={toggleHeart}
        />
        <button onClick={handlePrev}><GrFormPrevious className="icon-8" /> </button>
        
        <button
            onClick={togglePlayPause}
            className="play-button"
          >
            {isPlaying ? <CiPause1 /> : <CiPlay1 />}
        </button>
        
        <button onClick={handleNext}><MdNavigateNext className="icon-8" /></button>
        
        <svg className="icon-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>

      <Tabs />
    </div>
  );
}
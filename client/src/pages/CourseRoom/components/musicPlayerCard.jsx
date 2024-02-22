import React, { useState, useRef } from "react";
import "../styles/musicPlayerCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepForward,
  faStepBackward,
} from "@fortawesome/free-solid-svg-icons";

const MusicPlayerCard = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio()); // Create an audio reference

  const songs = [
    {
      name: "Song 1",
      audio: "Ghostrifter-Official-Purple-Dream(chosic.com).mp3",
      image: "lofi1.png",
    },
    {
      name: "Song 2",
      audio: "melody-of-nature-main(chosic.com).mp3",
      image: "lofi2.png",
    },
  ];

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = songs[currentSongIndex].audio;
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const prevSongHandler = () => {
    audioRef.current.pause(); // Stop current song
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(false); // Reset play button to "Play"
  };

  const nextSongHandler = () => {
    audioRef.current.pause(); // Stop current song
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false); // Reset play button to "Play"
  };

  return (
    <div className="music-player-card">
      <img
        className="music-player-image"
        src={songs[currentSongIndex].image}
        alt={songs[currentSongIndex].name}
      />
      <p className="music-player-song-name">{songs[currentSongIndex].name}</p>
      <div className="music-player-buttons">
        <button onClick={prevSongHandler}>
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button onClick={playPauseHandler}>
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </button>
        <button onClick={nextSongHandler}>
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>
      {/* Hidden audio element for playing music */}
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayerCard;

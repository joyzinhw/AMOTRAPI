import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TopTrack.css"; // Adicione estilos específicos, se necessário

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get("http://localhost:3002/api/tracks");
        setTracks(response.data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div className="carousel">
    <h1 className= "title">Top 10 Faixas mais ouvidas</h1>
      {tracks.map((track) => (
        <div className="track" key={track.id}>
          <img src={track.image_url} alt="Album Art" />
          <h3>{track.name}</h3>
          <p>{track.album}</p>
          <audio controls>
            <source src={track.preview_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default TopTracks;

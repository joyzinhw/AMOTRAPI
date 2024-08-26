import React from "react";
import "./albums.css";

function ArtistsInfo({ artist, albums }) {
  return (
    <div className="artist-info-container">
      <div className="artist-details text-center mb-5">
        <img
          src={artist.profileImage}
          alt={artist.name}
          className="img-fluid rounded-circle mb-4"
          style={{ width: "150px", height: "150px" }}
        />
        <h2>{artist.name}</h2>
        <p className="text-muted">
          {artist.genres && artist.genres.length > 0
            ? artist.genres.join(", ")
            : "Genres not available"}
        </p>
        <p className="biography">{artist.biography}</p>
        
       
        <a
          href={artist.artistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="album-bottom btn">
          Ver no Spotify
        </a>
        
      </div>

      <div className="album-grid">
        {albums.map((album, index) => {
          const dataFormatada = new Date(album.release_date).toLocaleDateString(
            "pt-BR"
          );
          return (
            <div key={index} className="album">
              <img src={album.coverImage} alt={album.name} />
              <h3>{album.name}</h3>
              <p>{dataFormatada}</p>
              <div className="album-bottom">
              <a href={album.url} target="_blank" rel="noopener noreferrer">
                Escutar no Spotify
              </a>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtistsInfo;

import React from 'react';

function Albums({ albums }) {
  return (
    <div className="album-grid">
      {albums.map((album, index) => (
        <div key={index} className="album">
          <img src={album.coverImage} alt={album.name} className="img-fluid" />
          <h3 className="mt-2">{album.name}</h3>
          <p>{album.release_date}</p>
          <a href={album.url} target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </a>
        </div>
      ))}
    </div>
  );
}

export default Albums;

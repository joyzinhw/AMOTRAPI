
import React from "react";
import { useLocation } from "react-router-dom";
import ArtistsInfo from "../../components/artistInfo/ArtistsInfo";

function PageAboutArtist() {
  const location = useLocation();
  const { artist, albums } = location.state || { artist: null, albums: [] };

  return (
    <div>
      {artist && <ArtistsInfo artist={artist} albums={albums} />}
    </div>
  );
}

export default PageAboutArtist;


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import ArtistsInfo from "../../components/artistInfo/ArtistsInfo";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function PageAboutArtist() {
    const location = useLocation();
    const { artist, albums } = location.state || { artist: null, albums: [] };

    return (
        <div>
            <Header />
            {artist && <ArtistsInfo artist={artist} albums={albums} />}
            <Footer />
        </div>
    );
}

export default PageAboutArtist;

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./TopTrack.css"; 

function TopTracks() {
  const [tracks, setTracks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tracksPerPage = 9;

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

  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = tracks.slice(indexOfFirstTrack, indexOfLastTrack);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(tracks.length / tracksPerPage);

  const getPaginationItems = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        startPage = 1;
        endPage = maxPagesToShow - 1;
        pageNumbers.push(...Array.from({ length: endPage }, (_, i) => i + 1));
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {
        startPage = totalPages - maxPagesToShow + 2;
        endPage = totalPages;
        pageNumbers.push(1);
        pageNumbers.push("...");
        pageNumbers.push(
          ...Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          )
        );
      } else {
        startPage = currentPage - Math.floor(maxPagesToShow / 2) + 1;
        endPage = currentPage + Math.floor(maxPagesToShow / 2) - 1;
        pageNumbers.push(1);
        pageNumbers.push("...");
        pageNumbers.push(
          ...Array.from(
            { length: endPage - startPage + 1 },
            (_, i) => startPage + i
          )
        );
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="container">
      <div className="py-5">
        <h1 className="title">Top 10 Faixas mais ouvidas</h1>
        <div className="row">
          {currentTracks.map((track, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm" style={{ width: "100%" }}>
                <img
                  src={track.image_url}
                  className="card-img-top"
                  alt={track.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="card-body">
                  <p className="card-text">{track.name}</p>
                  <p className="card-text text-muted">{track.album}</p>
                  <div className="d-flex justify-content-between align-items-center audio-container">
                    <audio controls>
                      <source src={track.preview_url} type="audio/mpeg" />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav aria-label="Navegação de página">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
          </li>
          {getPaginationItems().map((item, index) => (
            <li
              key={index}
              className={`page-item ${item === currentPage ? "active" : ""} ${
                item === "..." ? "disabled" : ""
              }`}
            >
              {item === "..." ? (
                <span className="page-link">...</span>
              ) : (
                <button
                  className="page-link"
                  onClick={() => handlePageChange(item)}
                >
                  {item}
                </button>
              )}
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Próximo
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopTracks;

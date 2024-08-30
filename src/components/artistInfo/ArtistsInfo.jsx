import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./artistsInfo.css";

function ArtistsInfo({ artist, albums }) {
  const [currentPage, setCurrentPage] = useState(1);
  const albumsPerPage = 9;


  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(albums.length / albumsPerPage);

  // Função para criar números de página com reticências
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
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - Math.floor(maxPagesToShow / 2)) {
        startPage = totalPages - maxPagesToShow + 2;
        endPage = totalPages;
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
      } else {
        startPage = currentPage - Math.floor(maxPagesToShow / 2) + 1;
        endPage = currentPage + Math.floor(maxPagesToShow / 2) - 1;
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(...Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i));
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="container">
      <div className="py-5">
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">{artist.name} </h2>
            <p className="text-muted">
              {artist.genres && artist.genres.length > 0
                ? artist.genres.join(", ")
                : "Genres not available"}
            </p>
            <p class="lead">{artist.biography}</p>
            <a
              href={artist.artistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg my-3">
              Ver no Spotify
            </a>
          </div>
          <div className="col-md-4 order-md-1">
            <img
              src={artist.profileImage}
              alt={artist.name}
              className="img-fluid rounded mb-4"
              width="370"
              height="370"
            />
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          {currentAlbums.map((album, index) => {
            const dataFormatada = new Date(album.release_date).toLocaleDateString("pt-BR");
            return (

              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm" style={{ width: '100%' }}>
                  <img src={album.coverImage} className="card-img-top" alt={album.name} style={{ width: '100%', height: 'auto' }} />
                  <div className="card-body">
                    <p className="card-text">{album.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href={album.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">Escutar no Spotify</a>
                      </div>
                      <small className="text-body-secondary">{dataFormatada}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <nav aria-label="Navegação de página">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
          </li>
          {getPaginationItems().map((item, index) => (
            <li key={index} className={`page-item ${item === currentPage ? 'active' : ''} ${item === '...' ? 'disabled' : ''}`}>
              {item === '...' ? (
                <span className="page-link">...</span>
              ) : (
                <button className="page-link" onClick={() => handlePageChange(item)}>
                  {item}
                </button>
              )}
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Próximo</button>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .pagination {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }
        .page-item {
          margin: 0;
        }
        .page-link {
          padding: 0.5rem 0.75rem;
        }
        @media (max-width: 576px) {
          .page-link {
            padding: 0.25rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ArtistsInfo;

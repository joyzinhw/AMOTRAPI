import React, { useState } from 'react';
import axios from 'axios';
import './searchForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchForm({ setArtistInfo, color }) {
  const [artistName, setArtistName] = useState('');
  const [error, setError] = useState('');

  const fetchArtistInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:2800/api/getArtistInfos`, {
        params: { artistName }
      });

      setArtistInfo(response.data);
      setError('');
    } catch (err) {
      setError('Error fetching artist info.');
      setArtistInfo(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Evita que a página seja recarregada ao submeter o formulário
    if (artistName.trim() === '') {
      setError('Please enter an artist name');
      return;
    }
    fetchArtistInfo();
  };

  function adicionarCor() {
    if (color === 'green') {
      return {
        backgroundColor: '#1DB954',
        color: '#FFF',
        border: '1px solid #000000',
      };
    }
    return {
      backgroundColor: '#FFFFFF',
      color: '#000000',
    };
  }

  function addCorButton() {
    if (color === 'black') {
      return {
        backgroundColor: '#212529',
        color: '#FFFFFF',
      };
    }
    return {
      backgroundColor: '#FFFFFF',
      color: '#000000',
    };
  }

  return (
    <div>
      <Form className="d-flex custom-search-form" role="search" onSubmit={handleSearch}>
        <Form.Control
          type="search"
          placeholder="Pesquise pelo seu artista..."
          className="me-2 custom-search-input"
          aria-label="Search"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          style={adicionarCor()}
        />
        <Button
          variant="outline-dark"
          type="submit"
          className='custom-search-button'
        >
          Buscar
        </Button>
      </Form>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default SearchForm;

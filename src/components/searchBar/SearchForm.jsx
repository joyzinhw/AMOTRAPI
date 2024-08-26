import React, { useState } from "react";
import axios from "axios";
import "./searchForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchForm({ setArtistInfo, color }) {
  const [artistName, setArtistName] = useState("");
  const [error, setError] = useState("");

  const fetchArtistInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2800/api/getArtistInfos`,
        {
          params: { artistName },
        }
      );

      setArtistInfo(response.data);
      setError("");
    } catch (err) {
      setError("Error fetching artist info.");
      setArtistInfo(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (artistName.trim() === "") {
      setError("Digite o nome de algum artista");
      return;
    }
    fetchArtistInfo();
  };


  return (
    <div>
      <Form
        className="d-flex custom-search-form"
        role="search"
        onSubmit={handleSearch}
      >
        <Form.Control
          type="search"
          placeholder="Pesquise pelo seu artista..."
          className="me-2 custom-search-input"
          aria-label="Search"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <Button
          variant="dark"
          type="submit"
          className="custom-search-button"
        >
          Buscar
        </Button>
      </Form>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default SearchForm;

import React from 'react';
import './searchForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchForm() {
    return (
      <Form className="d-flex custom-search-form" role="search">
        <Form.Control
          type="search"
          placeholder="Pesquise pelo seu artista..."
          className="me-2 custom-search-input"
          aria-label="Search"
        />
        <Button variant="outline-dark" type="submit" className='custom-search-button'>
          Buscar
        </Button>
      </Form>
    );
  }

export default SearchForm

import React from 'react';
import './searchForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchForm(props) {
  let cor = props.color;

  function adicionarCor() {
    if (cor === 'green') {
      return {
        backgroundColor: '#1DB954',
        color: '#FFF',
        border: '1px solid #000000',
      };
    }
    // Adicione outros estilos conforme necessário
    return {
      backgroundColor: '#FFFFFF',
      color: '#000000', // Cor do texto padrão (preto)
    };
  }
  function addCorButton(){
    if (cor === 'black') {
      return {
        backgroundColor: '#212529',
        color: '#FFFFFF',
      };
    }
    // Adicione outros estilos conforme necessário

  }

  return (
    <Form className="d-flex custom-search-form" role="search">
      <Form.Control
        type="search"
        placeholder="Pesquise pelo seu artista..."
        className="me-2 custom-search-input"
        aria-label="Search"
        style={adicionarCor()}
      />
      <Button 
        variant="outline-dark" 
        type="submit" 
        className='custom-search-button'
        style={addCorButton()}
      >
        Buscar
      </Button>
    </Form>
  );
}

export default SearchForm;

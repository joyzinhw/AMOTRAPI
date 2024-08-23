import React from "react";
import './mainContent.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import mainImage from '../../assets/images/MainPicLandingPage.svg';
import SearchForm from "../searchBar/SearchForm";


function MainContent() {
    return (
        <Container className="my-5">
        <Row className="p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
          <Col lg={7} className="p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Descubra Seus Artistas e Álbuns Favoritos
            </h1>
            <p className="lead">Pesquise pelo seu artista favorito no nosso sistema</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            < SearchForm color='black'/>
            </div>
          </Col>
          <Col lg={4} className="offset-lg-1 p-0 overflow-hidden">
            <div className="svg-container">
              <img className="rounded-lg-3" src={mainImage} alt="Ilustração de uma garota debruçada ouvindo música" />
            </div>
          </Col>
        </Row>
      </Container>
    )
}
export default MainContent
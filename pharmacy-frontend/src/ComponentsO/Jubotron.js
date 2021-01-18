import React from "react";
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import fon from '../fon.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${fon}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 150px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;


const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Apteka</h1>
                <p>
                    ©Chernenko_Daria
                </p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;

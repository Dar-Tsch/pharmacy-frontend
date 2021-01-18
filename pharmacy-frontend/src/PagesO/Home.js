import React, {Component} from 'react';
import CarouselBox from "../ComponentsO/CarouselBox";
import {Button, Card, CardDeck, Col, Container, Row} from "react-bootstrap";
import rosl from '../assets/rosl.jpg';
import Jumbotron from "../ComponentsO/Jubotron";
import Footer from '../ComponentsO/Footer';

class Home extends Component {
    render() {
        return (<>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Аптека</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://cdnimg.rg.ru/img/content/139/69/20/Depositphotos_40474311_xl-2015_d_850.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Доставка ліків по Україні</Card.Title>
                                <Card.Text>
                                    Під час епідемії коронавірусу залишайтеся вдома й замовляйте ліки,
                                    вітаміни та інші товари онлайн.

                                </Card.Text>
                                <a href="https://www.ukrposhta.ua/lk/dostavka-likiv"><Button id="dost" type="button" variant="primary">Перейти</Button></a>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://b-apteka.ru/laravel_filemanager/photos/shares/5c133046cb8e5.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Лікарські росини</Card.Title>
                                <Card.Text>
                                    Лікарські рослини здавна використовувалися в народній та офіційній медицині.

                                </Card.Text>
                                <a href="https://lekfarm.ua/lekarstvennyie-travyi-381/"><Button id="github" type="button" variant="primary">Перейти</Button></a>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="https://st.depositphotos.com/1194063/3305/i/600/depositphotos_33059069-stock-photo-medicine-pills.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Карти аптек</Card.Title>
                                <Card.Text>
                                    На цьому сайті ви маєте змогу переглянути геолокацію аптек по категоріям і знайти найближчу до вас.
                                </Card.Text>
                                <a href="https://www.add.ua/internet-apteki-ukraina/"><Button id="kart" type="button" variant="primary">Перейти</Button></a>
                            </Card.Body>
                        </Card>
                    </CardDeck>

                    <h1></h1>

                  <Container style={{marginBottom:'30px'}} className="mt-3">
                      <Row>
                          <Col mt={7}>
                                <img src={rosl} height={300}/>
                          </Col>
                          <Col md={5}>
                              <h1>Зв'язок з нами</h1>
                              <p>Наша адресса: м.Черкаси, вул. Хрещатик №64</p>
                              <p>
                                  daschatschernenko@gmail.com
                              </p>
                              <p>
                                  +380635118700
                              </p>
                          </Col>
                      </Row>
                  </Container>
                </Container>
                <Jumbotron/>
                <Footer/>
            </>
        );
    }
}

export default Home;


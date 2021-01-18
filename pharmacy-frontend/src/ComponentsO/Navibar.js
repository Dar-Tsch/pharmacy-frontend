import React, {useState} from "react";
import {API_ROOT} from "../constants";

import {
    Button,
    Container,
    FormControl,
    Navbar,
    Nav,
    Form,
    Modal
} from "react-bootstrap";
import logo from "./ikon.png";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Infa from '../PagesO/Infa';
import Contacts from '../PagesO/Contacts';
import Home from '../PagesO/Home';
import Catalog from "../PagesO/Catalog";



import styled from 'styled-components';


const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: darkgray;

    &:hover {
      color: white;
    }
  }
`
export default function Navibar() {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [registerStatus, setRegisterStatus] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setRegisterStatus('');
        setShow(true);
    }
    const logout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('token');
        setEmail('');
    }
    const register = () => {
        fetch(`${API_ROOT}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        }).then(response => {
            if (response.status !== 201) {
                setRegisterStatus('\n' +
                    'Неможливо зареєструватися. Електронна пошта вже зареєстрована або недійсна електронна пошта та пароль.');
                return
            }
            setRegisterStatus('\n' +
                'Успіх! Користувач зареєстрований.')
        }).catch((err) => {
            setRegisterStatus('\n' +
                'Неможливо зареєструватися. Електронна пошта вже зареєстрована або недійсна електронна пошта та пароль.');
        })
    }

    const login = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        fetch(`${API_ROOT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        }).then(response => {
            if (response.status !== 200) {
                setRegisterStatus('Невірна адреса електронної пошти або пароль');
                return
            }
            response.json().then(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', data.user.email);
                if (data.user.isAdmin) localStorage.setItem('isAdmin', data.user.isAdmin);
                setShow(false);
            })
        }).catch((err) => {
            setRegisterStatus('Невірна адреса електронної пошти або пароль');
        })
    }
    return (
        <>
            <Styles>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> {" "}
                            Аптека
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">

                            <Nav className="mr-auto">
                                <Nav.Link href="/" exact> Головна </Nav.Link>
                                <Nav.Link href="/about" exact> Інформація </Nav.Link>
                                <Nav.Link href="/contacts" exact> Зв'язок </Nav.Link>
                                <Nav.Link href="/catalog" exact> Каталог </Nav.Link>


                            </Nav>
                            <Nav >
                                {localStorage.getItem('email') ?
                                    <div >
                                        <u style={{color:'white' ,fontSize: 14}} className={"light"}>{localStorage.getItem('email')}</u>
                                        <Button variant="dark" className="mr-2" onClick={logout}>Вийти</Button>
                                    </div> : <Button  variant="dark" className="mr-2" onClick={handleShow}>Увійти/Зареєструватися</Button>}




                            </Nav>
                            {/*<Form inline>*/}
                            {/*    <FormControl*/}
                            {/*        type="text"*/}
                            {/*        placeholder="Пошук"*/}
                            {/*        className="mr-sm-3"*/}
                            {/*    />*/}
                            {/*    <Button variant="outline-info">Пошук</Button>*/}
                            {/*</Form>*/}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={Infa}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/catalog" component={Catalog}/>
                    </Switch>


                </Router>
            </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Увійдіть, або зареєструйтея</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email адреса</Form.Label>
                            <FormControl value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Введіть email"/>
                            <Form.Text className="text-muted">Ми ніколи не будемо ділитися вашими електронними листами з кимось іншим.</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Пароль</Form.Label>
                            <FormControl  value={password}  onChange={event => setPassword(event.target.value)} type="password" placeholder="Введіть пароль"/>
                        </Form.Group>

                        <Form.Group>
                            <Button variant="dark" onClick={login} className="m-2">Увійти</Button>
                            <Button variant="dark" onClick={register}>Зареєструватися</Button>
                        </Form.Group>
                        <Form.Group>
                            <p>{registerStatus}</p>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );

}


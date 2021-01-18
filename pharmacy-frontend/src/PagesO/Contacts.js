import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Container, Form, Button} from "react-bootstrap";

export default class Contacts extends Component {

    state = {
        text: '',
        text2: '',

        select: ''
    }


    change = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})

    }


    handleClick() {
        console.log("Надіслано")
    }

    render() {
        const {text, text2, select} = this.state
        return (

            <Container style={{width:'500px'}}>
                <h1 className="text-center">Зв'яжіться з нами</h1>
                <Form onSubmit={this.submit} >
                    <h6>Ім'я</h6>
                    <input name="text" value={text} onChange={this.change}/>
                    <h6>Прізвище</h6>
                    <input name="text2" value={text2} onChange={this.change}/>

                    <select name="select" value={select} onChange={this.change} className="m-3">

                        <option value="1">До 18 років</option>
                        <option value="2">18-25 років</option>
                        <option value="3">25-40 років</option>
                        <option value="4">Більше 40 років</option>

                    </select>



                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email-адреса</Form.Label>
                        <Form.Control type="email" placeholder="Введіть email"/>
                        <Form.Text>
                            Ми ніколи не відправимо ваш email ще комусь
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Ваше повідомлення:</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <input type="hidden" name="project_name" value="Site Name"/>
                    <input type="hidden" name="admin_email" value="daschatschernenko@gmail.com"/>
                    <input type="hidden" name="form_subject" value="Form Subject"/>

                    <Button variant="primary" type="submit" onClick={this.handleClick.bind(this)}>Надіслати</Button>


                </Form>


            </Container>
        )
    }
    componentDidUpdate() {
        console.log(this.state)
    }
}




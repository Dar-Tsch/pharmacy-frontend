import React, {useState, useEffect} from 'react';
import {API_ROOT} from "../constants";

import {Container, Table, Button, Modal, Form, FormControl} from "react-bootstrap";


 const Catalog = () => {
     const [showAddProduct, setShowAddProduct] = useState(false);
     const handleCloseAddProduct = () => setShowAddProduct(false);
     const handleShowAddProduct = () => setShowAddProduct(true);
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     const [currentProductId, setCurrentProductId] = useState(0);
     const [products, setProducts] = useState([]);
     const [newProduct,  setNewProduct] = useState({
        title: 'new',
        price: 0.0,
        description: '',
        imageUrl: ''
     });

     /////////// Edit product
     const [showEditProduct, setShowEditProduct] = useState(false);
     const handleCloseEditProduct = () => setShowEditProduct(false);
     const handleShowEditProduct = (productId) => {
         setCurrentProductId(productId);
         setShowEditProduct(true);
         fetch(`${API_ROOT}/products/${productId}`, {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json'
             }
         }).then(response => {
             if (response.status !== 200) setShowEditProduct(false);
             response.json().then(data => {
                 setEditProduct(data);
                 setShowEditProduct(true);
             })
         }).catch((err) => {
             setProducts([]);
         })


     }
     const [editProduct,  setEditProduct] = useState({
         id: 0,
         title: 'new',
         price: 0.0,
         description: '',
         imageUrl: ''
     });

     useEffect(() => {
         getProducts();
     });
     const addProduct = () => {
         const token = localStorage.getItem('token');
         fetch(`${API_ROOT}/products`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
             },
             body: JSON.stringify(newProduct)
         }).then(response => {
             response.json().then(data => {
                 setShowAddProduct(false);
             })
         }).catch((err) => {
             console.log(err)
         })
     }
     const getProducts = () => {
         fetch(`${API_ROOT}/products`, {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json'
             }
         }).then(response => {
             response.json().then(data => {
                 setProducts(data);
             })
         }).catch((err) => {
            setProducts([]);
         })
     }
     const deleteProduct = (productId) => {
         const token = localStorage.getItem('token');
         fetch(`${API_ROOT}/products/${productId}`, {
             method: 'DELETE',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
             }
         }).then(response => {
             response.json().then(data => {
                 console.log(data);
             })
         }).catch((err) => {
             console.log(err);
         })
     }

     const editCurrentProduct = () => {
         const token = localStorage.getItem('token');
         fetch(`${API_ROOT}/products/${currentProductId}`, {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
             },
             body: JSON.stringify({
                 description: editProduct.description,
                 title: editProduct.title,
                 price: editProduct.price,
                 imageUrl: editProduct.imageUrl
             })
         }).then(response => {
             response.json().then(data => {
                 setShowEditProduct(false);
             })
         }).catch((err) => {
             console.log(err);
         })
     }

     ////////////////////////////////////////////////

    return (
        <Container  >

            <Modal show={showAddProduct} onHide={handleCloseAddProduct}>
                <Modal.Header closeButton>
                    <Modal.Title>Додати новий продукт</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Назва продукту</Form.Label>
                            <FormControl value={newProduct.title} onChange={event => setNewProduct({
                                description: newProduct.description,
                                title: event.target.value,
                                price: newProduct.price,
                                imageUrl: newProduct.imageUrl
                            })} type="text" placeholder="Введіть назву товару"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ціна продукту</Form.Label>
                            <FormControl value={newProduct.price} onChange={event => setNewProduct({
                                description: newProduct.description,
                                title: newProduct.title,
                                price: event.target.value,
                                imageUrl: newProduct.imageUrl
                            })} type="number" placeholder="Введіть ціну товару"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Опис продукту</Form.Label>
                            <FormControl value={newProduct.description} onChange={event => setNewProduct({
                                description: event.target.value,
                                title: newProduct.title,
                                price: newProduct.price,
                                imageUrl: newProduct.imageUrl
                            })} type="text" placeholder="Введіть опис товару"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>URL картинки продукту</Form.Label>
                            <FormControl value={newProduct.imageUrl} onChange={event => setNewProduct({
                                description: newProduct.description,
                                title: newProduct.title,
                                price: newProduct.price,
                                imageUrl: event.target.value
                            })} type="text" placeholder="Введіть URL-адресу зображення товару"/>
                        </Form.Group>
                        <Form.Group>
                            <Button onClick={addProduct}>Додати продукт</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>

            </Modal>

            <Modal show={showEditProduct} onHide={handleCloseEditProduct}>
                <Modal.Header closeButton>
                    <Modal.Title>Змінити поточний продукт</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Назва продукту</Form.Label>
                            <FormControl value={editProduct.title} onChange={event => setEditProduct({
                                id: editProduct.id,
                                description: editProduct.description,
                                title: event.target.value,
                                price: editProduct.price,
                                imageUrl: editProduct.imageUrl
                            })} type="text" placeholder="Введіть назву товару"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ціна продукту</Form.Label>
                            <FormControl value={editProduct.price} onChange={event => setEditProduct({
                                id: editProduct.id,
                                description: editProduct.description,
                                title: editProduct.title,
                                price: event.target.value,
                             imageUrl: editProduct.imageUrl
                            })} type="number" placeholder="Введіть ціну товару"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Опис продукту</Form.Label>
                            <FormControl value={editProduct.description} onChange={event => setEditProduct({
                                id: editProduct.id,
                                description: event.target.value,
                                title: editProduct.title,
                                price: editProduct.price,
                            imageUrl: editProduct.imageUrl
                            })} type="text" placeholder="Введіть опис товару"/>
                        </Form.Group>


                         <Form.Group>
                            <Form.Label>URL картинки продукту</Form.Label>
                            <FormControl value={editProduct.imageUrl} onChange={event => setEditProduct({
                                id: editProduct.id,
                                description: newProduct.description,
                                title: editProduct.title,
                                price: editProduct.price,
                                imageUrl: event.target.value
                            })} type="text" placeholder="Введіть URL-адресу зображення товару"/>
                        </Form.Group>


                        <Form.Group>
                            <Button onClick={editCurrentProduct}>Зберегти продукт</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>

</Modal>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Header closeButton >
                            <Modal.Title>Оформити замовлення</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Ім'я</Form.Label>
                                    <FormControl type="text" placeholder="Ваше ім'я"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Прізвище</Form.Label>
                                    <FormControl  type="text" placeholder="Ваше прізвище"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Адреса</Form.Label>
                                    <FormControl  type="text" placeholder="Вашу адресу"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Номер телефону</Form.Label>
                                    <FormControl  type="number" placeholder="Ваш номер"/>
                                </Form.Group>
                                <Form.Group>
                                    <Button onClick={handleClose}>Оформити замовлення</Button>
                                </Form.Group>
                            </Form>
                        </Modal.Body></Modal.Header>
                </Modal>

            {localStorage.getItem('isAdmin') ? <Button onClick={handleShowAddProduct} className={"m-2"}>Додати товар</Button> : ''}

            <Table striped bordered hover className="table table-sm table-dark">
                <thead>
                <tr style={{height:'60px'}}>
                    <th scope="col">ID</th>
                    <th scope="col">назва</th>
                    <th scope="col">ціна</th>
                    <th scope="col">опис</th>
                     <th scope="col">катинкаUrl</th>
                    {
                        localStorage.getItem('isAdmin') ? <th scope="col">Управління</th>: ''
                    }

                    {
                        localStorage.getItem('token')=== "true" ? <th scope="col">Замовлення</th>: ''
                }

                </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr>
                        <th scope="row">{product.id}</th>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.imageUrl}</td>
                        {localStorage.getItem('isAdmin') ?
                            <td>
                            <Button className={"m-2"} onClick={() => {
                                handleShowEditProduct(product.id);
                            }}>Редагувати</Button>

                            <Button onClick={() => {
                                deleteProduct(product.id)
                            }}>Видалити</Button>
                        </td>: ''
                        }
                        {
                            localStorage.getItem('token') ?
                                <td>
                                    <Button className={"m-2"} onClick={handleShow}>Замовити</Button>
                                </td>: 'Для замовлення увійдіть у систему!'
                        }

                    </tr>
                    ))}

                </tbody>
            </Table>
        </Container>
    )
 }
export default Catalog;

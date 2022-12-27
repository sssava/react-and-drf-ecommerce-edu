import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Row, Col, Image, ListGroup, Button, Card} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Rating from "../Rating";
import axios from "axios";

const ProductScreen = ({match}) => {
    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        async function fetchProduct(){
            try {
                const prodResp = await axios.get(`http://127.0.0.1:8000/product/${id}/`)
                setProduct(prodResp.data)
            }catch (error){
                alert("Ошибка при получениие данных")
                console.log(error)
            }

        }
        fetchProduct()
    }, [])

    return (
        <div>
            <Link to="/" className="btn btn-dark my-3">Go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name}></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={"#f8e825"} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>$ {product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In stock" : "Out of stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className="btn btn-block" disabled={product.countInStock===0} type="button">Add to cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            {product.name}
        </div>
    );
};

export default ProductScreen;
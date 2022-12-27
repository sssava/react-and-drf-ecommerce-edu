import React from 'react';
import {Row, Col} from "react-bootstrap";
import Product from "../Product";

import axios from "axios";
import {useState, useEffect} from "react";



const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts(){
            try {
                const productResp = await axios.get('http://127.0.0.1:8000/home/')
                setProducts(productResp.data)
            }catch (error){
                alert("Ошибка загрузки данных")
                console.log(error)
            }

        }
        fetchProducts()
    }, [])

    return (
        <div>
            <h1 className="text-center">Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={12} md={4} lg={4} xl={3}>
                        <Product {...product}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomeScreen;
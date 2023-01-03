import React from 'react';
import {Row, Col} from "react-bootstrap";
import Product from "../Product";

import {useEffect} from "react";

import {fetchProducts} from "../../redux/slices/productsSlice";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Loader";



const HomeScreen = () => {

    const dispatch = useDispatch()
    const { products, status } = useSelector(state => state.products)

    useEffect(() => {
        async function fetchData(){
            dispatch(fetchProducts())
        }
        fetchData()
    }, [dispatch])

    return (
        <div>
            <h1 className="text-center">Latest Products</h1>
            {
                status === 'loading' ? <Loader /> :
                status === 'success' ? <Row>
                    {products.map(product => (
                        <Col key={product.id} sm={12} md={4} lg={4} xl={3}>
                            <Product {...product}/>
                        </Col>
                    ))}
                </Row> : status.error
            }

        </div>
    );
};

export default HomeScreen;
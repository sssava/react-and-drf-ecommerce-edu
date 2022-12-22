import React from 'react';
import {Card} from "react-bootstrap";

const Product = ({_id, name, image, description, brand, category, price, countInStock, rating, numReviews}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${_id}`}><Card.Img src={image} /></a>
            <Card.Body>
                <a href={`/product/${_id}`}>
                    <Card.Title>
                        <strong>{name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as={"div"}>
                    <div className="my-3">
                        {rating} from {numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as={"div"}>
                    $ {price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
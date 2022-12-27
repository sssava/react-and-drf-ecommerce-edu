import React from 'react';
import {Card} from "react-bootstrap";
import Rating from "./Rating";
import {Link} from "react-router-dom";

const Product = ({id, name, image, description, brand, category, price, countInStock, rating, numReviews}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${id}`}><Card.Img src={image} /></Link>
            <Card.Body>
                <Link to={`/product/${id}`}>
                    <Card.Title>
                        <strong>{name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as={"div"}>
                    <div className="my-3">
                        {rating} from {numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as={"div"}>
                    $ {price}
                </Card.Text>

                <Rating value={rating} text={`${numReviews} reviews`} color={"#f8e825"} />
            </Card.Body>
        </Card>
    );
};

export default Product;
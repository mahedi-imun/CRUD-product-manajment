import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Product = ({ product,handleDelete}) => {
    const { name, img, seller, price, category } = product;
    const navigate = useNavigate()
    return (
        <div className='mb-5'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {seller}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        {category}
                    </Card.Text>
                    <div className='d-flex justify-content-around'>
                        <button onClick={()=>navigate(`/updateproduct/${product._id}`)} className='btn btn-primary'>update
                        </button>
                        <button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>delete</button>
                        <button onClick={()=>navigate('/addproduct')} className='btn btn-info'>add</button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Product;
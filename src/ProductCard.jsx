import {Container ,Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProductCard({ productName, productImage, productPage }) {
    return (
        <div className='ProductCard'>
            <Card style={{ width: '180px' }}>
                <Card.Img className='CardImage' variant="top" src={productImage} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Link to={productPage}><Button variant="primary">More Info</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
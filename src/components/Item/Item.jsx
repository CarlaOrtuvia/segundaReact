import React from 'react'
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
  return (
    <div>
      <div className='item'>
         <Card style={{  width: '26rem', padding: '20px', borderRadius: '7px', boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)' }}>
            <Card.Img variant="top" width='100px'style={{marginLeft:'65px'}} src={product.image} />
            <Card.Body style={{marginLeft:'20px', padding:'20px'}}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Precio{product.price}</Card.Text>
              <h3>Categoria{product.category}</h3>
              <Button variant="primary">Ver Detalle</Button>
            </Card.Body>
          </Card>  
        </div>
    </div>
  )
}

export default Item
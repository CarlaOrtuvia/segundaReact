import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ detalleProducto}) => {
    const { name, description, price, image, id} = detalleProducto
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
      }
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection:'column', alignItems:'center', padding:'3rem'}}>
        <h1>Detalle de Producto</h1>
        <h2>{name}</h2>
        <img src={image} alt={name} style={{width: '25rem'}}/>
        <p>{description}</p>
        <p>${price}</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>

    </div>
  )
}

export default ItemDetail
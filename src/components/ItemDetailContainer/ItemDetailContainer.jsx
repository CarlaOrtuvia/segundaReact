import React,{useEffect, useState} from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import {getList} from '../utils/getProducts'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const[detalleProducto, setDetalleProducto]= useState({})
    const[loading, setLoading] = useState(true)
    const {id} = useParams()
    useEffect(()=>{
        getList()
        .then((res) => setDetalleProducto(res.find((item) => item.id === id)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    })
  return (
    <div>
        {loading ? <Loader /> : <ItemDetail detalleProducto={detalleProducto} />}
    </div>
  )
}

export default ItemDetailContainer
import React from 'react'
import {CircleLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center',}}>
        <CircleLoader color='#ffb085' size={90} />
        </div>
  )
}

export default Loader
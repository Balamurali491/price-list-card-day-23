import React,{ useState } from 'react'
function Home(props) {

 const [quantity,setQuantity]=useState();

   const handleDecrement =()=>{
    if (quantity>1)
    setQuantity(preCount =>preCount -1);}
    const handleIncrement =()=>{
      if (quantity<1)
      setQuantity(preCount =>preCount +1)}
 
  
  return (
 
    <div className='card'>
      <div className='price-card'>
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
     <div className='product-name'>
      <br></br>
      <h2>{props.name}</h2><br></br>
      <p><span className='ops'><del>{props.ops}</del></span>{props.price}</p><br></br>
     <button type='button' onClick={handleDecrement}>-</button>
 <input type="text" className='form-control' />{quantity} 
<button type='button' onClick={handleIncrement}>+</button>
 <button className='btn1' ><i class="fa fa-cart-plus" aria-hidden="true"></i> Add to card</button>
 </div>
     </div>
      </div>
  )
}

export default Home
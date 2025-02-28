import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from 'react-router-dom'; 

const CartItems = () => {
  const { all_products, cartItems, removefromCart } = useContext(ShopContext)
  // const navigate = useNavigate();
  const { clearCart } = useContext(ShopContext);

  const calculateSubtotal = () => {
    let subtotal = 0;
    all_products.forEach((item) => {
      if (cartItems[item.id] > 0) {
        subtotal += item.new_price * cartItems[item.id];
      }
    });
    return subtotal;
  };

  const subtotal = calculateSubtotal();
  const shippingFee = 0; 
  const total = subtotal + shippingFee;

  
  const handleCheckout = () => {
    clearCart(); 
    // navigate('/'); 
  };

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {all_products.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div key={item.id}>
              <div className="cartitems-format">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='cartitems-product-icon'
                />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className='cartitems-quantity'>
                  {cartItems[item.id]}
                </button>
                <p>${item.new_price * cartItems[item.id]}</p>
                
               
                <FontAwesomeIcon 
                  icon={faTrash} 
                  className='cartitems-remove-icon' 
                  onClick={() => removefromCart(item.id)} 
                  size="lg" 
                  color="red" 
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          )
        }
        return null
      })}




<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>Cart Total</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Shipping Free</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
            </div>
        </div>
         <div className="cartitems-promocode">
        <p>If You Have A Promo Code, Enter It Here.</p>
        <div className="cartitems-promocodebox">
            <input type="text" placeholder="Enter your promo code..." />
           
        </div>
    </div>
        <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
    </div>
   
</div>
    </div>
  )
}

export default CartItems

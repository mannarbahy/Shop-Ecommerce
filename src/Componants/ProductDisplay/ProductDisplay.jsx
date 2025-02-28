import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
         <div className="productdisplay-img-list">
               <img src={product.image} alt={product.name} />
               <img src={product.image} alt={`${product.name} view 2`} />
               <img src={product.image} alt={`${product.name} view 3`} />
               <img src={product.image} alt={`${product.name} view 4`} />
         </div>
         <div className="productdisplay-img-contanier">
            <img src={product.image} alt={`${product.name} main view`} className='productdisplay-main-img'/>
         </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="filled star rating" />
            <img src={star_icon} alt="filled star rating" />
            <img src={star_icon} alt="filled star rating" />
            <img src={star_icon} alt="filled star rating" />
            <img src={star_dull} alt="empty star rating" />
            <p>(1456)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
        Crafted from high-quality genuine leather,
        this men's jacket combines timeless style with modern functionality.
        Designed for both comfort and durability,
        it features a sleek silhouette,
        a soft inner lining, and a smooth zip-up front.
        The versatile design makes it perfect for casual outings or adding an edgy touch to formal wear. With multiple pockets for convenience and a refined finish, 
        this leather jacket is a must-have for any wardrobe.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size </h1>
            <div className="productdisplay-right-size">
                <div id='size'>Small</div>
                <div id='size'>M</div>
                <div id='size'>L</div>
                <div id='size'>XL</div>
                <div id='size'>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'>
            <span>Category: </span>
            Women , T-Shirt , CropTop
           
            <span>Tages: </span>
            modern , classice , modest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
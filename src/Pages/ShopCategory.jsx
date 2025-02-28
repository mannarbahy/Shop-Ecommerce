import React, { useContext ,useEffect} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Items from '../Componants/Item/Items'
import dropdown_icon from '../Componants/Assets/dropdown_icon.png'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
   
  useEffect(() => {
    console.log('Category prop:', props.category);
    console.log('All products:', all_products);
    const filteredProducts = all_products.filter(item => item.category === props.category);
    console.log('Filtered products:', filteredProducts);
  }, [props.category, all_products]);

  const filteredProducts = all_products.filter(item => item.category === props.category);

  
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> 
          Out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
         
          if (props.category === item.category) {
            return <Items 
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          } else {
            return null;
          }
        })}
      </div>
      {filteredProducts.length === 0 && (
        <div className="no-products">
          No products found in this category
        </div>
      )}
    
      <div className="shopcategory-loadmore">
        Explor More
      </div>
    </div>
  )
}

export default ShopCategory
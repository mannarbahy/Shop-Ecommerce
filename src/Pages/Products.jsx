import React from 'react'
import {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Componants/Breadcrms/Breadcrum';
import ProductDisplay from '../Componants/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Componants/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Componants/RelatedProducts/RelatedProducts';

const Products = () => {
  const {all_products} = useContext(ShopContext);
  const {productId}= useParams();
  const product = all_products.find((product)=> product.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Products

import React, { useContext } from 'react';
import ShopCategory from './ShopCategory';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProdutDisplay from '../Components/ProductDisplay/ProdutDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatexProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  
  if (!product) {
    return <div>Product not found.</div>; // Added fallback for missing product
  }

  return (
    <div>
      <Breadcrum product={product}/>
      <ProdutDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;

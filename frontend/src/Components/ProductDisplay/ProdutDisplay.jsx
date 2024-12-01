import React, { useContext } from 'react';
import './ProdutDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProdutDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);

  if (!product) {
    return <div>Product data is unavailable.</div>; // Added fallback for undefined product
  }

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className='productdisplay-img'>
        <img className="productdisplay-main-img" src={product.image} alt="" />
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className='productdisplay-right-prices'>
            <div            className='productdisplay-right-price-old'>
             ${product.old_price}
            </div>
            <div className='productdisplay-right-price-new'>
             ${product.new_price}
            </div>
        </div>

        <div className="productdisplay-right-desc">
          A light weight casual wear
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
           console.log("Button clicked, product ID:", product.id);
            addToCart(product.id);
           }}
          >
         ADD TO CART
        </button>

        <p className='productdisplay-right-category'>
          <span>Category :</span>Women , Tshirt , Crop Top
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProdutDisplay;

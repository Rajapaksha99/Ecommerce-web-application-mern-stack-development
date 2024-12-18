import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  
  console.log("All products:", all_product);
  console.log("Cart items:", cartItems);

  
  if (!all_product || !cartItems) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
      const quantity = cartItems[product.id] || 0; // 
      if (quantity > 0) {
        
        const price = product.new_price ?? product.price ?? 0; 
        const totalPrice = price * quantity;

    return (
      <div key={product.id}>
        <div className="cartitems-format cartitems-format-main">
          <img
            className="carticon-product-icon"
            src={product.image}
            alt={product.name || "Product Image"}
          />
          <p>{product.name || "Unnamed Product"}</p>
          <p>${price.toFixed(2)}</p> 
          <button className="cartitems-quantity">{quantity}</button>
          <p>${totalPrice.toFixed(2)}</p> 
          <img
            src={remove_icon}
            onClick={() => removeFromCart(product.id)}
            alt="Remove"
            className="carticons-remove-icon"
          />
        </div>
        <hr />
      </div>
    );
  }
  return null;
})}

<div className="cartitems-down">
  <div className="cartitems-total">
    <h1>Cart Total</h1>
    <div>
      <div className="cartitems-total-item">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cartitems-total-item">
        <p>Shipping Fee</p>
        <p>Free</p>
      </div>
      <hr />
      <div className="cartitems-total-item">
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
      </div>
    </div>
    <button>PROCEED TO CHECKOUT</button>
  </div>
  <div className="cartitems-promocode">
    <p>If you have a promo code, Enter here</p>
    <div className="cartitems-promobox">
      <input type="text" placeholder="promo code" />
      <button>Submit</button>
    </div>
  </div>
</div>

    </div>
  );
};

export default CartItems;

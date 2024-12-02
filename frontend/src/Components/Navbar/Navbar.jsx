import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Sl GEM HUB</p>
      </div>
      <img onClick={dropdown_toggle} src={nav_dropdown} alt="" className='nav-dropdown'/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration: 'none'}} to='mens'>Sapphire</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration: 'none'}} to='womens'>Ruby</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='kids'>Others</Link>{menu==="kids"?<hr/>:<></>}
        </li>
      </ul>
      <nav className='nav-login-cart'>
        <button><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></button>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <nav className='nav-cart-count'>{getTotalCartItems()}</nav>
      </nav>
    </div>
  )
}

export default Navbar;
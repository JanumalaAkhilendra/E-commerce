import React,{useState} from 'react'
import "./NavBar.css"
import logo from "../Assets/logo.png"
import carticon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" srcset="" />
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu ==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu ==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}}to='/womens'>Women</Link>{menu ==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/
            kids'>Kids</Link>{menu ==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>   
        <Link to='/cart'><img src={carticon} alt="" /></Link>
            <div className="nav-button-count">0</div>
        </div>
    </div>
  )
}

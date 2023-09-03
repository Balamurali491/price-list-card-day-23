import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header className='header'>
      <div className='logo'><img src="./Images/bala-logo.png" alt="" /></div>
      <nav className='navbar'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Shop</a>   
        <button className=''><i class="fa fa-shopping-cart" aria-hidden="true"></i>  Card</button>
        </nav></header>
   
    <div className='card-header'>
      <h1>Shop in Style</h1><br></br>
      <p>With this shop homepage template</p>
    </div>
    <div className='main-box'>
      <Home name="Fancy Product" price="$40.00 - $80.00"></Home><br></br>
      <Home name="Special Iteam" price=" - $18.00" ops="$20.00"></Home><br></br>
      <Home name="Sale Iteam" price=" - $25.00" ops="$50.00"></Home><br></br>
      <Home name="Papular Iteam" price="$40.00"></Home><br></br>
      <Home name="Sale Iteam" price=" - $25.00" ops="$50.00"></Home><br></br>
      <Home name="Fancy Product" price="$120.00 - $280.00"></Home><br></br>
      <Home name="Special Iteam" price=" - $18.00" ops="$20.00"></Home><br></br>
      <Home name="Papular Iteam" price="$40.00"></Home><br></br>
    </div>
    <footer className='footer'>
      <p>Copyright @ Your Website 2023</p>
    </footer>
    <App />
   
  </React.StrictMode>,
)

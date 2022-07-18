import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <div className = "container-fluid justify-content-between" >
                <Link to="/"className="navbar-brand mb-0 h1" > Bakery </Link>
                <Link to="/add-product" className='btn btn-outline-primary'>Add Product</Link>
            </div>
        </nav>
    );
}

export default Header;
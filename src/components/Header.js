import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <div className = "container-fluid justify-content-between" >
                <span className="navbar-brand mb-0 h1" > Bakery </span>
                <button className='btn btn-outline-primary'>Add Product</button>
            </div>
        </nav>
    );
}

export default Header;
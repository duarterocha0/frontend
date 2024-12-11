import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" bg='dark' className='p-4 fs-3' variant='dark'>
            <Navbar.Brand href="/">Images Galery</Navbar.Brand>
        </Navbar>
    )
}

export default Header;
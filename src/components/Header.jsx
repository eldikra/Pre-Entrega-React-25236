import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../img/Logo.png';
const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" style={{width: "auto", height: "100px"}}/>
            <h1 className={styles.title}>Dikra's E-Commerce Store</h1>
        </header>
                
    );
};

export default Header;
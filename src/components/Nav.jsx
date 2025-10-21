import styles from '../styles/Nav.module.css';
const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.lista}>
                <li className={styles.item}><a href="/" className={styles.link}>Inicio</a></li>
                <li className={styles.item}><a href="#" className={styles.link}>Acerca de</a></li>
                <li className={styles.item}><a href="/contacto" className={styles.link}>Contacto</a></li>
            </ul>
        </nav>);
}
export default Nav;
import styles from '../../styles/Header.module.css';
import Nav from "../nav/Nav"
import logo from '../../public/icons/generic.png';

function Header() {
    return (
        <div className={styles.headerWrapper}>
            <img className={styles.logo} src={logo.src} />
            <Nav />
        </div>
    )
}

export default Header
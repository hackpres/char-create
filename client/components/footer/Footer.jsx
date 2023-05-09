import styles from '../../styles/Footer.module.css'
import gitHub from '../../public/icons/github.png';

function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <a className={styles.footerRepo} href='https://github.com/hackpres/char-create'>
                <img className={styles.footerImg} src={gitHub.src} alt='icon for GitHub repository' />
            </a>
            <p className={styles.footerText}>Role Forge is designed, developed, and maintained by
                <a className={styles.footerGit} href="https://github.com/hackpres">
                    hackpres
                </a>
            </p>
        </div>
  )
}

export default Footer
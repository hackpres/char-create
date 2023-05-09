import styles from '../../styles/Home.module.css'

function TitleHero() {
  return (
    <div className={styles.titleContainer}>
        <p className={styles.titlePre}>
        Welcome to
        </p>
        <h2 className={styles.titleName}>
        ROLE FORGE
        </h2>
    </div>
  )
}

export default TitleHero
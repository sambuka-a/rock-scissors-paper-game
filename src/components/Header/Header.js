import styles from './header.module.scss'

const Header = ({onLogoClick, score, cScore}) => {

  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <img 
              src='/assets/logo.svg' alt='logo'
              onClick={() => onLogoClick()}
            />
        </div>
        <div className={styles.score}>
            <div>You:</div>
            <span>{score}</span>
        </div>
        <div className={styles.score}>
            <div>AI:</div>
            <span>{cScore}</span>
        </div>
    </div>
  )
}

export default Header
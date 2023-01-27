import styles from './header.module.scss'

const Header = ({onUserChose, score, cScore}) => {

  return (
    <div className={styles.header}>
        <div className={styles.buttons}>
            <span onClick={(e) => {onUserChose(e.target.getAttribute("value"))}} value="paper">Paper</span>
            <span onClick={(e) => {onUserChose(e.target.getAttribute("value"))}} value="scissors">Scissors</span>
            <span onClick={(e) => {onUserChose(e.target.getAttribute("value"))}} value="rock">Rock</span>
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
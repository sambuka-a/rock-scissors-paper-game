import { motion } from "framer-motion"
import styles from './game-flow.module.scss'


const StartScreen = ({user = 'paper', computer='paper', winner, onPlayAgainButton}) => {

  return (
    <div className={styles.startScreen}>
      <div className={styles.chose}>
        <div className={styles.card}>
          <div className={styles.title}>
            <p>you picked</p>
          </div>  
          <motion.div 
            className={`${styles.icon} ${user === 'paper' ? styles.paper : user === 'rock' ? styles.rock : styles.scissors}`}
            animate={winner === 'You win' && { rotate: [180, 360], scale: [2, 1]}}
          >
            <div className={styles.imgWrapper}>
              <img src={`assets/icon-${user}.svg`} alt='paper icon'/>
            </div>
          </motion.div>
          <div className={`${styles.title} ${styles.title_hide}`}>
            <p>you picked</p>
          </div>
        </div>
        {winner && 
          <div className={styles.card}>
            <div className={styles.result}>
              <p>{winner}</p>
              <button onClick={() => {onPlayAgainButton()}}>play again</button>
            </div>
          </div>
        }
        <div className={styles.card}>
          <div className={styles.title}>
            <p>the house picked</p>
          </div>
          <motion.div 
            className={`${styles.icon} ${computer === 'paper' ? styles.paper : computer === 'rock' ? styles.rock : styles.scissors}`}
            animate={winner === 'You lose' && { rotate: [ 180, 360], scale: [2, 1]}}
          >
            <div className={styles.imgWrapper}>
              <img src={`assets/icon-${computer}.svg`} alt='scissors icon'/>
            </div>
          </motion.div>
          <div className={`${styles.title} ${styles.title_hide}`}>
            <p>the house picked</p>
          </div>
        </div>
      </div>
      {winner && 
          <div className={styles.result_mobile}>
            <div className={styles.result}>
                <p>{winner}</p>
                <button onClick={() => {onPlayAgainButton()}}>play again</button>
            </div>
          </div>
        }
    </div>
  )
}

export default StartScreen
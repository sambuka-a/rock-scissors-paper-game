import React from 'react'
import styles from './game-flow.module.scss'


const StartScreen = ({user = 'paper', computer='paper', winner, onPlayAgainButton}) => {
    console.log(user, computer, winner);



  return (
    <div className={styles.startScreen}>
      <div className={styles.chose}>
        <div className={styles.title}>
            <p>you picked</p>
            <p>the house picked</p>
        </div>
        <div className={styles.column}>
          <div className={`${styles.icon} ${user === 'paper' ? styles.paper : user === 'rock' ? styles.rock : styles.scissors}`}>
            <div className={styles.imgWrapper}>
              <img src={`assets/icon-${user}.svg`} alt='paper icon'/>
            </div>
          </div>
          {winner && 
            <div className={styles.result}>
                <p>{winner}</p>
                <button onClick={() => {onPlayAgainButton()}}>play again</button>
            </div>
          }
          <div className={`${styles.icon} ${computer === 'paper' ? styles.paper : computer === 'rock' ? styles.rock : styles.scissors}`}>
            <div className={styles.imgWrapper}>
              <img src={`assets/icon-${computer}.svg`} alt='scissors icon'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartScreen
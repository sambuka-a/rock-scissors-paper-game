import React from 'react'
import styles from './start-screen.module.scss'


const StartScreen = ({ onUserChose }) => {
  return (
    <div className={styles.startScreen}>
      <div className={styles.chose}>
        <div className={styles.row}>
          <div className={`${styles.icon} ${styles.paper}`}>
            <div className={styles.imgWrapper}>
              <img 
                src='/assets/icon-paper.svg' alt='paper icon'
                id="paper"
                onClick={(e) => {onUserChose(e.target.id)}}
              />
            </div>
          </div>
          <div className={`${styles.icon} ${styles.scissors}`}>
            <div className={styles.imgWrapper}>
              <img 
                src='/assets/icon-scissors.svg' alt='scissors icon'
                id="scissors"
                onClick={(e) => {onUserChose(e.target.id)}}
              />
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.icon} ${styles.rock}`}>
            <div className={styles.imgWrapper}>
              <img 
                src='/assets/icon-rock.svg' alt='rock icon'
                id="rock"
                onClick={(e) => {onUserChose(e.target.id)}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartScreen
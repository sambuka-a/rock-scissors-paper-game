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
            animate={winner === 'You win' && { rotate: [ 60, 120, 180, 360], scale: [1, 2, 2, 1]}}
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
            animate={winner === 'You lose' && { rotate: [ 60, 120, 180, 360], scale: [1, 2, 2, 1]}}
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

/*

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


    @import '../../styles/variables.scss';

.startScreen {
    display: flex;
    margin: 0 auto;
    text-transform: uppercase;
    color: $colorLight;
    font-size: $fs-sm;
}

.chose {
    display: flex;
    flex-direction: column;
    margin: 20px;

    .title {
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
        width: 60%;
    }

    .column {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 30px;

        .result {
            width: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            > p {
                font-size: $fs-reg;
            }

            > button {
                cursor: pointer;
                margin-top: 5px;
                padding: 12px 12px;
                border-radius: 7px;
                border: none;
                text-transform: uppercase;
                font-size: $fs-xs;
                font-weight: $fw-regular;
                color: $darkText;
                letter-spacing: 2px;

                &:hover {
                    color: $rockGradientOne;
                }

                @include breakpoint(sm) {
                    margin-top: 10px;
                    padding: 12px 30px;
                }
            }
        }

        .icon {
            display: flex;
            flex-direction: column;
            margin: 5px 10px;
            padding: 20px;
            border-radius: 50%;

            @include breakpoint(sm) {
                margin: 30px 60px;
            }

            .imgWrapper {
                background: $colorLight;
                padding: 25px;
                border-radius: 50%;

                img {
                    width: 130px;
                    height: 130px;                               
                    padding: 15px;
                }
            }
        }    
        
        .scissors {
            box-shadow: 0 10px 1px $scissorsGradientOpacity;
            background: linear-gradient(to right, $scissorsGradientOne, $scissorsGradientTwo);

            .imgWrapper {
                box-shadow: inset 0 10px 1px $scissorsGradientOpacity;
            }
        }

        .rock {
            box-shadow: 0 10px 1px $rockGradientOpacity;
            background: linear-gradient(to right, $rockGradientOne, $rockGradientTwo);

            .imgWrapper {
                box-shadow: inset 0 10px 1px $rockGradientOpacity;
            }
        }
        .paper {
            box-shadow: 0 10px 1px $paperGradientOpacity;
            background: linear-gradient(to right, $paperGradientOne, $paperGradientTwo);

            .imgWrapper {
                box-shadow: inset 0 10px 1px $paperGradientOpacity;
            }
        }
    }
}

*/
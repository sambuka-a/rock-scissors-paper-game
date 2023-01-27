import {useState} from 'react'
import styles from './game.module.scss'

import Header from '../Header/Header'
import StartScreen from '../StartScreen/StartScreen';
import GameFlow from '../GameFlow/GameFlow'

const Game = () => {
    const [playerChoice, setPlayerChoice] = useState()
    const [computerChoice, setComputerChoice] = useState()
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [winner, setWinner] = useState(null)

    const handlePlayAgain = () => {
        setPlayerChoice(null)
        setComputerChoice(null)
        setPlayerScore(0)
        setComputerScore(0)
    }

    const handleUserChose = (value) => {
        let userChose = value
        setPlayerChoice(userChose);
        const computerChose = computerAction();
        setComputerChoice(computerChose);
        const won = getWinner(userChose, computerChose)
            if(won === 1) {
                setWinner("You win")
                setPlayerScore((playerScore) => playerScore + 1)
            } else if (won === -1) {
                setWinner("You lose")
                setComputerScore((computerScore) => computerScore + 1)
            } else {
                setWinner("Draw!")
            }
        }
    
    const computerAction = () => {
            const chose = ['rock', 'paper', 'scissors']
            return (chose[Math.floor(Math.random() * 3)])
    }

    const getWinner = (player, computer) => {
        if(player === computer) {
            return 0
        } else if(player === 'rock') {
            if(computer === 'scissors') {
                return 1
            } else {
                return -1
            }
        } else if(player === 'scissors') {
            if(computer === 'paper') {
                return 1
            } else {
                return -1
            }
        } else if(player === 'paper') {
            if(computer === 'rock') {
                return 1
            } else {
                return -1
            }
        } 
    }

  return (
    <div className={styles.game}>
        <Header 
            onUserChose={handleUserChose}
            score={playerScore}
            cScore={computerScore}
        />
        {!playerChoice && <StartScreen/>}
        {playerChoice && 
        <GameFlow
            user={playerChoice}
            computer={computerChoice}
            winner={winner}
            onPlayAgainButton={handlePlayAgain}
        />}
        <div className={styles.footer}>
            <button onClick={() => {handlePlayAgain()}}>Rules</button>
        </div>
    </div>
  )
}

export default Game
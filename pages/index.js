import Head from 'next/head'
import { useState, useEffect } from 'react'
import {useKeyPress} from '../hooks/useKeyPress'
import Circle from '../components/svgs/circle'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const [ currentXPos, setCurrentXPos ] = useState(500)
  const [ currentYPos, setCurrentYPos ] = useState(500)

  const upPress = useKeyPress('w');
  const rightPress = useKeyPress('d');
  const leftPress = useKeyPress('a');
  const downPress = useKeyPress('s');

  const setNewXPos = (changeXPos) => {
    let _newXPos = currentXPos + changeXPos
    setCurrentXPos(_newXPos)
  }

  const setNewYPos = (changeYPos) => {
    let _newYPos = currentYPos + changeYPos
    setCurrentYPos(_newYPos)
  }

  useEffect(() => {
    if (upPress) {
      console.log("UP!")
      setNewYPos(-10)
    }
    if (rightPress) {
      console.log("RIGHT!")
      setNewXPos(10)
    }
    if (leftPress) {
      console.log("LEFT!")
      setNewXPos(-10)
    }
    if (downPress) {
      console.log("DOWN!")
      setNewYPos(10)
    }
  }, [ 
    currentXPos,
    currentYPos,
    upPress, 
    rightPress, 
    leftPress, 
    downPress 
  ])

  return (
    <div className="container">
      <Head>
        <title>Game Engine Thing</title>
      </Head>

      <main>
        <h1 className="title">
         Very Basic React Game Engine {currentXPos} {currentYPos}
        </h1>

        <section className={`${utilStyles.gameEnv}`}>
          <Circle
            xPos={currentXPos}
            yPos={currentYPos}
            fill="aqua"
          />
        </section>

      </main>
    </div>
  )
}

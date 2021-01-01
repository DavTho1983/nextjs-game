import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import {useKeyPress} from '../hooks/useKeyPress'
import Circle from '../components/svgs/circle'
import Room from '../components/svgs/room'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const [ currentXPos, setCurrentXPos ] = useState(500)
  const [ currentYPos, setCurrentYPos ] = useState(500)
  const [ colourIndex, setColourIndex ] = useState(0)

  const room = useRef(null)

  const circleColours = [
    "green",
    "orange",
    "red",
    "blue"
  ]

  const upPress = useKeyPress('w');
  const rightPress = useKeyPress('d');
  const leftPress = useKeyPress('a');
  const downPress = useKeyPress('s');

  const setNewXPos = (changeXPos) => {
    let _newColourIndex = (colourIndex + 1) % 4

    let _newXPos = currentXPos + changeXPos
    if (_newXPos < 50) {
      _newXPos = currentXPos
    } else if (_newXPos > 950) {
      _newXPos = currentXPos
    }

    if (_newXPos % 150 === 0) {
      setColourIndex(_newColourIndex)
    }

      setCurrentXPos(_newXPos)
  }

  const setNewYPos = (changeYPos) => {
    let _newColourIndex = (colourIndex + 1) % 4
    let _newYPos = currentYPos + changeYPos
    if (_newYPos < 50) {
      _newYPos = currentYPos
    } else if (_newYPos > 800) {
      _newYPos = currentYPos
    }

    if (_newYPos % 150 === 0) {
      setColourIndex(_newColourIndex)
    }
    
    setCurrentYPos(_newYPos)
  }

  useEffect(() => {
    if (upPress) {
      console.log("UP!")
      setNewYPos(-1)
    }
    if (rightPress) {
      console.log("RIGHT!")
      setNewXPos(1)
    }
    if (leftPress) {
      console.log("LEFT!")
      setNewXPos(-1)
    }
    if (downPress) {
      console.log("DOWN!")
      setNewYPos(1)
    }
  }, [ 
    currentXPos,
    currentYPos,
    circleColours,
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

        <Room/>

        {currentXPos && <section className={`${utilStyles.gameEnv}`}>
        <svg  width="1000" height="1000">
          <Circle
            xPos={currentXPos}
            yPos={currentYPos}
            fill={circleColours[colourIndex]}
          />
        </svg>
        </section>}

      </main>
    </div>
  )
}

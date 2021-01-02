import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import {useKeyPress} from '../hooks/useKeyPress'
import Circle from '../components/svgs/circle'
import Room from '../components/svgs/room'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const [ currentXPos, setCurrentXPos ] = useState(100)
  const [ currentYPos, setCurrentYPos ] = useState(100)
  const [ colourIndex, setColourIndex ] = useState(0)

  const circle = useRef()
  const path = useRef()

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

    if (_newXPos % 150 === 0) {
      setColourIndex(_newColourIndex)
    } 

    let point = circle.current.createSVGPoint();
    point.x = _newXPos;
    point.y = currentYPos;

    console.log("CHECK IF POINT IN PATH REF", point, path.current.isPointInFill(point))

    if (path.current.isPointInFill(point)) {
      console.log("GOT HERE!!!!!!")
      setCurrentXPos(_newXPos)
    } else {
      _newXPos = currentXPos
    }
  }

  const setNewYPos = (changeYPos) => {
    let _newColourIndex = (colourIndex + 1) % 4
    let _newYPos = currentYPos + changeYPos


    if (_newYPos % 150 === 0) {
      setColourIndex(_newColourIndex)
    }
    
    let point = circle.current.createSVGPoint();
    point.x = currentXPos;
    point.y = _newYPos;

    console.log("CHECK IF POINT IN PATH REF", point, path.current.isPointInFill(point))

    if (path.current.isPointInFill(point)) {
      setCurrentYPos(_newYPos)
    } else {
      _newYPos = currentYPos
    }

  }

  useEffect(() => {
    console.log("CIRCLE", circle.current)
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
    circle,
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
        {/* <h1 className="title">
         Very Basic React Game Engine {currentXPos} {currentYPos}
        </h1>     */}

        {/* <Room /> */}

        <div className={`${utilStyles.mainContainer}`}>
          {currentXPos && <section className={`${utilStyles.gameEnv}`}>
            <svg ref={circle} width="1000" height="800" viewBox="0 0 1000 750" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1000" height="750" fill="white"/>
              <path ref={path}  fill-rule="evenodd" clip-rule="evenodd" d="M49 51H449V165.239H884V430.332H949V713H214V611.942H172V343.92H49V51Z" fill="#C4C4C4"/>
              <circle  cx={currentXPos} cy={currentYPos} r="40" stroke="green" strokeWidth="4" fill={circleColours[colourIndex]} />
            </svg>
          </section>}
        </div>
        

      </main>
    </div>
  )
}

import Head from 'next/head'
import { useState, useEffect } from 'react'
import {useKeyPress} from '../hooks/useKeyPress'
import Circle from '../components/svgs/circle'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  const [ currentPos, setCurrentPos ] = useState({
    xPos: 500,
    yPos: 500
  })

  const upPress = useKeyPress('w');
  const rightPress = useKeyPress('d');
  const leftPress = useKeyPress('a');
  const downPress = useKeyPress('s');

  const setNewPos = (changeXPos, changeYPos) => {
    let _newPos = {
      xPos: currentPos.xPos + changeXPos,
      yPos: currentPos.yPos + changeYPos
    }
    setCurrentPos(_newPos)
  }

  useEffect(() => {
    if (upPress) {
      console.log("UP!")
      setNewPos(-10, 0)
    }
    if (rightPress) {
      console.log("RIGHT!")
      setNewPos(0, 10)
    }
    if (leftPress) {
      console.log("LEFT!")
      setNewPos(0, -10)
    }
    if (downPress) {
      console.log("DOWN!")
      setNewPos(10, 0)
    }
  }, [ 
    currentPos, 
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
         Very Basic React Game Engine {currentPos.xPos} {currentPos.yPos}
        </h1>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
          <Circle
              xPos={currentPos.xPos ? currentPos.xPos : 500}
              yPos={currentPos.yPos ? currentPos.yPos : 500}
            />
        </section>

      </main>
    </div>
  )
}

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { LayoutCards } from './LayoutCards.styled'
const cards = [1, 2, 3, 4]

interface LayoutCardsProps {}

const LayoutCardComponent: React.FC<LayoutCardsProps> = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [canDrag, setCanDrag] = useState(false)
  const containerRefs = useRef(new Array())
  const handlePanEnd = (e: any, info: any, card: any) => {
    if (selectedId) {
      if (Math.abs(info.offset.x) < 5) {
        const styles = getComputedStyle(containerRefs.current[card])
        const timeout = parseInt(styles.transform.split(',')[4]) * -0.6
        setCanDrag(false)
        setTimeout(() => {
          setSelectedId(null)
        }, timeout)
      }
    } else {
      setCanDrag(true)
      setSelectedId(card)
    }
  }
  return (
    <LayoutCards>
      {cards.map((card, i) => (
        <motion.div
          className={selectedId === card ? 'opened-card' : 'card'}
          key={i}
          layout
          drag={selectedId === card ? 'x' : false}
          dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
          dragElastic={0.2}
          //   onPanEnd={(e, info) => handlePanEnd(e, info, card)}
          onPanEnd={(e, info) => handlePanEnd(e, info, card)}
          ref={(el) => (containerRefs.current[card] = el)}
        >
          {selectedId === card && (
            <>
              <div />
              <div />
              <div />
              <div />
              {/* <div onClick={() => setSelectedId(null)} /> */}
              {/* <div onClick={() => setSelectedId(null)} /> */}
              {/* <div onClick={() => setSelectedId(null)} /> */}
              {/* <div onClick={() => setSelectedId(null)} /> */}
            </>
          )}
        </motion.div>
      ))}
      <motion.div
        className='dim-layer'
        animate={{ opacity: selectedId ? 0.3 : 0 }}
      />
    </LayoutCards>
  )
}
export default LayoutCardComponent

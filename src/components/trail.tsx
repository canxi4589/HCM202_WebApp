import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'

import styles from './styles.module.css'

interface TrailProps {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}

const Trail: React.FC<TrailProps> = ({ open, children, className }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 'auto' : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className={className}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={{
          ...style,
          transform: style.x?.to((x: number) => `translate3d(${x}px,0,0)`)
        }}>
          <a.div style={{ overflow: 'visible' }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default Trail
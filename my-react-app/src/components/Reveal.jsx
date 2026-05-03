import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 18, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px 0px -120px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: [0.21, 1, 0.21, 1], delay }}
    >
      {children}
    </motion.div>
  )
}


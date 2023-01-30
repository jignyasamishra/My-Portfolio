import React from 'react'
import { motion } from "framer-motion";
const animations={
    initial:{opacity:1},
    animate:{opacity:0},
    exit:{opacity:0}
}
export default function Animate1({children}) {
  return (
    <div>
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{duration:6}}>
      {children}
    </motion.div>
    </div>
  )
}

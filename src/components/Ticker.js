import React, { useState } from 'react'
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons'

const Ticker = () => {
  const [numLikes, changeNumLikes] = useState(0)
  return (
    <>
      <div className="ticker">
        <ArrowUp onClick={e => changeNumLikes(numLikes + 1)} />
        <span className="like-count">{numLikes}</span>
        <ArrowDown onClick={e => changeNumLikes(numLikes - 1)} />
      </div>
    </>
  )
}

export default Ticker

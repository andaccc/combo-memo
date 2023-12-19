import React from 'react'

const WaterMark = () => {
  const textStyle = {
    position: 'fixed',
    right: '10vh',
    bottom: '1vh',
    color: '#7B7B7B'
  } as React.CSSProperties
  
  return (
    <p style={textStyle}>github.com/andaccc</p>
  )
}

export default WaterMark
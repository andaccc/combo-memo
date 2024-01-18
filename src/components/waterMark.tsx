import React from 'react'


const WaterMark = () => {
  const textStyle = {
    position: 'fixed',
    right: '10vh',
    down: '500vh',
    color: '#7B7B7B'
  } as React.CSSProperties
  
  return (
    <a href={'https://github.com/andaccc'} target="_blank" rel="noreferrer">
      <p style={textStyle}>github.com/andaccc</p>
    </a>
  )
}

export default WaterMark
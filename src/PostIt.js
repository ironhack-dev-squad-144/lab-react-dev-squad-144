import React from 'react'

export default function PostIt({color, children}) {
  let style = {
    backgroundColor: color,
  }
  return (
    <div className="PostIt" style={style}>
      {children}
      {/* <div className="PostIt__corner"></div> */}
    </div>
  )
}

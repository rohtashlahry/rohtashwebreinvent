import React from 'react'
import "./common.css";

const footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} By Rohtash Lahry.</p>
    </div>
  </footer>
  )
}

export default footer
import React from 'react'
import './Background.css'

// TODO: Add withRouter
const Background = ({location}) => {
  let currentImage = 'bgm.jpg'
  // Logic on location.pathname to choose image
  if(location.pathname.includes('/teach')){
    currentImage = 'bg.jpg'
  }
  else if (location.pathname.includes('/study')) {
    currentImage = 'bgs.jpg'
  }
  const style = { backgroundImage: `url(/bgs/${currentImage})` };
  return (
    <div className="bg" style={style}>
      </div>
    )

}
export default Background;

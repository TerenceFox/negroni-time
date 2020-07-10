import React from 'react'
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"

const SocialMediaContainer = () => {
  return (
    <div className="social-media container">
      <img src={twitter} className="social-media-icon" />
      <img src={facebook} className="social-media-icon" />
      <a href="https://www.instagram.com/timeforanegroni/" target="blank"> 
        <img src={instagram} className="social-media-icon" />
      </a>
    </div>
  )
}

export default SocialMediaContainer

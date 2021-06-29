import React from "react"
import PropTypes from "prop-types"
import "./style.sass"

export const ImageAvatar = ({ image }) => {
  return (
    <div className="image-avatar-component">
      <div className="image-avatar-container"
           style={{backgroundImage: `url(${image})`}}>
      </div>
    </div>
  )
}

ImageAvatar.propTypes = {
  image: PropTypes.string,
}
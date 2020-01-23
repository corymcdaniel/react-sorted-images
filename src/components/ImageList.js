import React from "react"
import PropTypes from "prop-types"
import {ul, img} from './ImageList.module.css'

const ImageList = ({items}) => {
  const list = items.map((item, i) => {
    return (
      <li key={i}>
        <h3>{item.text}</h3>
        <img className={img} src={item.src} style={{height: '100px', width: '100px'}}/>
        <div>{item.imgId}</div>
        <div>{item.src}</div>
      </li>
    )
  });

  return (
    <ul className={ul}>
      {list}
    </ul>
  )
}

ImageList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ImageList

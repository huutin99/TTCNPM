import React from 'react'

import PropTypes from 'prop-types'

import styles from './component1.module.css'

const Component1 = (props) => {
  return (
    <div className={styles.container}>
      <img alt={props.image_alt} src={props.image_src} className={styles.image} />
    </div>
  )
}

Component1.defaultProps = {
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
}

Component1.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Component1

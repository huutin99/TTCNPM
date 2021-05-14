import React from 'react'

import Helmet from 'react-helmet'

import styles from './signup.module.css'

const Signup = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Signup - TTCNPM 202 1811193</title>
        <meta property="og:title" content="Signup - TTCNPM 202 1811193" />
      </Helmet>
    </div>
  )
}

export default Signup

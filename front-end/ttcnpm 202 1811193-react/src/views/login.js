import React from 'react'

import Helmet from 'react-helmet'

import styles from './login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Login - TTCNPM 202 1811193</title>
        <meta property="og:title" content="Login - TTCNPM 202 1811193" />
      </Helmet>
    </div>
  )
}

export default Login

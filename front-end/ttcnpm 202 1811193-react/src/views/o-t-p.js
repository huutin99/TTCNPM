import React from 'react'

import Helmet from 'react-helmet'

import projectStyles from './style.module.css'
import styles from './o-t-p.module.css'

const OTP = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>OTP - TTCNPM 202 1811193</title>
        <meta property="og:title" content="OTP - TTCNPM 202 1811193" />
      </Helmet>
      <span className={styles.text}>
        Mã xác nhận:
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <span className={styles.text1}>
        Một email vừa được gửi đến abc@xyz.com. Vui lòng nhập mã từ email được gửi về
      </span>
      <input type="text" className={` ${projectStyles.thqTextInput} ${styles.textinput} `} />
      <button className={` ${projectStyles.thqButton} ${styles.button} `}>Xác nhận</button>
    </div>
  )
}

export default OTP

import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import projectStyles from './style.module.css'
import styles from './signup.module.css'

const Signup = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Signup - TTCNPM 202 1811193</title>
        <meta property="og:title" content="Signup - TTCNPM 202 1811193" />
      </Helmet>
      <span className={styles.text}>Nữ</span>
      <span className={styles.text01}>Nam</span>
      <span className={styles.text02}>Giới tính:</span>
      <span className={styles.text03}>Ngày tháng năm sinh:</span>
      <span className={styles.text04}>Họ và tên:</span>
      <span className={styles.text05}>Nhập lại mật khẩu:</span>
      <span className={styles.text06}>Mã bảo mật</span>
      <span className={styles.text07}>Mật khẩu:</span>
      <span className={styles.text08}>Email:</span>
      <span className={styles.text09}>Tên đăng nhập:</span>
      <input type="text" className={` ${projectStyles.thqTextInput} ${styles.textinput} `} />
      <input type="text" className={` ${projectStyles.thqTextInput} ${styles.textinput1} `} />
      <input type="text" className={` ${projectStyles.thqTextInput} ${styles.textinput2} `} />
      <input type="text" className={` ${projectStyles.thqTextInput} ${styles.textinput3} `} />
      <input type="text" className={` ${projectStyles.thqTextInput} ${styles.textinput4} `} />
      <input
        type="text"
        name="Họ và Tên"
        value="Họ và Tên"
        className={` ${projectStyles.thqTextInput} ${styles.textinput5} `}
      />
      <img
        alt="avatar"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className={styles.image}
      />
      <Link
        to="/o-t-p"
        className={` ${projectStyles.thqButton} ${projectStyles.thqLink} ${styles.navlink} `}
      >
        Đăng ký tài khoản
      </Link>
      <input type="radio" name="radio" className={styles.radiobutton} />
      <input type="radio" name="radio" className={styles.radiobutton1} />
      <h1 className={styles.text10}>ĐĂNG KÝ TÀI KHOẢN</h1>
    </div>
  )
}

export default Signup

import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>TTCNPM 202 1811193</title>
        <meta property="og:title" content="TTCNPM 202 1811193" />
      </Helmet>
      <div className={styles.container1}>
        <h1 className={styles.text}>DOTA3VN</h1>
        <Link
          to="/signup"
          className={` ${projectStyles.thqButton} ${projectStyles.thqLink} ${styles.navlink} `}
        >
          <span className={styles.text01}>Đăng ký</span>
        </Link>
        <Link
          to="/login"
          className={` ${projectStyles.thqButton} ${projectStyles.thqLink} ${styles.navlink1} `}
        >
          Đăng nhập
        </Link>
      </div>
      <div className={styles.container2}>
        <span className={styles.text02}>
          <span className={styles.text03}>NHÚNG TIKTOK VIDEO VÀO WEBSITE</span>
        </span>
        <img
          alt="image"
          src="https://static.tuoitre.vn/tto/i/s626/2019/03/14/0d99b255.jpg"
          className={styles.image}
        />
        <span className={styles.text04}>
          <span className={styles.text05}></span>
          <span className={styles.text06}></span>
          <span className={styles.text07}>
            Sau 72h chạy AhaChat Hackathon thì bên mình đã ra được một
          </span>
          <br></br>
          <span className={styles.text09}> MVP đơn giản là nhúng Tiktok Video vào Website</span>
        </span>
      </div>
      <div className={styles.container3}>
        <span className={styles.text10}>
          <a href="https://vnexpress.net/them-59-ca-covid-19-trong-nuoc-4278262.html">
            <span className={` ${projectStyles.thqLink} ${projectStyles.thqLink} ${styles.link1} `}>
              <span className={styles.text11}>Thêm 59 ca Covid-19 trong nước</span>
            </span>
          </a>
        </span>
        <img
          alt="image"
          src="https://i1-suckhoe.vnecdn.net/2021/05/14/PHAM5615JPG-1620990867-4838-1620991068.jpg?w=680&amp;h=408&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3qxVAMtLFyZBOeNYh7hpvw"
          className={styles.image1}
        />
        <span className={styles.text12}>
          <span className={styles.text13}>
            Bộ Y tế chiều 14/5 ghi nhận 60 ca dương tính nCoV, trong đó
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className={styles.text15}>59 ca trong nước, gồm ghi nhận tại</span>
          <span className={styles.text16}>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className={styles.text18}>Bắc Ninh 33, Hà Nội 12, và các tỉnh khác.</span>
        </span>
      </div>
      <input type="text" className={` ${projectStyles.thqTextInput} ${styles.textinput} `} />
      <span className={styles.text19}>Tìm kiếm...</span>
    </div>
  )
}

export default Home

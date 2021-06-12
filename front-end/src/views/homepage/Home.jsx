import React, { Component } from "react";
import { Empty } from 'antd';
import { Link } from "react-router-dom";

class Homepage extends Component {
  state = {}

  componentDidMount() {
    // this.loadData();
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="container1">
            <h1 className="text">DOTA3VN</h1>
            <Link to="/signup" className="thqButton thqLink navlink">
              <span className="text01">Đăng ký</span>
            </Link>
            <Link to="/login" className="thqButton thqLink navlink1">
              Đăng nhập
            </Link>
          </div>
          <div className="container2">
            <span className="text02">
              <span className="text03">NHÚNG TIKTOK VIDEO VÀO WEBSITE</span>
            </span>
            <img
              alt="home-img"
              src="https://static.tuoitre.vn/tto/i/s626/2019/03/14/0d99b255.jpg"
              className="image"
            />
            <span className="text04">
              <span className="text05"></span>
              <span className="text06"></span>
              <span className="text07">
                Sau 72h chạy AhaChat Hackathon thì bên mình đã ra được một
              </span>
              <br></br>
              <span className="text09"> MVP đơn giản là nhúng Tiktok Video vào Website</span>
            </span>
          </div>
          <div className="container3">
            <span className="text10">
              <span className="text11">Thêm 59 ca Covid-19 trong nước</span>
            </span>
            <img
              alt="home-img"
              src="https://i1-suckhoe.vnecdn.net/2021/05/14/PHAM5615JPG-1620990867-4838-1620991068.jpg?w=680&amp;h=408&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=3qxVAMtLFyZBOeNYh7hpvw"
              className="image1"
            />
            <span className="text12">
              <span className="text13">
                Bộ Y tế chiều 14/5 ghi nhận 60 ca dương tính nCoV, trong đó
              </span>
              <br></br>
              <span className="text15">59 ca trong nước, gồm ghi nhận tại</span>
              <br></br>
              <span className="text18">Bắc Ninh 33, Hà Nội 12, và các tỉnh khác.</span>
            </span>
          </div>
          <input type="text" className="thqTextInput textinput" />
          <span className="text19">Tìm kiếm...</span>
        </div>
        <style jsx>
          {`
                      .container {
                        width: 100%;
                        height: auto;
                        display: flex;
                        min-height: 100vh;
                        align-items: flex-start;
                        flex-direction: column;
                        justify-content: flex-start;
                        background-color: rgba(255, 255, 218, 0.9);
                      }
                      .container1 {
                        width: 100%;
                        height: 69px;
                        display: flex;
                        position: relative;
                        align-items: center;
                        flex-direction: row;
                        justify-content: flex-end;
                        background-color: #bde2dc;
                      }
                      .text {
                        top: auto;
                        left: 103px;
                        right: auto;
                        bottom: 6px;
                        position: absolute;
                        text-align: center;
                      }
                      .navlink {
                        top: 9px;
                        left: auto;
                        color: #000000;
                        right: 171px;
                        bottom: auto;
                        position: absolute;
                        font-size: 24px;
                        background-color: #ff0900;
                      }
                      .text01 {
                        color: #feff00;
                      }
                      .navlink1 {
                        top: 8px;
                        left: auto;
                        color: #fff700;
                        right: 16px;
                        bottom: auto;
                        position: absolute;
                        font-size: 24px;
                        background-color: #ff0000;
                      }
                      .container2 {
                        top: 165px;
                        left: 149px;
                        right: auto;
                        width: 1073px;
                        bottom: auto;
                        height: 282px;
                        margin: auto;
                        display: flex;
                        position: absolute;
                        align-items: center;
                        flex-direction: row;
                        justify-content: flex-start;
                        background-color: #ffffcb;
                      }
                      .text02 {
                        top: 39px;
                        left: auto;
                        right: 147px;
                        bottom: auto;
                        position: absolute;
                        font-size: 30px;
                      }
                      .text03 {
                        font-weight: 700;
                        white-space: normal;
                      }
                      .image {
                        top: 20px;
                        left: 14px;
                        right: auto;
                        width: 353px;
                        bottom: auto;
                        height: 222px;
                        position: absolute;
                        object-fit: cover;
                      }
                      .text04 {
                        top: 107px;
                        left: auto;
                        right: 106px;
                        bottom: auto;
                        position: absolute;
                        font-size: 22px;
                        font-family: PT Sans;
                      }
                      .text05 {
                        font-style: normal;
                        font-family: Arial;
                        font-weight: 700;
                      }
                      .text06 {
                        font-style: normal;
                        font-family: Arial;
                        font-weight: 700;
                      }
                      .text07 {
                        color: rgb(5, 5, 5);
                        display: inline;
                        font-weight: 700;
                        white-space: normal;
                      }
                      .text09 {
                        color: rgb(5, 5, 5);
                        font-weight: 700;
                      }
                      .container3 {
                        top: 458px;
                        left: 146px;
                        right: auto;
                        width: 1073px;
                        bottom: auto;
                        height: 282px;
                        margin: auto;
                        display: flex;
                        position: absolute;
                        align-items: center;
                        flex-direction: row;
                        justify-content: flex-start;
                        background-color: #ffffcb;
                      }
                      .text10 {
                        top: 39px;
                        left: auto;
                        right: 147px;
                        bottom: auto;
                        position: absolute;
                        font-size: 30px;
                      }
                      .text11 {
                        font-style: normal;
                        font-weight: 700;
                        text-transform: uppercase;
                      }
                      .image1 {
                        top: 20px;
                        left: 14px;
                        right: auto;
                        width: 353px;
                        bottom: auto;
                        height: 222px;
                        position: absolute;
                        object-fit: cover;
                      }
                      .text12 {
                        top: auto;
                        left: auto;
                        right: 88px;
                        bottom: 79px;
                        position: absolute;
                        font-size: 22px;
                      }
                      .text13 {
                        color: rgb(5, 5, 5);
                        display: inline;
                        font-weight: 400;
                        white-space: normal;
                      }
                      .text15 {
                        color: rgb(5, 5, 5);
                        font-weight: 400;
                      }
                      .text16 {
                        color: rgb(5, 5, 5);
                        font-weight: 400;
                      }
                      .text18 {
                        color: rgb(5, 5, 5);
                        font-weight: 400;
                      }
                      .textinput {
                        top: 12px;
                        left: 436px;
                        right: auto;
                        width: 478px;
                        bottom: auto;
                        height: 43px;
                        position: absolute;
                      }
                      .text19 {
                        top: 17px;
                        left: 449px;
                        right: auto;
                        bottom: auto;
                        position: absolute;
                        font-size: 22px;
                        font-family: PT Sans;
                      }
                    `}
        </style>
      </>
    );
  };
}

export default Homepage;

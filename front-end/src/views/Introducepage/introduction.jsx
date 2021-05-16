var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <title>Mercedes</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="../image/favicon.ico" />
          <link rel="stylesheet" href="https://www.w3schools.com/lib/w3.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />  
          <link rel="stylesheet" type="text/css" href="./Introduce.css" />
          <link href="scroll.css" rel="stylesheet" />
          <div className="container-fluid m-0 p-0 slide">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner h-100">
                <div className="carousel-item active">
                  <img className="d-block w-100 " src="../image/slide-intro-1.jpg" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block">
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 " src="../image/carousel1.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 " src="../image/carousel2.jpg" alt="Third slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="container">
            <h2 className="text-center text-uppercase font-weight-bold pt-5 pb-2">Giới thiệu Mercedes</h2>
            <div className="row">
              <div className="col-md-6 my-auto d-md-none">
                <img className="image-size show-on-scroll inline-photo main-photo" src="../image/intro-1.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
              <div className="col-md-6 text-justify my-auto">
                <p className="text-inline">
                  Mercedes-Benz là một trong những hãng xe hơi lâu đời nhất thế giới. Qua nhiều năm tháng nhưng biểu tượng ngôi sao 3 cánh vẫn được giữ nguyên và luôn đẳng cấp. Những thiết kế ấn tượng cùng với chất lượng cao cấp, xe của hãng xe Đức này luôn thu hút được những ánh nhìn đầu tiên.
                </p>
                <p className="text-inline pt-2">Xét về cơ bản thì Mercedes-Benz có 5 dòng chính được đặt tên lần lượt là A,B,C,E và S, thêm một dòng ở phân khúc cao cấp hơn là Maybach.</p>
                <p className="text-inline pt-2 show-on-scroll"> Cuối những ký tự đó là chữ “Class” thể hiện đây là một dòng xe. Dòng xe càng về cuối từ trái sang phải thì có thiết kế càng lớn cũng như dung tích động cơ lớn và mạnh mẽ hơn.</p>
                <p className="text-inline pt-2"> Mỗi dòng xe lại có những dòng xe nhỏ khác ở bên trong, phong cách thiết kế thì tượng tự nhau chỉ khác biệt ở các tính năng. Việc này giúp chia nhỏ phân khúc và đáp ứng được nhiều yêu cầu của khách hàng hơn.</p>
              </div>
              <div className="col-md-6 my-auto d-none d-md-block">
                <img className="image-size show-on-scroll inline-photo main-photo" src="../image/intro-1.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
            </div>
          </div>
          <h2 className="text-center text-uppercase font-weight-bold pt-5 pb-2">Các dòng xe Mercedes</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-auto">
                <img className="image-size show-on-scroll inline-photo" src="../image/mer1.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
              <div className="col-md-6 my-auto text-inline">
                <h3 className="font-weight-bold pb-3">Dòng Mercedes A Class</h3>
                <p>Đây là dòng xe nhỏ nhất của Mercedes-Benz (Compact car), những chiếc xe này được ra đời vào tháng 9/1993. Dòng A Class này được sử dụng hệ dẫn động cầu trước đầu tiên.
                  <br />
                  <strong>Dòng A Class gồm các thế hệ:</strong></p>
                <ul>
                  <li>Giai đoạn 1997 – 2004: Thế hệ thứ nhất – W168</li>
                  <li>Giai đoạn 2004 – 2012: Thế hệ thứ hai – W169</li>
                  <li>Giai đoạn 2012 – nay: Thế hệ thứ ba – W176</li>
                </ul>            
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-auto d-md-none">
                <img className="image-size show-on-scroll inline-photo" src="../image/mer2.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
              <div className="col-md-6 my-auto text-inline">
                <h3 className="font-weight-bold pb-3">Dòng Mercedes B-Class</h3>
                <p>Đây là dòng xe gia đình cỡ nhỏ, có kích thước lớn hơn dòng A Class một chút. Những dòng xe này được gọi chung là MPV
                  <br />
                  <strong>Dòng B Class gồm các thế hệ:</strong></p>
                <ul>
                  <li>Giai đoạn 2005 – 2011: Thế hệ thứ nhất – W245</li>
                  <li>Giai đoạn 2011 – nay: Thế hệ thứ hai – W246</li>
                </ul>            
              </div>
              <div className="col-md-6 my-auto d-none d-md-block">
                <img className="image-size show-on-scroll inline-photo" src="../image/mer2.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-auto">
                <img className="image-size show-on-scroll inline-photo" src="../image/mer3.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
              <div className="col-md-6 my-auto text-inline">
                <h3 className="font-weight-bold pb-3">Dòng Mercedes C Class</h3>
                <p>Là những chiếc xe sedan cỡ nhỏ của Mercedes-Benz được cho ra mắt vào năm 1993. Đây là dòng xe mang lại doanh thu cao nhất cho hãng xe nước Đức này, khi ra mắt C-Class thay thế cho thế hệ W201. Những chiếc xe của C-Class được trang bị các hệ thống động cơ như I4, V6 và V8. Sử dụng hệ dẫn động RWD hoặc 4Matic.
                </p>
                <p>
                  Ngoài ra C-Class còn có các biến thể khác nữa như là Wagon, Convertible, Coupe. Chiếc xe hiệu năng cao nổi tiếng của hãng là C63 AMG.
                  <strong>Dòng C Class gồm các thế hệ:</strong></p>
                <ul>
                  <li>Giai đoạn 1993 – 2000: Thế hệ thứ nhất – W202</li>
                  <li>Giai đoạn 2000 – 2007: Thế hệ thứ hai – W203</li>
                  <li>Giai đoạn 2007 – 2014: Thế hệ thứ ba – W204</li>
                  <li>Giai đoạn 2014 – nay: Thế hệ thứ tư – W205</li>
                </ul>            
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-auto d-md-none">
                <img className="image-size show-on-scroll inline-photo" src="../image/mer4.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
              <div className="col-md-6 my-auto text-inline">
                <h3 className="font-weight-bold pb-3">Dòng Mercedes E-Class</h3>
                <p>Bạn có biết chữ E tượng trưng cho gì không? Là chữ “Einspritz” trong tiếng Đức có nghĩa là “phun xăng”, đúng vậy những chiếc thuộc dòng E Class này được sử dụng hệ thống phun xăng điện tử đó chính là nguồn gốc cho tên gọi này.
                  <br />
                  <strong>Dòng E Class gồm các thế hệ:</strong></p>
                <ul>
                  <li>Giai đoạn 1993 – 1995: Thế hệ thứ nhất – W124.</li>
                  <li>Giai đoạn 1995 – 2002: Thế hệ thứ hai – W120.</li>
                  <li>Giai đoạn 2002 – 2009: Thế hệ thứ ba – W211.</li>
                  <li>Giai đoạn 2009 – 2016: Thế hệ thứ tư – W212.</li>
                  <li>Giai đoạn 2016 – nay: Thế hệ thứ năm – W213.</li>
                </ul>            
              </div>
              <div className="col-md-6 my-auto d-none d-md-block">
                <img className="image-size show-on-scroll inline-photo" src="../image/mer4.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-auto">
                <img className="image-size show-on-scroll inline-photo" src="../image/mer3.jpg" alt=" Mercedes-Benz- Siêu xe Đức" />
              </div>
              <div className="col-md-6 my-auto text-inline">
                <h3 className="font-weight-bold pb-3">Dòng xe S-Class</h3>
                <p>Nếu không tính tới Mercedes Maybach thì có lẽ những chiếc xe S Class sẽ là xe đẳng cấp và sang trọng nhất trong bộ sưu tập các dòng xe của Mercedes-Benz. Dòng S-Class này được ra đời vào năm 1972, được nhiều nguyên thủ quốc gia ưa thích và lựa chọn về độ tiện nghi “khủng khiếp” bên trong.
                </p>
                <p>
                  Có thể bạn chưa biết, dòng S-Class sử dụng hệ thống phanh ABS đầu tiên trên thế giới đời xe W116 từ năm 1978.
                  <strong>Dòng S Class gồm các thế hệ:</strong></p>
                <ul>
                  <li>Giai đoạn 1972 – 1980: Thế hệ thứ nhất – W116</li>
                  <li>Giai đoạn 1979 – 1991: Thế hệ thứ hai – W126</li>
                  <li>Giai đoạn 1991 – 1998: Thế hệ thứ ba – W140</li>
                  <li>Giai đoạn 1998 – 2005: Thế hệ thứ tư – W220</li>
                  <li>Giai đoạn 2005 – 2013: Thế hệ thứ năm – W221</li>
                  <li>Giai đoạn 2013 – nay: Thế hệ thứ sáu – W222</li>
                </ul>            
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
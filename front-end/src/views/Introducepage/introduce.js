import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
class Introduce extends Component {
    
    render() {
        return (       
            <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner h-100">
                    <div className="carousel-item active">
                    <img className="d-block w-100 height" src="https://iweb.tatthanh.com.vn/pic/12/news/images/5(3).jpg" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 height" src="https://topicanative.edu.vn/wp-content/uploads/2020/08/ball1-e1596267757599.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100 height" src="https://nld.mediacdn.vn/2020/6/6/14-ronaldo-15914571191841683007293.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                    <span className="sr-only">Previous</span>
                    </span></a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                    <span className="sr-only">Next</span>
                    </span></a>
                </div> 
               
                
                <div className="container">
                    <h4 className="service">Dịch vụ</h4>
                    <div className="title">
                            <h2 className="seo">SEO Website Chuyên Nghiệp</h2>                  
                        </div>
                    <div className="row">                      
                            <p className="nd1">Ở Việt Nam tìm một công ty SEO uy tín không hề đơn giản, có rất nhiều công ty SEO được lập ra nhưng chỉ trụ được 1-2 năm. Các công ty SEO ở Việt Nam nếu không cập nhật kiến thức mới, không tạo được sự khác biệt trong dịch vụ thì khó có thể sống lâu trong ngành. Là một người đi tìm thuê đơn vị làm SEO, chắc rằng bạn cần tìm những công ty SEO tốt nhất, có tuổi đời lâu năm, hướng làm phù hợp để có thể hợp tác lâu dài.</p>
                            <p>Công ty SEO Leadgle được biết đến là top 5 công ty cung cấp dịch vụ liên quan đến SEO Website, SEO Video, SEO hình ảnh, SEO Local…. trên Google uy tín tại khu vực Thành phố Hồ Chí Minh. Thành lập năm <b className="color">09/2015</b> do <b className="color">Đình Tỉnh</b>  điều hành và phu trách chính về kỹ thuật SEO, đến năm 2017 Leadgle được công nhận là <b className="color">thành viên chính thức của Hiệp hội Internet Marketing Việt Nam</b> .</p>
                    </div>                 
                   
                    <div className="row">
                        <div className="col-sm-8">
                            <p><FontAwesomeIcon icon={faHome} /> Công ty Cổ Phần Thương Mại Và Dịch Vụ Leadgle</p>
                            <i class="fab fa-affiliatetheme">Mã số thuế: 0313446145</i>
                            <p></p>
                            <p><FontAwesomeIcon icon={faPhone} /> Công ty Cổ Phần Thương Mại Và Dịch Vụ Leadgle </p>                                    
                            <i class="fas fa-envelope-open-text">Email: info@leadgle.com</i>
                        </div>               
                        <div className="col-sm-4">
                            <img className="img-meeting" src="https://www.leadgle.com/wp-content/uploads/Chu%CC%A3p-hi%CC%80nh-ky%CC%89-nie%CC%A3%CC%82m-cu%CC%80ng-ca%CC%81c-ba%CC%A3n-kie%CC%82%CC%81m-tie%CC%82%CC%80n-Online.jpg" alt="meeting" />
                        </div>
                    </div>
                    
                </div>
                
                
            </div>               
                          

        );
    }
}

export default Introduce;
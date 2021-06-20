import { useState } from 'react'
import React from 'react';
import './Style/Content.css'
import Articles from './Articles'
import 'antd/dist/antd.css';
import { Layout, Menu, List, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Sider, Footer, Content } = Layout;
const articles = [
  {
    id: 1,
    title: 'Article name',
    day: 'Feb 6th at 1:30pm',
  },
  {
    id: 2,
    title: 'Article name1',
    day: 'Feb 6th at 1:30pm',
  },
  {
    id: 3,
    title: 'Article name2',
    day: 'Feb 6th at 1:30pm',
  },
  {
    id: 4,
    title: 'Article name3',
    day: 'Feb 6th at 1:30pm',
  }
]
const ContentArticle = () => {
  // const [articles, setArticles]=useState([])
  return (
    <div className='Content'>
      <Layout>
        <Layout >
          <Sider
            style={{
              height: '30vh',
              position: 'fixed',
              right: 0,
              backgroundColor: '#f2f2f2',
              top: '100px'
            }}
            width={300}
            className="site-layout-background"
          >
            <a href="">Xem nhiều</a>
            <List
              dataSource={articles}
              renderItem={item => (

                <List.Item>
                  <List.Item.Meta
                    title={<a href="https://ant.design" >{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Sider>
        </Layout>
        <Content style={{
          border: '1px solid black',
          margin: '24px 350px 1px 350px',
          overflow: 'initial',
          left: '400px'
        }}
        >
          <div className="site-layout-background" style={{
            padding: 24,
            textAlign: 'left',
          }}
          >
            Content of article go in here
            Bộ Y tế sáng 20/5 ghi nhận 30 ca dương tính nCoV đều ở khu cách ly hoặc phong tỏa, chủ yếu tại Bắc Giang và Bắc Ninh, trong đó Ninh Bình lần đầu ghi nhận ca nhiễm.

            Các ca mới được ghi nhận từ số 4691-4720, tại Lạng Sơn một, Ninh Bình 2, Thanh Hóa một, Bắc Ninh 8, Hải Dương 5, Bắc Giang 13. Như vậy đến nay 29 tỉnh thành đã xuất hiện dịch, nâng tổng số ca nhiễm cộng đồng từ ngày 27/4 đến nay lên 1.678. Bắc Giang và Bắc Ninh tiếp tục là điểm nóng.

            Số ca nhiễm mới đưa tổng ca Covid-19 ở Bắc Giang lên 618, Bắc Ninh 361, Lạng Sơn 22, Hải Dương 20, Thanh Hóa 2, Ninh Bình 2.

            Ca 4691 ghi nhận tại tỉnh Lạng Sơn, là công nhân Khu công nghiệp Quang Châu, đã được cách ly từ trước, kết quả xét nghiệm ngày 19/5 dương tính với nCoV.

            Ca 4692-4693 ghi nhận tại tỉnh Ninh Bình là F1 liên quan đến ổ dịch cũ, đã được cách ly từ trước, kết quả xét nghiệm ngày 19/5 dương tính với nCoV.

            Ca 4694 ghi nhận tại tỉnh Thanh Hóa là công nhân Khu công nghiệp Quang Châu, đã được cách ly từ trước, kết quả xét nghiệm ngày 19/5 dương tính với nCoV.

            Ca 4695-4702 ghi nhận tại tỉnh Bắc Ninh là các F1 trong khu phong tỏa, đã được cách ly từ trước, kết quả xét nghiệm ngày 19/5 dương tính với nCoV.

            Ca 4703-4707 ghi nhận tại tỉnh Hải Dương trong khu phong tỏa, đang được điều tra dịch tễ bổ sung, kết quả xét nghiệm ngày 19/5 dương tính với nCoV.

            Ca 4708-4720 ghi nhận tại tỉnh Bắc Giang là các F1 liên quan Khu công nghiệp Quang Châu đã được cách ly, phong tỏa, kết quả xét nghiệm ngày 17-18/5 dương tính với nCoV.

            Kể từ đầu dịch, Việt Nam có tổng cộng 3.247 ca ghi nhận trong nước và 1.473 ca nhập cảnh. Số lượng ca mắc mới tính từ ngày 27/4 đến nay là 1.678 ca.

            Tính đến ngày 18/5, cả nước đã thực hiện 3.324.043 xét nghiệm Realtime RT-PCR, tương đương 4.398.533 lượt người được xét nghiệm. Trong đó, từ 29/4 đến nay đã thực hiện được 548.538 xét nghiệm, tương đương 871.594 lượt người.

            Tổng số người tiếp xúc gần và nhập cảnh từ vùng dịch đang được theo dõi sức khỏe là hơn 121.000, trong đó cách ly tập trung tại bệnh viện là hơn 2.200; cách ly tập trung tại cơ sở khác là hơn 33.000; số còn lại tại nhà, nơi lưu trú.

            Theo Trung tâm Đáp ứng khẩn cấp sự kiện y tế công cộng Việt Nam, thế giới ghi nhận khoảng 165 triệu ca Covid-19, trong đó gần 3,4 triệu người đã tử vong. Đứng thứ nhất về số ca mắc là Mỹ, sau đó là Ấn Độ và Brazil.

          </div>
        </Content>
        <Layout >
          <Sider
            style={{
              height: '30vh',
              position: 'static',
              backgroundColor: '#f2f2f2',
              position: 'relative',
              width: '100px',
              left: '400px',
              textAlign: 'left'
            }}
            width={500}
            className="site-layout-background"
          >
            <List
              dataSource={articles}
              itemLayout="horizontal"
              renderItem={item => (

                <List.Item>
                  <List.Item.Meta
                    title={<a href="https://ant.design" >{item.title}</a>}
                  />
                </List.Item>
              )}
            />
          </Sider>
        </Layout>

      </Layout>

    </div>
  )
}

export default ContentArticle

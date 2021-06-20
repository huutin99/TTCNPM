import React from 'react';
import { Layout, Menu, Select, Form, Button } from 'antd';
import IEditor from '../../share-component/ICk-editor';
const { SubMenu } = Menu;
const { Header, Sider, Footer, Content } = Layout;

const AddArticle = () => {
    const onSubmit = async (values) => {
        try {
            //change localhost neu khong dung, day la localhost cho may tinh cua Tien Manh
            const res = await fetch('http://localhost:5000/article', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(values),
            })
        } catch (error) {
            console.log(error)
        }
    }
    const arrTitle = ["Thời sự", "Góc nhìn", "Thế giới", "Thể thao", "Giáo dục", "Kinh tế", "Khoa học công nghệ", "Du lịch", "Giải trí"];
    return (
        <div>
            <h1>Thêm bài viết mới</h1>
            <Form onFinish={onSubmit}>
                <Form.Item name='title' label='tieu de' rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Select>
                        {arrTitle.map((title) => {
                            return (
                                <Select.Option value={title} key={arrTitle.indexOf(title)}>{title}</Select.Option>
                            )
                        }
                        )}
                    </Select>
                </Form.Item>
                <Form.Item name='content' label='noi dung' rules={[{ required: true, message: 'Please input your content!' }]}>
                    <IEditor />
                </Form.Item>

                <Button htmlType="submit">
                    Submit
              </Button>
            </Form>

        </div>
    )
}

export default AddArticle

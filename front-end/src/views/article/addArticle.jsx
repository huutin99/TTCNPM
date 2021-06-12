import { Form, Input, Button, Select, message } from 'antd';
import React from 'react';
import { instance } from '../../axios.instance';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom';

const { Option } = Select;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 12, span: 12 },
};

export default class AddArticle extends React.Component {
    state = {
        title: '',
        // category: [1, 2, 3],
        chosenCate: [],
        content: ''
    }

    componentDidMount = () => {
        instance.get('/article/topic', {})
            .then(res => this.setState({ category: res.data.map(i => (<Option key={i.value}>{i.label}</Option>)) }))
            .catch(err => console.log(err.response.data.message))
    }

    onFinish = (values) => {
        instance.post('/login', {
            title: this.state.title,
            content: this.state.content,
            category: this.state.chosenCate
        })
            .then((res) => {
                message.success(res.data);
            }, (error) => {
                message.error(error.response.data.message)
            });
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    handleSave = () => {
        if (this.state.title === '') {
            message.error('Tiêu đề bài viết không thể trống');
            return;
        }
        instance.post('/article/saveArticle', {
            title: this.state.title,
            content: this.state.content,
            category: this.state.chosenCate
        })
            .then((res) => {
                message.success(res.data);
            }, (error) => {
                message.error(error.response.data.message)
            });
    }

    render() {
        if (localStorage.getItem('user') === null) {
            message.error('Bạn chưa đăng nhập');
            return <Redirect to="/" />
        }
        if (JSON.parse(localStorage.getItem('user')).role === 'reader') {
            message.error('Bạn không thể thực hiện chức năng này');
            return <Redirect to="/" />;
        }
        return (
            <>
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Thêm bài viết</h1>
                <Form
                    style={{ marginTop: '20px' }}
                    layout='vertical'
                    name="basic"
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Tiêu đề"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Input onChange={e => this.setState({ title: e.target.value })} />
                    </Form.Item>
                    <Form.Item
                        label="Danh mục"
                        name="category"
                        rules={[
                            {
                                required: false,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            onChange={e => this.setState({ chosenCate: e })}
                        >
                            {this.state.category}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Nội dung"
                        name="content"
                        rules={[
                            {
                                required: false,
                                message: 'Please input the title!',
                            },
                        ]}
                    >
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Nội dung bài viết</p>"
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                this.setState({ content: data })
                                // console.log({ event, editor, data });
                            }}
                            onBlur={(event, editor) => {
                                // console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                // console.log('Focus.', editor);
                            }}
                        />
                    </Form.Item>
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button type="primary" onClick={this.handleSave}>Submit</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}
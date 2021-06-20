import { Form, Input, Button, Select, message, Upload } from 'antd';
import React from 'react';
import { instance } from '../../axios.instance';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Dragger } = Upload;

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
        content: '',
        summary: '',
        loading: false,
        imgSrc: ''
    }

    componentDidMount = () => {
        instance.get('/article/topic', {})
            .then(res => this.setState({ category: res.data.map(i => (<Option key={i.value}>{i.label}</Option>)) }))
            .catch(err => console.log(err.response.data.message))
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // console.log(info.file.response);
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                    imgSrc: info.file.response
                }),
            );
        }
    };

    handleSave = () => {
        if (this.state.title === '') {
            message.error('Tiêu đề bài viết không thể trống');
            return;
        }
        // console.log(this.state.imgSrc);
        instance.post('/article/saveArticle', {
            title: this.state.title,
            content: this.state.content,
            category: this.state.chosenCate,
            summary: this.state.summary,
            image: this.state.imgSrc
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
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Thêm bài viết</h1>
                <Form
                    style={{ marginTop: '20px' }}
                    layout='vertical'
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
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
                        name='summary'
                        label="Tóm tắt">
                        <Input.TextArea onChange={e => this.setState({ summary: e.target.value })} />
                    </Form.Item>
                    <Form.Item
                        name='image'
                        label="Hình ảnh">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action={process.env.REACT_APP_SERVER_HOST + '/uploadImage'}
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
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
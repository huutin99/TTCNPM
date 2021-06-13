import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import './style.css';
import { instance } from '../../axios.instance';

class ManageTopic extends Component {
    state = {
        collapsed: false,
        manage: 1
    };

    componentDidMount = () => {
        this.getUserData();
    }

    getUserData = () => {
        // console.log(SERVER_HOST);
        instance.get('/admin/user')
            .then(res =>
                console.log(res)
            )
            .catch(err =>
                console.log(err)
            )
    }

    render() {
        return (
            <>
                
            </>
        );
    };
}

export default ManageTopic;
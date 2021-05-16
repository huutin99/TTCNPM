import React, { Component } from "react";
import { Empty } from 'antd';

class Homepage extends Component {
    state = {}

    componentDidMount() {
        // this.loadData();
    }

    render() {
        return (
            <>
                <Empty />
            </>
        );
    };
}

export default Homepage;
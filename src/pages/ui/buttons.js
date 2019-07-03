import React, { Component } from 'react';
import {Card, Button, Radio} from 'antd'
import './ui-common.less'
class Buttons extends Component {
  state = {
    loading: true,
    text: '关闭',
    size: 'default'
  }

  handleCloseLoading = () => {
    this.state.loading ? this.setState({
      loading: false,
      text: '打开'
    }) : this.setState({
      loading: true,
      text: '关闭'
    })
  }

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary">primary</Button>
          <Button>normal</Button>
          <Button type="dashed">dashed</Button>
          <Button type="danger">danger</Button>
          <Button type="disabled">disabled</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle"></Button>
          <Button icon="search" type="primary">搜索</Button>
          <Button icon="download" type="primary">下载</Button>
        </Card>
        <Card title="Loading按钮">
          <Button loading={this.state.loading} type="primary">确定</Button>
          <Button loading={this.state.loading} type="primary" shape="circle"></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button loading={this.state.loading} shape="circle"></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>{this.state.text}</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary" icon="left">返回</Button>
            <Button type="primary" icon="right">前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>primary</Button>
          <Button size={this.state.size}>normal</Button>
          <Button size={this.state.size} type="dashed">dashed</Button>
          <Button size={this.state.size} type="danger">danger</Button>
          <Button size={this.state.size} type="disabled">disabled</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;
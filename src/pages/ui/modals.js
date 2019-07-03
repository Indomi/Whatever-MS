import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd'
import './ui-common.less'
class Modals extends Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }

  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }

  handleConfirm = (type) => {
    Modal[type]({
      title: '信息确认框',
      content: '不知道该显示什么',
      onOk() {
        console.log('confirm => ok')
      },
      onCancel() {
        console.log('confirm => cancel')
      }
    })
  }

  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Click It!</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
          <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="card-wrap">
          <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() => this.handleConfirm('error')}>Error</Button>
          <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
          
        </Card>
        <Modal
          title="弹框1"
          visible={this.state.showModal1}
          onCancel={() => {
            this.setState({
              showModal1: false
            })
          }}>
            <p>你把我打开了！</p>
        </Modal>
        <Modal
          title="自定义页脚"
          visible={this.state.showModal2}
          okText="自定义ok"
          cancelText="自定义cancel"
          onCancel={() => {
            this.setState({
              showModal2: false
            })
          }}>
            <p>这是一个自定义页脚的modal</p>
        </Modal>
        <Modal
          style={{top: 20}}
          title="距离顶部20px"
          visible={this.state.showModal3}
          onCancel={() => {
            this.setState({
              showModal3: false
            })
          }}>
            <p>距离顶部20px</p>
        </Modal>
        <Modal
          style={{
            top: '50%',
            transform: 'translateY(-50%)'
          }}
          title="垂直居中"
          visible={this.state.showModal4}
          onCancel={() => {
            this.setState({
              showModal4: false
            })
          }}>
            <p>垂直居中</p>
        </Modal>
      </div>
    );
  }
}

export default Modals;
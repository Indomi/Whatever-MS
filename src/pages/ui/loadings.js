import React, { Component } from 'react';
import { Card, Button, Spin, Icon, Alert } from 'antd'

class Loadings extends Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 25 }} />
    return (
      <div>
        <Card title="Spin">
          <Spin size="small" />
          <Spin type="default" />
          <Spin size="large" />
          <Spin indicator={icon} />
        </Card>
        <Card title="内容遮罩">
          <Alert style={{marginBottom: 20}} message="React" description="Alert for Whatever MS" type="info" />
          <Spin>
            <Alert style={{marginBottom: 20}} message="React" description="Alert for Whatever MS" type="info" />
          </Spin>
          <Spin tip="加载中...">
            <Alert style={{marginBottom: 20}} message="React" description="Alert for Whatever MS" type="info" />
          </Spin>
          <Spin indicator={icon} tip="加载中...">
            <Alert message="React" description="Alert for Whatever MS" type="info" />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Loadings;
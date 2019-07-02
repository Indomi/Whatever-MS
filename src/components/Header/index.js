import React from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Utils from '../../utils/utils'
import axios from '../../axios'

export default class Header extends React.Component {
  state = {}
  componentWillMount() {
    this.setState({
      userName: '小可爱'
    })
    setInterval(() => {
      let sysTime = Utils.formatDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }
  getWeatherAPIData() {
    const city = '成都'
    axios.jsonp({ url: 'http://v.juhe.cn/weather/index?format=2&cityname=' + encodeURIComponent(city) + '&key=fd64177e9efe6ade8fd18bbca28a3213' }).then(res => {
      let data = res.result.today
      this.setState({
        weather: data.weather
      })
    })
  }
  render () {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{ this.state.userName }</span>
            <a href="/">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">{ this.state.weather }</span>
          </Col>
        </Row>
      </div>
    )
  }
}
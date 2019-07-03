import React, { Component } from 'react';
import MenuList from '../../config/menuConfig'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import './index.less'
const SubMenu = Menu.SubMenu

class NavLeft extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuList)
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      } else {
        return (
          <Menu.Item key={item.key}>
            <NavLink to={'/admin' + item.key}>{ item.title }</NavLink>
          </Menu.Item>
        )
      }
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/icon.png" alt="" />
          <h1>Whatever MS</h1>
        </div>
        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
import React from 'react';
import { Menu } from 'antd';
import styles from './Nav.module.less';

const { SubMenu } = Menu;

function Nav() {
  return (
    <nav className={styles.navContainer}>
      <Menu defaultSelectedKeys={['home']} defaultOpenKeys={['list']} mode="inline">
        <Menu.Item key="home">首页</Menu.Item>
        <SubMenu key="list" title="列表">
          <Menu.Item key="list1">列表1</Menu.Item>
          <Menu.Item key="list2">列表2</Menu.Item>
        </SubMenu>
      </Menu>
    </nav>
  );
}

export default Nav;

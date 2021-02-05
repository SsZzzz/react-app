import React from 'react';
import { Avatar } from 'antd';
import styles from './Header.module.less';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/rocket.png" alt="icon" />
      <h1>政企云事业部</h1>
      <Avatar style={{ marginLeft: 'auto' }} size={28} src="/user.png" />
    </header>
  );
}

export default Header;

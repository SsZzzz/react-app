import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './Header';
import Nav from './Nav';
import styles from './index.module.less';

export default function Layout(props) {
  const { route } = props;

  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={styles.body}>
        <Nav />
        <main className={styles.main}> {renderRoutes(route.routes)}</main>
      </div>
    </div>
  );
}

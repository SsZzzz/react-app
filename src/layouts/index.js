import React from 'react';
import { renderRoutes } from 'react-router-config';

function Layout(props) {
  const { route } = props;

  return (
    <div>
      <div>layout</div>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default Layout;

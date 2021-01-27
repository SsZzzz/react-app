import React from 'react';
import routes from './config';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';

function RouterConfig() {
  return <Router>{renderRoutes(routes)}</Router>;
}

export default RouterConfig;

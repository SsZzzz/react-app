import Login from '@/pages/login';
import Layout from '@/layouts';
import Home from '@/pages/home';
import List from '@/pages/list';
import Error404 from '@/pages/404';

const routerBase = '/routerBase';

const routes = [
  { path: '/login', component: Login, exact: true },
  {
    path: '/',
    component: Layout,
    routes: [
      { path: '/home', component: Home, exact: true },
      { path: '/list', component: List, exact: true },
      { path: '/*', component: Error404 },
    ],
  },
];

function dfs(routes) {
  for (let route of routes) {
    route.path = routerBase + route.path;
    if (route.routes?.length) dfs(route.routes);
  }
}

dfs(routes);

export default routes;

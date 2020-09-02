import homeLayout from '../layouts/homeLayout';
import Search from '../views/search';

export default [
  {
    path: '/',
    component: homeLayout,
    routes: [
      {
        path: '/search',
        exact: true,
        component: Search
      },
    ]
  }
]
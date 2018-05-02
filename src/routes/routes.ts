import IndexPage from '../modules/index/IndexContainer';
import ContentPage from '../modules/content/ContentView';
import MemberPage from '../modules/members/MemberContainer';

const routeList: Array<object> = [
  {
    path: '/',
    exact: true,
    component: IndexPage, // Add your route here
  },
  {
    path: '/content',
    exact: true,
    component: ContentPage,
  },
  {
    path: '/members',
    exact: true,
    component: MemberPage,
  },
];

export default routeList;

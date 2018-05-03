import IndexPage from '../modules/index/IndexContainer';
import ContentPage from '../modules/content/ContentView';
import MemberPage from '../modules/members/MemberContainer';
import CreditCardPage from '../modules/creditCard/CreditCardContainter';

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
  {
    path: '/credit',
    exact: true,
    component: CreditCardPage,
  },
];

export default routeList;

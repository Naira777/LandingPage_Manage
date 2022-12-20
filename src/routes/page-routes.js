import Blog  from '../pages/blog';
import News from '../pages/news/news';
import Careers from "../pages/careers";
import Portfolio from "../pages/portfolio";
import Team from "../pages/team"
import Login from '../pages/login';
import CV from "../pages/cv"

export const appRoutes = [
  {
    name: 'blog',
    text: 'Blog',
    path: '/blog',
    element: <Blog />,
    children: [
      {
        name: 'createBlog',
        text: 'CreateBlog',
        path: 'create',
        element: <>jhggjhgj</>,
      }
    ]
  },
  {
    name: 'news',
    text: 'News',
    path: '/news',
    element: <News />,
  },
  {
    name: 'careers',
    text: 'Careers',
    path: '/careers',
    element: <Careers />,
  },
  {
    name: 'portfolio',
    text: 'Portfolio',
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    name: 'team',
    text: 'Team',
    path: '/team',
    element: <Team />,
  },
  {
    name: 'cv',
    text: 'Cv',
    path: '/cv',
    element: <CV />,
  },
];

export const routes = [
 {
  name: 'login',
  path: '/login',
  text: 'Login',
  element: <Login />
 },
];
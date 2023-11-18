import MainLayout from '../layout'
import Index from '../views'
import Contribute from '../views/contribute'

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/contribute',
      element: <Contribute />,
    },
  ],
}

export default MainRoutes

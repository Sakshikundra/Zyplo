import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import AppLayout from '@/layouts/app_layout.jsx';
import RedirectLink from './pages/redirect-link';
import LandingPage from './pages/LandingPage';
import Auth from './pages/auth.jsx';
import Dashboard from './pages/dashboard.jsx';
import Link from './pages/link.jsx';
import { RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
      }
      ,
      {
        path:'/auth',
        element:<Auth/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/link/:id',
        element:<Link/>
      },
      {
        path:'/:id',
        element:<RedirectLink/>
      }
    ]

  }
]);
function App() {
  return <RouterProvider router={router}>

  </RouterProvider>
}

export default App;

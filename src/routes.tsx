import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLaout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { SigIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
  {
    path: '/',
    element: <AuthLaout />,
    children: [{ path: '/sign-in', element: <SigIn /> }],
  },
])

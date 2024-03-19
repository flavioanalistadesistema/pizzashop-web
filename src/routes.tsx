import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/app'
import { Dashboard } from './pages/app/dashboard'
import { AuthLaout } from './pages/auth'
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

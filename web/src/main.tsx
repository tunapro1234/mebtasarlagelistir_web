import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/App'
import './styles/index.css'
import Home from './pages/Home'
import Kurallar from './pages/Kurallar'
import Takvim from './pages/Takvim'
import Oduller from './pages/Oduller'
import Destekciler from './pages/Destekciler'
import Hakkinda from './pages/Hakkinda'
import Iletisim from './pages/Iletisim'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'kurallar', element: <Kurallar /> },
      { path: 'takvim', element: <Takvim /> },
      { path: 'oduller', element: <Oduller /> },
      { path: 'destekciler', element: <Destekciler /> },
      { path: 'hakkinda', element: <Hakkinda /> },
      { path: 'iletisim', element: <Iletisim /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)



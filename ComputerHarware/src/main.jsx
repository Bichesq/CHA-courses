import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import KnowledgeCheck from './slides-group/KnowledgeCheck.jsx'
import LearningMaterial from './slides-group/LearningMaterial.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      
    {
      path: '/questions',
      element: <KnowledgeCheck />
    },
    {
        path: '/learn',
      element: <LearningMaterial />,
        index:true
    }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

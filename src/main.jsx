import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClientProvider } from 'react-query'
import {queryClient} from './services/services'
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'
import Home from "./pages/Home/Home"

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
    ]
  }
]

)


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RouterLayout from './Layout/RouterLayout'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Add from './Pages/Qo\'shish/Add'
import Remont from './Pages/Remont/Remont'
import Ijara from './Pages/Ijara/Ijara'
import Cars from './Pages/Cars/Cars'
import Finished from './Pages/Finished/Finished'
import Bosh from './Pages/Bo\'sh/Bo\'sh'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<RouterLayout/>,
      children:[
        {
          index:true,
          element:<Login/>
        },
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'/add',
          element: <Add/>,
        },
        {
          path:'/remont',
          element:<Remont/>
        },
        {
          path:'/ijara',
          element:<Ijara/>
        },
        {
          path:'/cars',
          element: <Cars/>
        },
        {
          path:'/finished',
          element:<Finished/>
        },
        {
          path:'/bosh',
          element:<Bosh/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
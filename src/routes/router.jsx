import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Category from "../pages/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../pages/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import TermCondition from "../pages/Login/TermCondition";
import PrivateRoute from "./PrivateRoute";

const router= createBrowserRouter([
      {
            path:'/',
            element: <LoginLayout/>,
            children:[
                  {
                        path:'/',
                        element: <Navigate to='/category/0'></Navigate>
                  },
                  {
                        path:'login',
                        element: <Login/>
                  },
                  {
                        path:'register',
                        element: <Register/>
                  },
                  {
                        path:'term-condition',
                        element:<TermCondition/>
                  }
            ]

      },
      {
            path:'category',
            element: <Main/>,
            children:[
                  // {
                  //       path: '/',
                  //      element: <Category/>,
                  //      loader: ()=>fetch('http://localhost:3000/news')

                  // },
                  {
                        path:':id',
                        element: <Category/>,
                        loader: ({params})=>fetch(`http://localhost:3000/category/${params.id}`)
                  },
                 
                 
            ]
      },
      {
            path:'news',
            element:<NewsLayout/>,
            children:[
                  {
                        path:':id',
                        element: <PrivateRoute><News/></PrivateRoute>,
                        loader : ({params})=>fetch(`http://localhost:3000/news/${params.id}`)
                  }
            ]

      }
])

export default router;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './e-commerce/Layout';
import Home from './e-commerce/home/Home';
import About from './e-commerce/about/About';
import Contact from './e-commerce/contact/Contact';
import User from './e-commerce/user/User';
import Github from './e-commerce/github/Github';
import { GithubinfoLoader } from './e-commerce/github/GithubInfoLoader';


// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout/>,
//         children: [
//             {
//                 path: "",
//                 element: <Home/>
//             },
//             {
//                 path: "about",
//                 element: <About/>
//             },
//             {
//                 path: "contact",
//                 element: <Contact/>
//             }
//         ]
//     }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
             <Route path='' element={<Home/>}/>
             <Route path='about' element={<About/>}/>
             <Route path='contact' element={<Contact/>}/>
             <Route path='user/:userId' element={<User/>}/>
             <Route loader={GithubinfoLoader} path='github' element={<Github/>}/>
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App /> */}

        <RouterProvider router={router} />
    </React.StrictMode>
);


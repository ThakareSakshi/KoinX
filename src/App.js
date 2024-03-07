
import { elements } from 'chart.js';
import './App.css';
import Cryptocurrencies from './Components/Page/Cryptocurrencies';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/Main/Bitcoin/ErrorPage';

function App() {

  const router=createBrowserRouter([
    {
       path:"/",
       element:<Cryptocurrencies/>
    },
    {path:"/:id",
    element:<Cryptocurrencies/>
     },
     {
      path:"/error",
     element:<ErrorPage/>
     }
  ])
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
     
    </div>
  );
}

export default App;

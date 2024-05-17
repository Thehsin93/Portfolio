import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from "react-router-dom";
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ViewPage from './Components/ViewPage';
import Body from './Components/Body';
import Error from './Components/Error';
import Home from './Components/Home';
import EmploymentHistory from './Components/EmploymentHistory';
function App() {

  const Approuter = createBrowserRouter([
    {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>,
        children:[
            {   path:"/EmploymentHistory",
                element:<EmploymentHistory/>,
                errorElement:<Error/>,    
            },
            {
              path:"/",
              element:<Home/>,
              errorElement:<Error/> 
          },
          
            {
                path:"/Contact",
                element:<Contact/>,
                errorElement:<Error/> 
            },
            {
              path:"/Projects",
              element:<Projects/>,
              errorElement:<Error/> 
            },
            {
                path:"/ViewProj/:watchid",
                element:<ViewPage/>,
                errorElement:<Error/> 
            },
           
        ]
    }
])

  return (
    <div className="App">
       <RouterProvider router = {Approuter}/>
    </div>
  );
}

export default App;

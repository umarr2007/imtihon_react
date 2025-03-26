import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Posts from "./components/pages/Posts";
import Profile from "./components/pages/Profile";
import ProfileDetails from "./components/pages/ProfileDetails";
import Dashboard from "./components/pages/Dashboard";

const isAuth = () => {
  return localStorage.getItem("token") !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuth() ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <nav>
        <div className="bg-gray-700 h-[70px]" >
          <ul className="flex justify-end pt-[20px] gap-[50px] mr-[20px]">
            <li>
              <Link to="/profile"  className="font-[600] text-[#fff] text-[16px] leading-[26px]">Developers</Link>
            </li>
            <li to="/register" style={{display:isAuth()? 'none' : 'block'}}>
            <Link   className="font-[400] text-[#fff] text-[16px] leading-[26px]">Register</Link>

             
            </li>
            <li to="/register" style={{display:isAuth()? 'none' : 'block'}}>
            <Link to="/login"  className="font-[600] text-[#fff] text-[16px] leading-[26px]">Login</Link>
            </li>

            <li to="/register" style={{display:isAuth()? 'block' : 'none'}}>
            <Link to="/posts"  className="font-[600] text-[#fff] text-[16px] leading-[26px]">Posts</Link>
            </li>


            <li to="/register" style={{display:isAuth()? 'block' : 'none'}}>
            <Link to="/dashboard"  className="font-[600] text-[#fff] text-[16px] leading-[26px]">Dashboard</Link>
            </li>

            <li to="/register" style={{display:isAuth()? 'block' : 'none'}}>
            <Link to="/login" onClick={()=>{
              localStorage.removeItem('token')
             navigator("/login");
            }}  className="font-[600] text-[#fff] text-[16px] leading-[26px]"> <i className="fa-solid fa-right-from-bracket mr-[10px]"></i>logout </Link>
            </li>

           
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dev" element={<Profile />} />
        <Route path="/dashboard" element={
         <ProtectedRoute>
         <Dashboard />
       </ProtectedRoute>
        } />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <Posts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
              <Profile />
          }
        />
        <Route
          path="/profile/:id"
          element={
       
              <ProfileDetails />
    
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

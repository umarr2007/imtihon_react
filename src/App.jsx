import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Teachers from "./components/Teachers";
import Addteacher from "./components/Addteacher";
import Add_id from "./components/Addid";

function isAuth() {
  return localStorage.getItem("token") ? true : false;
}

const ProtectedRoute = ({ children }) => {
  return isAuth() ? children : <Navigate to="/login" />;
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/teacher" element={<Teachers />} />
        <Route path="/addteacher" element={<Addteacher />} />
        <Route path="/add/:id" element={<Add_id />} />
        {/* <Route path="*" element={<h1>404</h1>} /> */}
      </Routes>
    </Router>
  );
};

export default App;

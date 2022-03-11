import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Explore from "./pages/explore/explore";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CreatePost from "./pages/createPost/createPost";
import Dashboard from "./pages/dashboard/dashboard";
import Explore from "./pages/explore/explore";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Landing from "./pages/landing/Landing";


function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Signup />}/>
          <Route path="/create-post" element={<CreatePost />}/>
          <Route path="/home" element={<Landing />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

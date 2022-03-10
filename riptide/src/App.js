import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Explore from "./pages/explore/explore";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

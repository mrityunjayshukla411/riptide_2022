import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Explore from "./pages/explore/explore";
import "./pages/explore/explore.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Explore></Explore>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

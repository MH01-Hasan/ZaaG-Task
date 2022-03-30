

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import TaskOne from "./component/TaskOne/TaskOne";
import TaskTwo from "./component/TaskTwo/TaskTwo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/TaskOne" element={<TaskOne />} />
          <Route path="/TaskTwo" element={<TaskTwo />} />
        </Routes>
      </BrowserRouter >
    </div >
  );
}

export default App;

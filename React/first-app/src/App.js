import logo from './logo.svg';
import './App.css';
import FuncContainer from './FuncContainer'
import MyClassComponent from './MyClassComponent';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
          <ul>
            <li><Link to="/class">Class</Link></li>
            <li><Link to="/func">Function</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/class" element={<MyClassComponent />} />
        <Route path="/func"  component={<FuncContainer />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

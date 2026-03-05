import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FetchUser from './components/FetchUser';
import Home from './components/Home';
import UseRefHookPractice from './components/UseRefHookPractice';

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/fetch">Fetch User</Link>
        <Link to="/useref">useRef Hook</Link>
      </nav>

      <Routes>
        <Route path='/fetch' element={<FetchUser />} />
        <Route path='/' element={<Home />} />
        <Route path='/useref' element={<UseRefHookPractice />} />
      </Routes>


    </div>
  );
}

export default App;

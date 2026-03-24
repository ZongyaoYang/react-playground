import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FetchUser from './components/FetchUser';
import Home from './components/Home';
import UseRefHookPractice from './components/UseRefHookPractice';
import MouseTracking from './components/MouseTracking';
import ButtonNesting from './components/ButtonNesting';
import UseEffectPlayground from './components/UseEffectPlayground';

function App() {
  return (
    <div>
      <nav style={{ padding: "10px", display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/fetch">Fetch User</Link>
        <Link to="/useref">useRef Hook</Link>
        <Link to='/mouse-tracking'>Mouse Tracking</Link>
        <Link to='/button-nesting'>Button Nesting</Link>
        <Link to='/useEffect'>useEffect Playground</Link>
      </nav>

      <Routes>
        <Route path='/fetch' element={<FetchUser />} />
        <Route path='/' element={<Home />} />
        <Route path='/useref' element={<UseRefHookPractice />} />
        <Route path='/mouse-tracking' element={<MouseTracking />} />
        <Route path='/button-nesting' element={<ButtonNesting />} />
        <Route path='/useEffect' element={<UseEffectPlayground/>} />
      </Routes>


    </div>
  );
}

export default App;

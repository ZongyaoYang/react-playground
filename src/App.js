import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FetchUser from './components/FetchUser';
import Home from './components/Home';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/fetch">Fetch User</Link>
      </nav>

      <Routes>
        <Route path='/fetch' element={<FetchUser />} />
        <Route path='/' element={<Home />}/>
        <Route />
      </Routes>


    </div>
  );
}

export default App;

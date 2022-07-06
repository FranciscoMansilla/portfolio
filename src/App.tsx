import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/views/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;

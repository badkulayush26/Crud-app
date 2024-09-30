import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route exact path='/' element={<Read />}></Route>
        <Route exact path='/create' element={<Create />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;

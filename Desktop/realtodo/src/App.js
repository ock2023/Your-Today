
import './App.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Memo from './pages/Memo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';






function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/memo" element={<Memo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

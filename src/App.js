import './App.css';
import IndexApp from './pages/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Cualquier ruta redirige a IndexApp */}
          <Route path="*" element={<IndexApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

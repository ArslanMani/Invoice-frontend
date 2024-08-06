import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Invoice from './pages/Invoice/Invoice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Invoice/>}/>   
    </Routes>
    </Router>
  );
}
export default App;

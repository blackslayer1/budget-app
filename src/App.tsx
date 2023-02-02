import './App.scss';
import Budget from './Budget';
import Savings from './Savings';
import Header from './Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
<Router>
<Header />
  <Routes>
  <Route path="/" element={<Budget />}/>
  <Route path="/savings" element={<Savings />}/>
  </Routes>
</Router>
  );
}

export default App;

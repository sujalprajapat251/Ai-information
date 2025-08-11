import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Component/Layout';
import About from './Pages/About';

function App() {
  return (
<Routes>
  <Route path='' element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
  </Route>
</Routes>
  );
}

export default App;

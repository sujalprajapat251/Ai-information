import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Component/Layout';

function App() {
  return (
<Routes>
  <Route path='' element={<Layout/>}>
    <Route path='/' element={<Home/>}></Route>
  </Route>
</Routes>
  );
}

export default App;

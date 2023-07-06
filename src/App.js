import './App.css';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import About from './components/About';
import SignIn from './components/SignIn';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

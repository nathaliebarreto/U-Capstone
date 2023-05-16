import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Main from './pages/Main/Main';
import NotFound from './pages/Main/Main';
import NewUser from './pages/NewUser/NewUser';
import DiscTest from './pages/DiSCTest/DiSCTest';
import UserHome from './pages/UserHome/UserHome';
import Header from './components/Header/Header'; 
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { useState } from 'react';
import DiscResults from './pages/DiscResults/DiscResults';



function App() {
  
  const [user, setUser] = useState()
  const [discType, setDiscType] = useState();


  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login setUser={setUser} />}></Route>
            <Route path='/signup' element={<NewUser/>}></Route>
            <Route path='/discexam' element={<DiscTest setDiscType={setDiscType}/>}></Route>
            <Route path='/userprofile' element={<UserHome user={user}/>}></Route>
            <Route path ='/discresults' element={<DiscResults result={discType}/>}></Route>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
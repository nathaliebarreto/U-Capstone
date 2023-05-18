import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
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
  const [userAnswers, setUserAnswers] = useState()



  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login setUser={setUser}/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route
              path='/disctest'
              element={<DiscTest
                setUserAnswers={setUserAnswers}
                discType={discType}
                setDiscType={setDiscType}
                user={user}
              />}
            />
            <Route
              path='/userprofile/:userId'
              element={<UserHome
                user={user}
                setUser={setUser}
                discType={discType}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
              />}
            />
            <Route
              path ='/discresults/:userId'
              element={<DiscResults
                user={user}
                setUser={setUser}
                discType={discType}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
              />}
            />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
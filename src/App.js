import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/header';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './context/auth';
import SideBar from './components/sideBar';
import HomePage from './pages/home/page';
import TeamPage from './pages/team/page';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex h-screen">
          <SideBar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex-1">
              <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/teams' element={<TeamPage />}/>
              </Routes>
            </div>
            <ToastContainer theme="dark" />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}


export default App;

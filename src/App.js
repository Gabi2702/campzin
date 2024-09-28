import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './context/auth';
import SideBar from './components/sideBar';
import HomePage from './pages/home/page';
import TeamPage from './pages/team/page';
import TournamentsPage from './pages/tournaments/page';
import GamesPage from './pages/games/page';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex h-screen">
          <SideBar />
          {/* Flex-1 para ocupar o espaço restante */}
          <div className="flex-1 flex flex-col">
            {/* Header sempre no topo */}
            <Header />
            {/* Conteúdo flexível para ocupar o restante */}
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/teams' element={<TeamPage />} />
                <Route path='/tournaments' element={<TournamentsPage />} />
                <Route path='/games' element={<GamesPage />} />
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

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './context/auth';
import SideBar from './components/sideBar';
import HomePage from './pages/home/page';
import TeamPage from './pages/team/page';
import TournamentsPage from './pages/tournaments/page';
import GamesPage from './pages/games/page';
import ProtectedRoute from './context/protectedRoute';
import DashboardUser from './pages/dashboard/page';
import TournamentByIdPage from './pages/tournaments/id/page';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex h-screen">
          <SideBar />
          <div className="flex-1 flex flex-col">
            <Header />
            <div className="flex-1 overflow-auto">
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/teams' element={<TeamPage />} />
                <Route path='/tournaments' element={<TournamentsPage />} />
                <Route path='/tournaments/:id' element={<TournamentByIdPage />} />
                <Route path='/tournaments/game/:game' element={<TournamentsPage />} />
                <Route path='/games' element={<GamesPage />} />
                <Route path='/dashboard/user' element={<ProtectedRoute element={<DashboardUser />} />} />
                <Route path='/tournaments/user' element={<ProtectedRoute element={<GamesPage />} />} />
                <Route path='/teams/user' element={<ProtectedRoute element={<GamesPage />} />} />
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

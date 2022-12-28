import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from "./components/dashboard/Dashboard";
import HealthDetails from './components/health/HealthDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Chat from './components/health/Chat';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
     <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/health/:id" element={<HealthDetails />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chat" element={<Chat />} />
     </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;

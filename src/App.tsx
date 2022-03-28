import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {

  return (
    <div className='font-poppins'>
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

function Projects() {
  return (
    <div className='bg-blue-400 h-[90rem] pt-16'>
      <div className='w-32 h-32 text-center'>Projects</div>
    </div>
  );
}

function About() {
  return (
    <div className='bg-blue-400 h-[90rem] pt-16'>
      <div className='h-96 bg-blue-600 text-center'>
        <img className='w-80 h-96 object-none' src={`./councelor-2.jpg`} alt="Logo" />
      </div>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function Register() {
  return (
    <div>
      <h2>Register</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h2>NotFound</h2>
    </div>
  );
}
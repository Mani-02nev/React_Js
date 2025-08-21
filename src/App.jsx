import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const Home = () => (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
      <h1>Welcome to My Exam App 🚀</h1>
      <p>Choose a page to continue:</p>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/login">Login</Link> | 
        <Link to="/admin">Admin</Link> | 
        <Link to="/exam">Exam</Link>
      </nav>
    </div>
  );

  const Login = () => (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
      <h1>Login Page</h1>
      <p>Enter your credentials here.</p>
    </div>
  );

  const Admin = () => (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
      <h1>Admin Page</h1>
      <p>Manage the exam content here.</p>
    </div>
  );

  const Exam = () => (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
      <h1>Exam Page</h1>
      <p>Start your exam here.</p>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/exam" element={<Exam />} />
    </Routes>
  );
}

export default App;

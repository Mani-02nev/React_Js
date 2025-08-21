import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const Landing = () => (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My Exam App 🚀</h1>
      <nav>
        <Link to="/login">Login</Link> |
        <Link to="/admin">Admin</Link> |
        <Link to="/exam">Exam</Link>
      </nav>
    </div>
  );

  const Login = () => <h1>Login Page</h1>;
  const Admin = () => <h1>Admin Page</h1>;
  const Exam = () => <h1>Exam Page</h1>;

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/exam" element={<Exam />} />
    </Routes>
  );
}

export default App;

import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  const Landing = () => (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      color: '#fff',
      background: 'linear-gradient(to right, #6a11cb, #2575fc)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Welcome to My Exam App 🚀</h1>
      <p>Choose a page to continue:</p>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/admin" style={linkStyle}>Admin</Link>
        <Link to="/exam" style={linkStyle}>Exam</Link>
      </nav>
    </div>
  );

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '10px 20px',
    margin: '5px',
    border: '1px solid #fff',
    borderRadius: '5px'
  };

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

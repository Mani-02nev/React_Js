import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {
  const Login = () => <h1>Login Page</h1>
  const Home = () => <h1>Home Page</h1>
  const Admin = () => <h1>Admin Page</h1>
  const Exam = () => <h1>Exam Page</h1>

  return (
    <div>
      <nav>
        <Link to="/login">Login</Link> |
        <Link to="/home">Home</Link> |
        <Link to="/admin">Admin</Link> |
        <Link to="/exam">Exam</Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </div>
  )
}

export default App

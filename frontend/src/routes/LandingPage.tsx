import { Link } from "react-router"

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Lakshya</h1>

      <p>AI Career Mentor</p>

      <Link to="/login">
        Login
      </Link>

      <br />

      <Link to="/register">
        Register
      </Link>

      <br />

      <Link to="/interview/setup">
        Start Mock Interview
      </Link>
    </div>
  )
}

export default LandingPage
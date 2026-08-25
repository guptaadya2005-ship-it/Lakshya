import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router"

import LandingPage from "./routes/LandingPage"
import Login from "./routes/AuthPages/Login"
import Register from "./routes/AuthPages/Register"

import Dashboard from "./routes/Dashboard"
import ResumeUpload from "./routes/ResumeUpload"

import InterviewSetup from "./routes/InterviewSetup"
import InterviewRoom from "./routes/InterviewRoom"
import InterviewReport from "./routes/InterviewReport"

import PracticeSession from "./routes/PracticeSession"
import ProgressTracker from "./routes/ProgressTracker"


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Landing Page */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Resume */}
        <Route
          path="/resume"
          element={<ResumeUpload />}
        />

        {/* Interview */}
        <Route
          path="/interview/setup"
          element={<InterviewSetup />}
        />

        <Route
          path="/interview/room"
          element={<InterviewRoom />}
        />

        <Route
          path="/interview/report"
          element={<InterviewReport />}
        />

        {/* Practice */}
        <Route
          path="/practice"
          element={<PracticeSession />}
        />

        {/* Progress */}
        <Route
          path="/progress"
          element={<ProgressTracker />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App
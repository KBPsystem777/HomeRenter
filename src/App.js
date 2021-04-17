import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Footer from "./components/Footer"
import "./styles/app.css"

function App() {
  return (
    <div className="app">
      <Home className="text-center" />
      <Login />
      <Footer />
    </div>
  )
}

export default App

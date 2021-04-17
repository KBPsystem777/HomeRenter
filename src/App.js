import Header from "./components/Header"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import OwnerRegistration from "./components/pages/registration/OwnerRegistration"
import TenantRegistration from "./components/pages/registration/TenantRegistration"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./styles/app.css"

function App() {
  return (
    <Router className="app container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register/owner" exact component={OwnerRegistration} />
        <Route path="/register/tenant" exact component={TenantRegistration} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

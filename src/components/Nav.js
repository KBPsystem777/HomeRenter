import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Registration
          </DropdownToggle>
          <DropdownMenu right>
            <Link to="/register/owner">
              <DropdownItem>Land Owner</DropdownItem>
            </Link>
            <Link to="/register/tenant">
              <DropdownItem>Tenant</DropdownItem>
            </Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      </ul>
    </div>
  )
}

export default Nav

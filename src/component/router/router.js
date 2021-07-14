import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { LoginConsumer } from "../context/LoginContext";
import Home from "../Home";
import Login from "../Login";
import TestDrive from "../TestDrive";
import Account from "../Account"


export const router = (
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand text-warning" to="/">
        TOYOTA BHARATH
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {
            <LoginConsumer>
              {(loginDetails) => {
                if (loginDetails.login) {
                  return (
                    <>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/testdrive">
                          BOOK NOW      
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/show">
                          CUSTOMERS
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link
                          className="nav-link"
                          to="/show"
                          onClick={() => {
                            loginDetails.logout();
                            window.location.pathname = "/Login";
                          }}
                        >
                          LOGOUT
                        </Link>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <li className="nav-item active">
                      <Link className="nav-link" to="/Login">
                        LOGIN
                      </Link>
                    </li>
                  );
                }
              }}
            </LoginConsumer>
          }
        </ul>
      </div>
    </nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/testdrive" component={TestDrive} />
      <Route path="/show" component={Account} />
    </Switch>
  </BrowserRouter>
);

import { useState } from "react";
import LoginContext from "./component/context/LoginContext";
import { router } from "./component/router/router";



function App() {
  const [login, setLogin] = useState(false);
  const logout = () => {
    setLogin(false);
  };

  const changeLogin = () => {
    setLogin(true);
  };

  const loginDetails = {
    login: login,
    logout: logout,
    changeLogin: changeLogin,
  };
  return (
    <LoginContext.Provider value={loginDetails}>
      {router}
      </LoginContext.Provider>
  );
}

export default App;

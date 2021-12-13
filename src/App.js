import dotenv from "dotenv";
import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import PageWelcome from "./pages/PageWelcome";
import PageRegister from "./pages/PageRegister";
import PageLogin from "./pages/PageLogin";
import PageLogout from "./pages/PageLogout";
import PageAdmin from "./pages/PageAdmin";
import AppContext from "./AppContext";
import "./App.scss";

dotenv.config();
const backend_env = process.env.REACT_APP_BACKEND_URL;

function App() {
  // const { setCurrentUser, currentUser, currentUserIsInGroup } =  useContext(AppContext);
  const { setCurrentUser } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      const requestOptions = {
        method: "GET",
        credentials: "include",
      };
      const response = await fetch(
        `${backend_env}/currentuser`,
        requestOptions
      );
      if (response.ok) {
        const _currentUser = await response.json();
        setCurrentUser((prev) => ({ ...prev, ..._currentUser }));
      }
    })();
  }, [setCurrentUser]);

  return (
    <div className="App">
      <div>
        <div>
          <h1>MERN Showcase App</h1>
        </div>
        <Nav />
        <Routes>
          <Route path="/" element={<PageWelcome />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/admin" element={<PageAdmin />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/logout" element={<PageLogout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

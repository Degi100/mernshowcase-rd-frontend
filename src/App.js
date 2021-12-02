import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({})

	useEffect(() => {
		(async () => {
			const requestOptions = {
				method: 'GET',
				credentials: 'include'
			};
			const response = await fetch('http://localhost:3003/currentuser', requestOptions);
			if (response.ok) {
				const _currentUser = await response.json();
				setCurrentUser(prev => ({ ...prev, ..._currentUser }));
			}
		})();
	}, []);

  const handleUsername = (e) => {
    const _username = e.target.value;
    setUsername(_username);
  };

  const handlePassword = (e) => {
    const _password = e.target.value;
    setPassword(_password);
  };

    const handleLoginButton = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };
        const response = await fetch('http://localhost:3003/login', requestOptions);
        const _currentUser = await response.json();
        setCurrentUser(prev => ({...prev, ..._currentUser }));
    }

  return (
    <div className="App">
    <h2>Current User: {currentUser.firstName} {currentUser.lastName}</h2>
      <form>
        <fieldset>
          <legend>Login</legend>
          <div className="row">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsername}
            />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePassword}
              value={password}
            />
          </div>
          <div className="buttonRow">
            <button onClick={handleLoginButton}>Login</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

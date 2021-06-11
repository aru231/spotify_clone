import "./App.css";
import Bar from "./components/Bar";
import Login from "./Login";
import React, { useEffect, useState } from "react";
import { getTokenfromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenfromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    // console.log("token",token);
  }, []);
  return (
    <div className="App">
      {token ? <h1>logged</h1> : <Login />}
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SimpleLogin from "@simplelogin/client";
const simple = new SimpleLogin(process.env.REACT_APP_SIMPLELOGIN_KEY!);
// const simple = new SimpleLogin("8a80c993-1601-4970-9ffc-9983f1995f95");

function App() {
  const { user, loading, logout } = simple.useUser();
  const [email, setEmail] = React.useState("");

  return (
    <div style={{ padding: "20px" }}>
      <simple.LoginModal />
      {loading ? (
        <div>loading...</div>
      ) : user ? (
        <div>
          <button onClick={() => logout()}>logout</button>
          <div style={{ marginTop: "10px" }}>Logged in as: {user?.email}</div>
        </div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await simple.loginOrSignup({ email });
            console.log(res);
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: "1px solid gray" }}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;

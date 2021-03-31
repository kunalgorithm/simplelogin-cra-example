import React from "react";

import SimpleLogin from "@simplelogin/client";
const simple = new SimpleLogin(process.env.REACT_APP_SIMPLELOGIN_KEY!);

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
            await simple.loginOrSignup({ email });
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

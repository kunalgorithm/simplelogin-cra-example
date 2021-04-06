import React from "react";
import "./App.css";
import SimpleLogin from "@simplelogin/client";
const simple = new SimpleLogin(process.env.REACT_APP_SIMPLELOGIN_KEY!);

function App() {
  const { user, logout } = simple.useUser();
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <simple.LoginModal />
      {user ? (
        <div>
          <button onClick={async () => await logout()}>logout</button>
          <div style={{ marginTop: "10px" }}>Logged in as: {user?.email}</div>
        </div>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (loading) return;
            setLoading(true);
            await simple.loginOrSignup({ email });
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: "1px solid gray" }}
          />
          <button type="submit">{loading ? "Submitting... " : "Submit"}</button>
        </form>
      )}
    </div>
  );
}

export default App;

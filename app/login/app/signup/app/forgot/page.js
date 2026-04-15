"use client";

import { useState } from "react";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    alert("Reset link sent (Demo)");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Forgot Password</h2>

        <input
          placeholder="Enter Gmail / Mobile"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleReset} style={styles.button}>
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  card: {
    background: "#fff",
    padding: 25,
    borderRadius: 10,
    width: 300,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    border: "1px solid #ccc",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: 10,
    background: "red",
    color: "#fff",
    border: "none",
    borderRadius: 5,
  },
};

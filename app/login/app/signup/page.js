"use client";

import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({});

  const handleSignup = () => {
    alert("Signup Success (Demo)");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Signup</h2>

        <input placeholder="Name" style={styles.input} />
        <input placeholder="Mobile No" style={styles.input} />
        <input placeholder="Gmail ID" style={styles.input} />
        <input placeholder="Address" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />

        <button onClick={handleSignup} style={styles.button}>
          Signup
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
    background: "blue",
    color: "#fff",
    border: "none",
    borderRadius: 5,
  },
};

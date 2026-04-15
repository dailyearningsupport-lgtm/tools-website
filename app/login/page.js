"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    alert("Login Success (Demo)");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Login</h2>

        <input
          placeholder="Mobile / Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>

        <div style={styles.links}>
          <Link href="/forgot">Forgot Password?</Link>
        </div>

        <p>
          Don't have account? <Link href="/signup">Signup</Link>
        </p>

        {/* WhatsApp Support */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          style={styles.whatsapp}
        >
          💬 Customer Support (WhatsApp)
        </a>
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
    background: "green",
    color: "#fff",
    border: "none",
    borderRadius: 5,
  },
  links: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
  },
  whatsapp: {
    display: "block",
    marginTop: 15,
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
  },
};

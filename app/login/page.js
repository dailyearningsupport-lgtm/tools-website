"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    // 👉 Demo login (baad me firebase add karenge)
    localStorage.setItem("user", email);

    // 🔥 Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ textAlign: "center" }}>Login</h2>

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

        <p style={{ textAlign: "center" }}>
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
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
  },
  card: {
    background: "#fff",
    padding: 25,
    borderRadius: 12,
    width: 320,
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    border: "1px solid #ccc",
    borderRadius: 6,
  },
  button: {
    width: "100%",
    padding: 12,
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    fontWeight: "bold",
    cursor: "pointer",
  },
  links: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    textAlign: "right",
  },
  whatsapp: {
    display: "block",
    marginTop: 15,
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
  },
};

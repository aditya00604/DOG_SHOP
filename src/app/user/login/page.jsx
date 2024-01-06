"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import styles from "../../../components/login/login.module.css";
s
const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", formData);
      console.log(response);
      if (response.status === 200) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
    // Perform login logic here
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login Page</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>email</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
        <span>
          Don't have account{" "}
          <Link href="/user/signup" replace={true} prefetch={false}>
            Signup
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;

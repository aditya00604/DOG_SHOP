"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../../components/login/login.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/user/signup", formData);
      if (response.data.error.includes("E11000")) {
        toast.warn("user email already exist try to login", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (response.status === 200) {
        router.push("/user/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Sign up Page</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              value={formData.email}
              type="email"
              name="email"
              onChange={handleInputChange}
            />
            <label className={styles.label}>Username</label>
            <input
              className={styles.input}
              type="text"
              name="username"
              value={formData.username}
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
            <button type="submit">Sign up</button>
          </form>
          <span>
            have account{" "}
            <Link href="/user/login" replace={true} prefetch={false}>
              Login
            </Link>
          </span>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default LoginPage;

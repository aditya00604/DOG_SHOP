import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img
              src="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=996&t=st=1704566432~exp=1704567032~hmac=b33180460cc6fcec51bbaf4c486374e42a68097f2283a74444f096fe6cae6cdc"
              alt="logo"
            />
          </a>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/user/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/user/login">Login</a>
            </li>
            <li>
              <a href="/user/signup">Signup</a>
            </li>
          </ul>
        </div>
        <form className={styles.form} action="submit">
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

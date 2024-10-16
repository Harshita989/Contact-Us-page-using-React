import styles from "./Navbar.module.css";

const Navbar = () => {
  console.log(styles);
  return (
    <>
      <nav className={`${styles.navigation} container`}>
        <div className={styles.nav_logo}>
          <img src="./images/logoo.png" alt="" />
        </div>
        <ul>
          <li> Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

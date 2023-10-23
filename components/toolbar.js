import { Router, useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => (window.location.href = "https://www.instagram.com/luisguilhermelopes/")}>
        Instagram
      </div>
      <div
        onClick={() => (window.location.href = "https://github.com/Luluzao0")}
      >
        Github
      </div>
    </div>
  );
};

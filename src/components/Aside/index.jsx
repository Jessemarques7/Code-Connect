import Image from "next/image";
import styles from "./aside.module.css";
import logo from "./logo.svg";

function Aside() {
  return (
    <aside className={styles.aside}>
      <Image priority src={logo} alt="logo" width={127} height={40} />
    </aside>
  );
}

export default Aside;

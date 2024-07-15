import All from "./components/All";
import Best from "./components/Best";
import styles from "./styles.module.scss";

function Boards() {
  return (
    <div className={styles["container"]}>
      <Best />
      <All />
    </div>
  );
}

export default Boards;

import styles from "./Address.module.scss";
const Address = () => {
  
  return (
    <div className={styles.settingswork}>
      <h1>Your Addresses</h1>
      <div className={styles.settingscards}>
        <div className={styles.settingscard}>
<span className={styles.cardtitle}>Default</span>
<div></div>
        </div>
      </div>
    </div>
  );
};

export default Address;

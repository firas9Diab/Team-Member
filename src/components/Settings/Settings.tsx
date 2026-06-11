import { useState } from "react";
import MyDetails from "../MyDetails/MyDetails";
import Address from "../Address/Address";
import Password from "../Password/Password";
import styles from "./Settings.module.scss";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("myDetails");

  return (
    <div>
      <div className={styles.container}>
        <h1>Settings</h1>
        <hr />
        <div className={styles.content}>
          <div className={styles.sidebar}>
            <button
              className={
                activeTab === "myDetails" ? styles.active : styles.inactive
              }
              onClick={() => setActiveTab("myDetails")}
            >
              My Details
            </button>
            <button
              className={
                activeTab === "Address" ? styles.active : styles.inactive
              }
              onClick={() => setActiveTab("Address")}
            >
              {" "}
              Address{" "}
            </button>
            <button
              className={
                activeTab === "Password" ? styles.active : styles.inactive
              }
              onClick={() => setActiveTab("Password")}
            >
              {" "}
              Password{" "}
            </button>
          </div>
          <div className={styles.main}>
            {activeTab === "myDetails" && <MyDetails />}
            {activeTab === "Address" && <Address />}
            {activeTab === "Password" && <Password />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

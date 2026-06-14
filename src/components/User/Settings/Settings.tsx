import { useState } from "react";
import styles from "./Settings.module.scss";

import MyDetails from "./My Details/mydetails";
import Password from "./Password/Password";
import Address from "./Address/Address";
const Settings = () => {
  const [activeTab, setActiveTab] = useState("My Details");

  return (
    <div className={styles.settingspage}>
      <p className={styles.title}>Settings</p>
      <div className={styles.flexrowsettings}>
        <aside className={styles.settingsnavbar}>
          <nav
            className={
              activeTab === "My Details" ? styles.settingsnavbarbold : ""
            }
            onClick={() => setActiveTab("My Details")}
          >
            My Details
          </nav>
          <nav
            className={activeTab === "Address" ? styles.settingsnavbarbold : ""}
            onClick={() => setActiveTab("Address")}
          >
            Address
          </nav>
          <nav
            className={
              activeTab === "Password" ? styles.settingsnavbarbold : ""
            }
            onClick={() => setActiveTab("Password")}
          >
            Password
          </nav>
        </aside>
        {activeTab === "My Details" && <MyDetails />}

        {activeTab === "Address" && <Address />}
        {activeTab === "Password" && <Password />}
      </div>
    </div>
  );
};

export default Settings;

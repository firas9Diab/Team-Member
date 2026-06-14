import { useState } from "react";
import MyDetails from "../MyDetails/MyDetails";
import Password from "../Password/Password";
import styles from "./Settings.module.scss";
import classNames from "classnames";
import Address from "../Address/Address";

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
              className={classNames({
                [styles.active]: activeTab === "myDetails",
                [styles.inactive]: activeTab !== "myDetails",
              })}
              onClick={() => setActiveTab("myDetails")}
            >
              My Details
            </button>
            <button
              className={classNames({
                [styles.active]: activeTab === "Address",
                [styles.inactive]: activeTab !== "Address",
              })}
              onClick={() => setActiveTab("Address")}
            >
              Address
            </button>
            <button
              className={classNames({
                [styles.active]: activeTab === "Password",
                [styles.inactive]: activeTab !== "Password",
              })}
              onClick={() => setActiveTab("Password")}
            >
              Password
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

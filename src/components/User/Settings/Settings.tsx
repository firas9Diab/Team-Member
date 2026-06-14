import React, { useEffect, useRef, useState } from "react";
import styles from "../Settings/Settings.module.scss";
import date from "../../../../public/Icons/date.svg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


const Settings = () => {
  const ref = useRef<HTMLInputElement | null>(null);
const navigation=useNavigate()
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [dateofBirth, setDateofBirth] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setName(e.target.value);
  };
  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setPhone(e.target.value);
  };
  const handleDateOfBirthChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setDateofBirth(e.target.value);
  };
  const fetchUserById = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`http://localhost:3000/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(response.data.data.fullName);
      setEmail(response.data.data.email);
      setPhone(response.data.data.phone);
      setDateofBirth(response.data.data.dateOfBirth.slice(0, 10));
      console.log(response.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load user");
    }
  };

  useEffect(() => {
    fetchUserById();
  }, []);

 const handleUpdateuser = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.patch(
      "http://localhost:3000/users/me",
      {
        fullName: name,
        phone: phone,
        dateOfBirth: dateofBirth,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
setError("Updated Successfull!")
   
  } catch (err: any) {
    setError(err.response?.data?.message || "Failed to update user");
  }
};
  return (
    <div className={styles.settingspage}>
      <p className={styles.title}>Settings</p>
      <div className={styles.flexrowsettings}>
        <aside className={styles.settingsnavbar}>
          <nav>My Details</nav>
          <nav>Address</nav>
          <nav>Password</nav>
        </aside>

        <div className={styles.settingswork}>
          <p className={styles.settingsworkparegraph}>
            Update your personal details quickly and conveniently right
            here.Whether you've got a new address, phone number, or just want to
            keep things current, this is the place to do it.Keep your profile
            up-to-date hassle-free.
          </p>

          <div className={styles.settingsinputfields}>
            <div className={styles.inputfields}>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
                className={styles.inputfield}
                placeholder="Nandhu Santhosh"
              />
            </div>
            <div className={styles.inputfields}>
              <label>Email</label>
              <input
                disabled
                type="text"
                value={email}
                onChange={(e) => handleEmailChange(e)}
                className={styles.inputfield}
                placeholder="nandhusanthosh@gmail.com"
              />
            </div>
            <div className={styles.inputfields}>
              Phone
              <input
                type="text"
                value={phone}
                onChange={(e) => handlePhoneChange(e)}
                className={styles.inputfield}
                placeholder="6238973581"
              />
            </div>
            <div className={styles.inputfields}>
              Date of Birth{" "}
              <div className={styles.inputfield}>
                <input
                  ref={ref}
                  value={dateofBirth}
                  onChange={(e) => handleDateOfBirthChange(e)}
                  id="dateOfBirth"
                  type="date"
                  className={styles.inputfielddate}
                />
                <img
                  src={date}
                  alt="date icon"
                  onClick={() => ref.current?.showPicker?.()}
                />
              </div>
              {error}
            </div>
            <button
              className={styles.inputfieldbutton}
              onClick={() => {
                handleUpdateuser();
              }}
            >
              Update Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

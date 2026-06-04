import React, { useRef, useState } from "react";
import styles from "./AddUser.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import edit from "../../Assets/edit.svg";
const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  //const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addUser = async (
    fullName: string,
    jobTitle: string,
    status: string,
    avatarUrl: string,
  ) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/team-members",
        { fullName, jobTitle, status: status.trim().toUpperCase(), avatarUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      navigate("/");
    } catch (error: any) {
      console.log("FULL ERROR:", error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      formData.append("file", selectedFile);

      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(response.data.url);
      setAvatarUrl(response.data.url);
    } catch (error: any) {
      console.log("FULL ERROR:", error);
    }
  };

  return (
    <div className={styles.fullForm}>
      <div className={styles.allForm}>
        <h1>Add User</h1>
        <form className={styles.form}>
          <img
            src={avatarUrl || "/default-avatar.png"}
            alt="Avatar"
            className={styles.avatar}
          />
          <button
            type="button"
            className={styles.editAvatar}
            onClick={() => fileInputRef.current?.click()}
          >
            <img src={edit} alt="edit" />
          </button>
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            accept="image/*"
          />
          <label>fullName</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label>jobTitle</label>
          <input type="text" onChange={(e) => setJobTitle(e.target.value)} />
          <label>status</label>
          <select
            className={styles.select}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>select</option>
            <option>active</option>
            <option>inactive</option>
          </select>

          <label>AvatarUrl</label>
        </form>
        <button
          type="button"
          className={styles.formButton}
          onClick={() => {
            addUser(fullName, jobTitle, status, avatarUrl);
          }}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default AddUser;

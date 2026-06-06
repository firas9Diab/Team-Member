import React, { useRef, useState } from "react";
import styles from "./AddUser.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import edit from "../../Assets/edit.svg";
import userp from "../../Assets/userp.svg";

const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
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
    setPreviewUrl(URL.createObjectURL(selectedFile));
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
     <div className={styles.avatarContainer}>
          <img
            src={previewUrl || avatarUrl || userp}
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
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            accept="image/*"
            hidden
          />
          <label>fullName</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label>jobTitle</label>
          <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          <label>status</label>
          <select
            className={styles.select}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">select</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
          </select>

        </form>
        <div className={styles.buttons}>
        <button
          type="button"
          className={styles.formButton}
          onClick={() => {
            addUser(fullName, jobTitle, status, avatarUrl);
          }}
        >
          save
        </button>
        <button
              type="button"
              onClick={() => navigate("/")}
              className={styles.formButton}
            >
              Cancel
            </button>
            </div>
      </div>
    </div>
  );
};

export default AddUser;

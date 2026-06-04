import React, { useEffect, useRef, useState } from "react";
import styles from "./UpdateUser.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import edit from "../../Assets/edit.svg";

const UpdateUser = () => {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getId();
    }
  }, [id]);

  const getId = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:3000/team-members/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = response.data;
      setFullName(data.fullName);
      setJobTitle(data.jobTitle);
      setStatus(data.status);
      setAvatarUrl(data.avatarUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const Save = async () => {
    if (!id) {
      alert("No user selected to update!");
      navigate("/");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:3000/team-members/${id}`,
        {
          fullName,
          jobTitle,
          status: status?.trim().toUpperCase(),
          avatarUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while saving updates.");
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

      console.log("Uploaded URL:", response.data.url);
      setAvatarUrl(response.data.url);
    } catch (error: any) {
      console.log("UPLOAD ERROR:", error);
    }
  };

  return (
    <div>
      <div className={styles.fullForm}>
        <div className={styles.allForm}>
          <h2>Update User Profile</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label>Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />

            <label>Status</label>
            <select
              className={styles.select}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <label>Avatar URL</label>
          </form>

          <div>
            <button type="button" onClick={Save} className={styles.buttonForm}>
              save
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className={styles.buttonForm}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;

import React, { useEffect, useRef, useState } from "react";
import styles from "./UpdateUser.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import edit from "../../Assets/edit.svg";
import userp from "../../Assets/userp.svg";

const UpdateUser = () => {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getId();
    }
  }, [id]);

  const getId = async () => {
    try {
      const token = localStorage.getItem("token");
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    setFile(selectedFile);

    setAvatarUrl(URL.createObjectURL(selectedFile));
  };

  const Save = async () => {
    if (!id) {
      alert("No user selected to update!");
      navigate("/");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      let uploadedUrl = avatarUrl;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await axios.post(
          "http://localhost:3000/upload",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          },
        );

        uploadedUrl = uploadRes.data.url;
      }

      await axios.patch(
        `http://localhost:3000/team-members/${id}`,
        {
          fullName,
          jobTitle,
          status: status.trim().toUpperCase(),
          avatarUrl: uploadedUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      navigate("/");
    } catch (error) {
      console.error("UPDATE ERROR:", error);
      alert("Failed to update user");
    }
  };

  return (
    <div>
      <div className={styles.fullForm}>
        <div className={styles.allForm}>
          <h2>Update User Profile</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.avatarContainer}>
              <img
                src={avatarUrl || userp}
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
              hidden
              onChange={handleFileChange}
              ref={fileInputRef}
              accept="image/*"
              className={styles.hiddenInput}
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

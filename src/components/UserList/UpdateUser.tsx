import React, { useEffect, useState } from "react";
import styles from "./UpdateUser.module.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
const UpdateUser = () => {
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  //const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getId();
  }, []);

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
      /*  return response.data.map(
        (user: any) => setFullName(user.name),
        setJobTitle(user.jobTitle),
        setStatus(user.status),
        setAvatarUrl(user.avatarUrl),
      );*/
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
      //setIsSubmitting(true);
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

  return (
    <div>
      <div className={styles.fullForm}>
        <div className={styles.allForm}>
          <h2>Update User Profile</h2>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
            <input
              type="text"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
            />
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

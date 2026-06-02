import styles from "./AddUser.module.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = ({ fetchUsers }: { fetchUsers: () => void }) => {
  const navigation = useNavigate();

  const [nameValue, setNameValue] = useState<string>("");
  const [roleValue, setRoleValue] = useState<string>("");
  const [statusValue, setStatusValue] = useState<string>("inactive");
  const [avatarValue, setAvatarValue] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    if (!nameValue || !roleValue || !avatarValue) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:3000/team-members",
        {
          fullName: nameValue,
          jobTitle: roleValue,
          status: statusValue.toUpperCase(),
          avatarUrl: avatarValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      await fetchUsers();

      navigation("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add New Team Member</h1>

      <div className={styles.field}>
        <label>Full Name</label>
        <input
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Role</label>
        <input
          value={roleValue}
          onChange={(e) => setRoleValue(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Status</label>
        <select
          value={statusValue}
          onChange={(e) => setStatusValue(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className={styles.field}>
        <label>Avatar URL</label>
        <input
          value={avatarValue}
          onChange={(e) => setAvatarValue(e.target.value)}
        />
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Creating..." : "Create User"}
      </button>
    </div>
  );
};

export default AddUser;

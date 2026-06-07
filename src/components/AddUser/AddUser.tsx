import styles from "./AddUser.module.scss";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import editIcon from "../../../Icons/edit-button-svgrepo-com.svg"

const AddUser = () => {
  const navigation = useNavigate();
  const [nameValue, setNameValue] = useState<string>("");
  const [roleValue, setRoleValue] = useState<string>("");
  const [statusValue, setStatusValue] = useState<string>("inactive");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const ref = useRef<HTMLInputElement | null>(null);
  const handleSubmit = async () => {
    if (!nameValue || !roleValue || !avatarFile) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");
      const finalAvatarUrl = await uploadImage();

      await axios.post(
        "http://localhost:3000/team-members",
        {
          fullName: nameValue,
          jobTitle: roleValue,
          status: statusValue.toUpperCase(),
          avatarUrl: finalAvatarUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      navigation("/");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create user");
    } finally {
      setLoading(false);
    }
  };
 const uploadImage = async (): Promise<string> => {
    if (!avatarFile) {
      return "";
    }

    const formData = new FormData();
    formData.append("file", avatarFile);

    const response = await axios.post(
      "http://localhost:3000/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.url;
  }

  return (
    <div className={styles.container}>
      <h1>Add New Team Member</h1>
      {avatarFile === null ? "" : (<>
          <div className={styles.imagefield}>
        <img className={styles.image} src={URL.createObjectURL(avatarFile)} alt={()=>null} />
        <img className={styles.editicon}
          onClick={() => ref.current?.click()}
          src={editIcon} alt={()=>null} />

      </div>
      
      
      </>)}
  
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
        <label>Avatar</label>

        <input

          ref={ref}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) {
              setAvatarFile(null);
              return;
            }

            setAvatarFile(file);
          }}
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

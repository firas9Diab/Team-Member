import { useEffect, useRef, useState } from "react";
import styles from "./UpdateUser.module.scss";
import editIcon from "../../../Icons/edit-button-svgrepo-com.svg"
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const ref = useRef<HTMLInputElement | null>(null);
  console.log("Params:", typeof params.personId, params.personId);
  const personId = Number(params.personId);
  const id = personId;

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [oldAvatarValue, setOldAvatarValue] = useState("");

  const [avatarValue, setAvatarValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [roleValue, setRoleValue] = useState("");
  const [statusValue, setStatusValue] = useState("active");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserById = async () => {
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

      setNameValue(response.data.fullName);
      setRoleValue(response.data.jobTitle);
      setStatusValue(response.data.status.toLowerCase());
      setAvatarValue(response.data.avatarUrl);
      setOldAvatarValue(response.data.avatarUrl)
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load user");
    }
  };

  useEffect(() => {
    fetchUserById();
  }, [id]);


  const uploadImage = async (): Promise<string> => {
    if (!avatarFile) {
      return avatarValue;
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
  };

  const handleUpdateUser = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("token");

      const finalAvatarUrl = await uploadImage();





      await axios.patch(
        `http://localhost:3000/team-members/${id}`,
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
        }
      );

      navigate("/");
    } catch (err: any) {
      console.log("Update error:", err.response?.data);
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className={styles.container}>
      <h1>Update User Team Member</h1>

      <div className={styles.imagefield}>
        <img className={styles.image} src={avatarValue} alt="Avatar" />
        <img className={styles.editicon}
          onClick={() => ref.current?.click()}
          src={editIcon} alt="Avatar" />

        <input
          hidden
          ref={ref}
          type="file"
          accept="image/*"
          onChange={(e) => {
  const file = e.target.files?.[0];

  if (!file) {
    setAvatarFile(null);
    setAvatarValue(oldAvatarValue);
    return;
  }

  setAvatarFile(file);
  setAvatarValue(URL.createObjectURL(file));
}}
        />
      </div>

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



      {error && <p className={styles.error}>{error}</p>}

      <button onClick={handleUpdateUser} disabled={loading}>
        {loading ? "Updating..." : "Update User"}
      </button>

      <div>Back to <b onClick={()=>navigate("/")} className={styles.homenav}>Home</b></div>
    </div>
  );
};

export default UpdateUser;

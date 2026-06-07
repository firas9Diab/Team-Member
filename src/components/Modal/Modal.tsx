import styles from "./Modal.module.scss";

interface Props {
  setisModelOpen: (model: boolean) => void;
  handleDelete: (id: number) => void | Promise<void>;
  deletedperson: number;
  error: string;
}

const Modal = ({ setisModelOpen, handleDelete, deletedperson, error }: Props) => {
  return (
    <div className={styles.popup}>
      <button type="button" className={styles.popupx} onClick={() => setisModelOpen(false)}>
        X
      </button>

      <div className={styles.pucontentcontainer}>
        <h1>Do you want to delete this user?</h1>
      </div>

      <div className={styles.pubuttoncontainer}>
        <button
          type="button"
          onClick={() => {
            handleDelete(deletedperson);
          }}
        >
          Yes, delete.
        </button>

        <button type="button" onClick={() => setisModelOpen(false)}>
          No, thank you.
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Modal;

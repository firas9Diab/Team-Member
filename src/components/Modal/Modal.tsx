import styles from "./Modal.module.scss";

interface Props {
onConfirm:(changeid:boolean)=>void;
onClose:()=>void;
}

const Modal = ({ onConfirm, onClose }: Props) => {
  return (
    <div className={styles.popup}>
      <button type="button" className={styles.popupx} onClick={onClose}>
        X
      </button>

      <div className={styles.pucontentcontainer}>
        <h1>Do you want to delete this user?</h1>
      </div>

      <div className={styles.pubuttoncontainer}>
        <button
          type="button"
          onClick= {()=>onConfirm(true)}
          className={styles.buttons}
        >
          Yes, delete.
        </button>

        <button type="button" onClick={onClose}   className={styles.buttons}>
          No, thank you.
        </button>
      </div>
      
    </div>
  );
};

export default Modal;

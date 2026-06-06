import React from "react";
import styles from "./Popup.module.scss";

interface PopupProps {
  handleDeleteTrue: () => void;
  handleCancel: () => void;
}
function Popup({ handleDeleteTrue, handleCancel }: PopupProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_box}>
        <p>You sure you wanna delete?</p>
        <button onClick={handleCancel} className={styles.modal_buttonCancel}>
          Cancel
        </button>
        <button onClick={handleDeleteTrue} className={styles.modal_buttoDelete}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Popup;

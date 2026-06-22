import { useState } from "react";
import type { ICard } from "../../../interface/interface";
import styles from "./Card.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ Product }: ICard) => {
  const [productId, setProductId] = useState(0);

  const navigate = useNavigate();

  const handleProductIdChange = (value: number) => {
    setProductId(value);
  };

  return (
    <>
      <div
        className={styles.deals}
        onClick={() => navigate(`/products/${Product.id}`)}
      >
        <img src={Product.image} alt=" deals image " />
        <p>{Product.title}</p>
        <div className={styles.bottom}>
          <p>₹{Product.price}</p>
          <button> Buy Now !</button>
        </div>
      </div>
    </>
  );
};

export default Card;

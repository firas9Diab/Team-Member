import type { IRenderStars } from "../../interface/interface";
import styles from "./renderStars.module.scss";
import Filled from "../../Assets/filled.svg";
import Empty from "../../Assets/empty.svg";

const RenderStars = ({ starRating, rating }: IRenderStars) => {
  return (
    <>
      {starRating.map((star) => (
        <img
          key={star}
          className={styles.starsImg}
          src={star <= Math.round(rating) ? Filled : Empty}
          alt="star"
        />
      ))}
    </>
  );
};

export default RenderStars;

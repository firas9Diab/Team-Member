import styles from "./Footer.module.scss";
import useFooter from "./useFooter";
import Insta from "../../public/social-media/insta.svg";
import Facebook from "../../public/social-media/facebook.svg";
import Twitter from "../../public/social-media/twitter.svg";
import Youtube from "../../public/social-media/youtube.svg";
import Linkedin from "../../public/social-media/linkedin.svg";
const Footer = () => {
  const { footerCategories } = useFooter();
  return (
    <div className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerHeader}></div>
        <div className={styles.footerLinks}>
          {footerCategories.map((column) => (
            <div className={styles.footerColumn} key={column.id}>
              {column.title ? (
                <h3>{column.title}</h3>
              ) : (
                <div className={styles.columnSpacer}></div>
              )}
              <ul className={styles.footerList}>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className={styles.footerDivider}></div>
          <h3>Payment Partners</h3>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomInner}>
            <div>
              <p>
                © 2022 - 2023 FreshCart eCommerce. All rights reserved. Powered
                by Ecommerce.
              </p>
            </div>
            <div className={styles.socialLinks}>
              <p>Lets get social</p>
              <img src={Insta} alt="social media" />
              <img src={Facebook} alt="social media" />
              <img src={Twitter} alt="social media" />
              <img src={Youtube} alt="social media" />
              <img src={Linkedin} alt="social media" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

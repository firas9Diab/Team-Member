import styles from "./Footer.module.scss";
import insta from "../../public/Social Media/insta.svg";
import facebook from "../../public/Social Media/facebook.svg";
import twitter from "../../public/Social Media/twitter.svg";
import youtube from "../../public/Social Media/youtube.svg";
import linkedin from "../../public/Social Media/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerHeader}></div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>Category</h3>

              <ul className={styles.footerList}>
                <li>Mobile and computers</li>
                <li>TV, Appliances, Electronics</li>
                <li>Men’s Fashion</li>
                <li>Home</li>
                <li>Kitchen</li>
                <li>Beauty</li>
                <li>Health</li>
                <li>Sports</li>
                <li>Baby Products</li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <div className={styles.columnSpacer}></div>

              <ul className={styles.footerList}>
                <li>Car</li>
                <li>Motor Bikes</li>
                <li>Book</li>
                <li>Video Games</li>
                <li>Shoes</li>
                <li>Toys</li>
                <li>Consoles</li>
                <li>Accessories</li>
                <li>Groceries</li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <div className={styles.columnSpacer}></div>

              <ul className={styles.footerList}>
                <li>Mobile and computers</li>
                <li>TV, Appliances, Electronics</li>
                <li>Men’s Fashion</li>
                <li>Home</li>
                <li>Kitchen</li>
                <li>Beauty</li>
                <li>Health</li>
                <li>Sports</li>
                <li>Baby Products</li>
              </ul>
            </div>

            <div className={styles.footerDivider}></div>

            <h3>Payment Partners</h3>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerBottomInner}>
              <div>
                <p>
                  © 2022 - 2023 FreshCart eCommerce. All rights reserved.
                  Powered by Ecommerce.
                </p>
              </div>

              <div className={styles.socialLinks}>
                <p>Lets get social</p>

                <img src={insta} alt="Instagram" />
                <img src={facebook} alt="Facebook" />
                <img src={twitter} alt="Twitter" />
                <img src={youtube} alt="YouTube" />
                <img src={linkedin} alt="LinkedIn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import styles from "./Footer.module.scss";
import insta from "../../Assets/insta.svg";
import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import youtube from "../../Assets/youtube.svg";
import linkedin from "../../Assets/linkedin.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.main}>
          <div className={styles.title}>
            <h3>Cateogry</h3>
            <h3>Payment Partners</h3>
          </div>

          <div className={styles.texts}>
            <p>
              Mobile and computers
              <br />
              TV, Appliances, Electronics
              <br />
              Men’s Fashion
              <br />
              Home
              <br />
              Kitchen
              <br />
              Beauty
              <br />
              Health
              <br />
              Sports
              <br />
              Baby Products
              <br />
            </p>

            <p>
              Car
              <br />
              Motor Bikes
              <br />
              Book
              <br />
              Video Games
              <br />
              Shoes
              <br />
              Toys
              <br />
              Consoles
              <br />
              Accessories
              <br />
              Groceries
              <br />
            </p>
            <p>
              Mobile and computers <br />
              TV, Appliances, Electronics <br />
              Men’s Fashion <br />
              Home <br />
              Kitchen <br />
              Beauty <br />
              Health <br />
              Sports <br />
              Baby Products <br />
            </p>
            <div className={styles.line}></div>
          </div>

          <div className={styles.bottom}>
            <div>
              <p>
                © 2022 - 2023 FreshCart eCommerce. All rights reserved. Powered
                by Ecommerce.
              </p>
            </div>
            <div className={styles.bottomIcons}>
              <p>Lets get social</p>

              <img src={insta} alt={insta} />
              <img src={facebook} alt={facebook} />
              <img src={twitter} alt={twitter} />
              <img src={youtube} alt={youtube} />
              <img src={linkedin} alt={linkedin} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

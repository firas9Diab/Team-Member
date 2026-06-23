import styles from "./Footer.module.scss";
import useFooter from "./useFooter";

const Footer = () => {
  const { socialMedias } = useFooter();

  return (
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
                © 2022 - 2023 FreshCart eCommerce. All rights reserved. Powered
                by Ecommerce.
              </p>
            </div>

            <div className={styles.socialLinks}>
              <p>Lets get social</p>

              {socialMedias.map((socialMedia, index) => (
                <img key={index} src={socialMedia} alt="social media" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

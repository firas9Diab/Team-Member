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
        <div className={styles.main}>
          <div className={styles.title}>
            
            
          </div>

          <div className={styles.texts}>
            <div className={styles.textsfirst}>
              <h3>Cateogry</h3>
           <ul className={styles.textsul}>
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

  <div className={styles.textsfirst}>
                <div className={styles.shape}></div>
           <ul className={styles.textsul}>
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
              <div className={styles.textsfirst}>
             <div className={styles.shape}></div>
           <ul className={styles.textsul}>
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



            <div className={styles.line}></div>
            <h3>Payment Partners</h3>
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottominner}>
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
      </div>
    </>
  );
};

export default Footer;
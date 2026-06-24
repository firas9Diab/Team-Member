import Insta from "../../public/Social Media/insta.svg";
import Facebook from "../../public/Social Media/facebook.svg";
import Twitter from "../../public/Social Media/twitter.svg";
import Youtube from "../../public/Social Media/youtube.svg";
import Linkedin from "../../public/Social Media/linkedin.svg";
import type { FooterCategories } from "../components/interface";

const useFooter = () => {
  const socialMedias: string[] = [Insta, Facebook, Twitter, Youtube, Linkedin];

  const footerCategories: FooterCategories = [
    {
      id: 1,
      title: "Category",
      items: [
        "Mobile and computers",
        "TV, Appliances, Electronics",
        "Men’s Fashion",
        "Home",
        "Kitchen",
        "Beauty",
        "Health",
        "Sports",
        "Baby Products",
      ],
    },
    {
      id: 2,
      title: "",
      items: [
        "Car",
        "Motor Bikes",
        "Book",
        "Video Games",
        "Shoes",
        "Toys",
        "Consoles",
        "Accessories",
        "Groceries",
      ],
    },
    {
      id: 3,
      title: "",
      items: [
        "Mobile and computers",
        "TV, Appliances, Electronics",
        "Men’s Fashion",
        "Home",
        "Kitchen",
        "Beauty",
        "Health",
        "Sports",
        "Baby Products",
      ],
    },
  ];

  return { socialMedias, footerCategories };
};

export default useFooter;

import { useState } from "react";
import Insta from "../../public/Social Media/insta.svg";
import Facebook from "../../public/Social Media/facebook.svg";
import Twitter from "../../public/Social Media/twitter.svg";
import Youtube from "../../public/Social Media/youtube.svg";
import Linkedin from "../../public/Social Media/linkedin.svg";

const useFooter = () => {
  const [socialMedias] = useState<string[]>([
    Insta,
    Facebook,
    Twitter,
    Youtube,
    Linkedin,
  ]);

  return { socialMedias };
};

export default useFooter;

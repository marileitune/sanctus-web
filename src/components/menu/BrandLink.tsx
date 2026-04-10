import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import BrandIcon from "components/menu/BrandIcon";
import useIsPrivacyPage from "hooks/useIsPrivacyPage";

const BrandLink = () => {
  const isPrivacyPage = useIsPrivacyPage();

  return (
    <>
      {isPrivacyPage ? (
        <Link to="/" className="cursor-pointer">
          <BrandIcon />
        </Link>
      ) : (
        <LinkScroll to="home" href="#home" smooth={true} duration={150} offset={-50} className="cursor-pointer">
          <BrandIcon />
        </LinkScroll>
      )}
    </>
  );
};

export default BrandLink;

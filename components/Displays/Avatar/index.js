import { AvatarContainer } from "./styled";
import cx from "classnames";

const Avatar = ({ theme_standard, theme_rectangle, srcImg }) => {
  const customClass = cx({
    theme_standard: theme_standard,
    theme_rectangle: theme_rectangle,
  });
  return <AvatarContainer className={customClass} src={srcImg} />;
};

export default Avatar;

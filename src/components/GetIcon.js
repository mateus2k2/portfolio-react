import * as cgIcons from "react-icons/cg";
import * as diIcons from "react-icons/di";
import * as siIcons from "react-icons/si";
import * as tbIcons from "react-icons/tb";

const GetIcon = ({ icon, className }) => {
  const getIcon = (iconName) => {
    const iconsMap = new Map();
    iconsMap.set("Cg", cgIcons);
    iconsMap.set("Di", diIcons);
    iconsMap.set("Si", siIcons);
    iconsMap.set("Tb", tbIcons);

    return iconsMap.get(iconName.substring(0, 2));
  };

  const icons = getIcon(icon);
  const TheIcon = icons[icon];

  return <TheIcon className={className} />;
};

export default GetIcon;

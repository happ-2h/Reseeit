import { IconDefinition }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../assets/styles/IconLabel.css';
import '../assets/styles/themes.css';

interface IconLabelProps {
  icon:  IconDefinition;
  data:  string;
  color: string;
  theme: string;
};

const IconLabel = ({icon, data, color, theme}: IconLabelProps) => {
  return (
    <div id="iconlabel-container" className={theme}>
      <FontAwesomeIcon icon={icon} className="icon" color={color}/>
      <span>{data}</span>
    </div>
  )
};

export default IconLabel;

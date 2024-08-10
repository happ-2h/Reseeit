import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../assets/styles/IconLabel.css';

interface IconLabelProps {
  icon:  IconDefinition;
  data:  string;
  color: string;
};

const IconLabel = ({icon, data, color}: IconLabelProps) => {
  return (
    <div id="iconlabel-container">
      <FontAwesomeIcon icon={icon} className="icon" color={color}/>
      <span>{data}</span>
    </div>
  )
};

export default IconLabel;

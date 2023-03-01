import React, { useState } from "react";
import "./Switch.css";

const Switch: React.FC<any> = ({
  checkedChildren,
  unCheckedChildren,
  handleSwitch,
  defaultChecked
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    setChecked(!checked);
    handleSwitch(!checked)
  };

  return (
    <div className="switch-container" onClick={handleToggle}>
      <div className={`switch ${checked && "checked"}`}>
        <div className="switch-inner">
          {checked ? checkedChildren : unCheckedChildren}
        </div>
      </div>
    </div>
  );
};

export default Switch;

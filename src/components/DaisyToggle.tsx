import React from "react";
import { Toggle } from "react-daisyui";

interface DaisyToggleProps {
  onToggleClick?: (checked: boolean) => void;
}

const DaisyToggle: React.FC<DaisyToggleProps> = ({ onToggleClick }) => {
  return (
    <Toggle onChange={(e) => onToggleClick?.(e.target.checked)} />
  );
};

export default DaisyToggle;

import React from "react";

interface ButtonProps {
  text?: string;
  onClick: () => void; // Function that returns void
  className?: string;
  typeOfBtn?: "button" | "submit" | "reset"; // To restrict the type to valid button types
  action?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "Click me", // Default text if none is provided
  onClick,
  className,
  typeOfBtn = "button", // Default type if none is provided
  action,
}) => {
  return (
    <button type={typeOfBtn} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

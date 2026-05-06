import React, { useState } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "secondary-filled";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const defaultStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    border: "1px solid #114A70",
    background: "linear-gradient(0deg, #0C5483 0%, #0C5483 100%)",
    color: "#FFFFFF",
  },
  secondary: {
    border: "1px solid #FA9E4D",
    background: "#FFF",
    color: "#FA9E4D",
  },
  "secondary-filled": {
    border: "1px solid #FA9E4D",
    background: "#FA9E4D",
    color: "#FFFFFF",
  },
};

const hoverStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "#FFF",
    color: "#0C5483",
  },
  secondary: {
    background: "linear-gradient(0deg, #FA9E4D 0%, #FA9E4D 100%)",
    color: "#FFFFFF",
  },
  "secondary-filled": {
    background: "#FFF",
    color: "#FA9E4D",
  },
};

const activeStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "linear-gradient(0deg, #0C5483 0%, #0C5483 100%)",
    color: "#FFFFFF",
    filter: "brightness(0.9)",
  },
  secondary: {
    background: "linear-gradient(0deg, rgba(249, 198, 105, 0.27) 0%, rgba(249, 198, 105, 0.27) 100%), #FFF",
    color: "#FA9E4D",
  },
  "secondary-filled": {
    background: "#FA9E4D",
    color: "#FFFFFF",
    filter: "brightness(0.9)",
  },
};

const baseStyles: React.CSSProperties = {
  display: "inline-flex",
  height: "48px",
  padding: "15px 20px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "30px",
  fontSize: "16px",
  fontWeight: 600,
  transition: "background 0.2s ease, color 0.2s ease, filter 0.2s ease, opacity 0.2s ease",
  whiteSpace: "nowrap",
  textDecoration: "none",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  to,
  onClick,
  disabled = false,
  type = "button",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const variantStyles = isActive
    ? activeStyles[variant]
    : isHovered
    ? hoverStyles[variant]
    : defaultStyles[variant];

  const computedStyle: React.CSSProperties = {
    ...baseStyles,
    ...defaultStyles[variant],
    ...variantStyles,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };

  const eventHandlers = {
    onMouseEnter: () => { if (!disabled) setIsHovered(true); },
    onMouseLeave: () => { setIsHovered(false); setIsActive(false); },
    onMouseDown: () => { if (!disabled) setIsActive(true); },
    onMouseUp: () => { if (!disabled) setIsActive(false); },
  };

  if (to) {
    return (
      <Link
        to={to}
        className={className}
        style={computedStyle}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        {...eventHandlers}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={computedStyle}
      {...eventHandlers}
    >
      {children}
    </button>
  );
};

export default Button;
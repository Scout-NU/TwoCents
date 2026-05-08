import React from "react";

export interface FeatureCardProps {
  title: string;
  bullets: string[];
  image: string;
  imageAlt?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  bullets,
  image,
  imageAlt = "",
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "340px",
        minWidth: "340px",
        height: "500px",
        borderRadius: "30px",
        background: "#FFF",
        border: "1px solid #D9D9D9",
        boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.10)",
        padding: "28px 28px 0 28px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Text content */}
      <div style={{ paddingBottom: "20px" }}>
        <h3
          style={{
            margin: "0 0 16px 0",
            fontSize: "20px",
            fontWeight: 700,
            color: "#0C2340",
            lineHeight: 1.3,
            letterSpacing: "-0.3px",
          }}
        >
          {title}
        </h3>

        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {bullets.map((bullet, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "14px",
                color: "#4A5568",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: "3px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FA9E4D, #F97316)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Offset image — bleeds out of the card bottom-right */}
      <div
        style={{
          position: "absolute",
    bottom: "-45px",
    right: "-45px",
    borderRadius: "12px",
    overflow: "hidden",
    transform: "rotate(9deg)",
    transformOrigin: "bottom right",
        }}
      >
        <img
          src={image}
          alt={imageAlt}
          style={{
            width: "auto",
            height: "380px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default FeatureCard;
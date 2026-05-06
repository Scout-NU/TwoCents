import React from "react";

interface QuoteCardProps {
  name: string;
  quote: string;
  stars?: number; // defaults to 5
}

export const QuoteCard: React.FC<QuoteCardProps> = ({
  name,
  quote,
  stars = 5,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "569px",
        height: "230.333px",
        padding: "25px 30px",
        alignItems: "center",
        gap: "40px",
        borderRadius: "20px",
        border: "1px solid #D9D9D9",
        background: "#FFF",
        boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.10)",
        boxSizing: "border-box",
      }}
    >
      {/* Left — name + stars */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flexShrink: 0,
          minWidth: "100px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#52AEEF",
              flexShrink: 0,
              marginTop: "1px",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#0C2340",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
        </div>

        <div style={{ display: "flex", gap: "3px" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={i < stars ? "#FA9E4D" : "#E2E8F0"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>

      

      {/* Right — quote text */}
      <p
        style={{
          margin: 0,
          fontSize: "15px",
          fontWeight: 400,
          color: "#444",
          lineHeight: 1.6,
          flexGrow: 1,
        }}
      >
        "{quote}"
      </p>
    </div>
  );
};

export default QuoteCard;
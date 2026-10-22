import React from "react";
import logoM4SpaceBlackSrc from "../assets/sincerity-logo-display.webp";

interface SincerityLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
}

export const SincerityLogo: React.FC<SincerityLogoProps> = ({
  size = 320,
  className = "",
  style,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        maxWidth: "100%",
        aspectRatio: "390 / 364",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...props}
    >
      <img
        src={logoM4SpaceBlackSrc}
        alt="Sincerity 3D Logo"
        width={1560}
        height={1456}
        loading="eager"
        decoding="sync"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default SincerityLogo;

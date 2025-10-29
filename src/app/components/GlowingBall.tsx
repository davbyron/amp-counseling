import React from "react";

interface GlowingBallProps {
  size: string | number;
  right: string | number;
  top: string | number;
  shadowSize: "sm" | "md" | "xl";
}

export function GlowingBall(props: GlowingBallProps) {
  const {
    size,
    right,
    top,
    shadowSize
  } = props;

  return (
    <div
      className={`
        absolute bg-radial-[at_25%_25%]
        from-yellow-light to-yellow-pale
        ${shadowSize === "sm" ? "shadow-ball-sm" : shadowSize === "xl" ? "shadow-ball-xl" : "shadow-ball"}
        rounded-full z-0
      `}
      style={{
        height: size,
        width: size,
        right,
        top,
      }}
    />
  )
}

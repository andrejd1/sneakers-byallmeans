import React from "react";

export type TypographyTypes = {
  variant: "h1" | "h2" | "h3" | "subhead" | "button" | "copy" | "label";
  children: React.ReactNode;
  style?: React.CSSProperties;
};

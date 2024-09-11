import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "16px",
    "1/2": "50%",
    "1/5": "20%",
  },
  color: {
    gray: "#989FC3",
    red: "#F14E59",
    green: "#245655",
    
  },
  fontFamily: {
    body: '-apple-system, "Segoe UI", Verdana, Arial',
  },
  fontSize: {
    small: "1em",
    medium: "1.4em",
    large: "1.8em",
  },
});
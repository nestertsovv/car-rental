import { StylesConfig } from "react-select";

export const colorStyles: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "colourStyles",
    borderRadius: "14px",
    outline: "none",
    boxShadow: "none",
    borderColor: isFocused ? "hsl(0, 0%, 80%)" : "",
    cursor: "pointer",
    height: "100%",
    zIndex: "5",
    ":hover": { borderColor: "hsl(0, 0%, 80%)", boxShadow: "none" },
  }),
  option: (styles) => ({
    ...styles,
    cursor: "pointer",
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: "5",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    color: "#121417",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    color: "#121417",
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: "#121417",
    ":hover": { color: "#121417" },
    // transform: isFocused ? "rotate(180deg)" : "",
  }),
};

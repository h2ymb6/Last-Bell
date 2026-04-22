export const Colors = {
  Black: "#000000",
  White: "#ffffffff",
  Blue950: "#212d4a",
  Blue900: "#2f4679",
  Blue800: "#355298",
  Blue700: "#3b63ba",
  Blue600: "#4476cc",
  Blue500: "#5b92d9",
  Blue400: "#78aee2",
  Blue300: "#a4caec",
  Blue200: "#c9dff4",
  Blue100: "#e1ecf8",
  Blue50: "#f2f7fc",
  Red500: "#F23D3D",
  Red200: "#ffc9c9",
  Green500: "#34bf65",
  Green200: "#c1f1d1",
  Yellow500: "#fec521",
  Yellow200: "#fee989",
} as const;

export type colorsKeyOfType = keyof typeof Colors;

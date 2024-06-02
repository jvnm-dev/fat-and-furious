import { Bebas_Neue, Roboto } from "next/font/google";

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--bebas",
});

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--roboto",
});

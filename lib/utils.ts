import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDuration = (minutes: number) => {
  if (minutes <= 0) {
    return "No duration";
  }

  if (minutes === 1) {
    return "1 minute";
  }

  if (minutes < 60) {
    return `${minutes} minutes`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours === 1) {
    return "1 hour";
  }

  return `${hours} hours`;
};

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

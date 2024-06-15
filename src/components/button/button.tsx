import { FC } from "react";

export type ButtonProps = {
  label: string;
  text: string;
};

export const Button: FC<ButtonProps> = ({ label, text }) => {
  return <button type="button">Click me!${label}${text}</button>;
};

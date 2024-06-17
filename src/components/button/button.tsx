import { FC, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren;

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button type="button" className="text-red-700">
    {children}
  </button>;
};

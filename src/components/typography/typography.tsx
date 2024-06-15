import { FC } from "react";

export type TypographyProps = {
  label: string;
};

export const Typography: FC<TypographyProps> = ({ label }) => {
  return <div date-typo-label={label}>This is typography component</div>;
};

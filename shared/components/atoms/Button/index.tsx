import React from "react";
import { Button as NBButton, IButtonProps } from "native-base";

type Props = IButtonProps;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <NBButton size="lg" borderRadius="lg" colorScheme="blue" {...props}>
      {children}
    </NBButton>
  );
};

export default Button;

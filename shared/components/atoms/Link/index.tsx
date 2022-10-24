import React from "react";
import { Button as NBButton, IButtonProps } from "native-base";

type Props = IButtonProps;

const Link: React.FC<Props> = ({ children, ...props }) => {
  return (
    <NBButton colorScheme="blue" variant="link" {...props}>
      {children}
    </NBButton>
  );
};

export default Link;

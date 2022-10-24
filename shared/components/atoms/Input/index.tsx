import React from "react";
import {
  FormControl,
  Input as NBInput,
  Stack,
  Text,
  WarningOutlineIcon,
  IInputProps,
} from "native-base";

type Props = IInputProps & {
  label: string;
  isInvalid?: boolean | undefined;
  errorMsg?: string;
  styleType?: "dark" | "light";
};

const Input: React.FC<Props> = ({ label, errorMsg, isInvalid, ...props }) => (
  <FormControl isInvalid={isInvalid}>
    <Stack>
      <FormControl.Label>{label}</FormControl.Label>
      <NBInput py={4} borderRadius="lg" {...props} />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMsg}
      </FormControl.ErrorMessage>
    </Stack>
  </FormControl>
);

export default Input;

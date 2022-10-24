import React from "react";
import { Heading, Stack, View, Text, Alert } from "native-base";

type Props = {
  title: string;
  subTitle: string;
  errorMessage?: string;
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({
  title,
  subTitle,
  errorMessage,
  children,
}) => {
  return (
    <View px={5} pt={10} flex={1} backgroundColor="white">
      <Stack space={5}>
        {errorMessage && <Alert status="error">{errorMessage}</Alert>}
        <Stack space={1}>
          <Heading>{title}</Heading>
          <Text>{subTitle}</Text>
        </Stack>
        {children}
      </Stack>
    </View>
  );
};

export default AuthLayout;

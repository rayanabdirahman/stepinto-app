import React from "react";
import { Heading, Stack, View, Text } from "native-base";

type Props = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ title, subTitle, children }) => {
  return (
    <View px={5} pt={10} flex={1} backgroundColor="white">
      <Stack space={5}>
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

import React from "react";
import { View } from "native-base";

const BaseLayout = ({ children }) => {
  return <View px={5}>{children}</View>;
};

export default BaseLayout;

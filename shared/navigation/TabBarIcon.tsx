import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  focused: boolean;
};

const TabBarIcon: React.FC<Props> = ({ name, focused, ...props }) => {
  return (
    <Ionicons
      name={focused ? name : (`${name}-outline` as any)}
      size={24}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
};

export default TabBarIcon;

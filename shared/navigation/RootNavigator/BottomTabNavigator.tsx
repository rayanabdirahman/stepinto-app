import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenNames } from "../types";
import TabBarIcon from "../TabBarIcon";
import Home from "../../../screens/Home";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={RootTabScreenNames.HOME}
      screenOptions={{
        tabBarActiveTintColor: "#070606",
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name={RootTabScreenNames.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name={RootTabScreenNames.SEARCH}
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="search" color={color} focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name={RootTabScreenNames.FEED}
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="planet" color={color} focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name={RootTabScreenNames.SETTINGS}
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="settings" color={color} focused={focused} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

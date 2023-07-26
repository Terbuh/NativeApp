import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./screens/List";
import DetailsScreen from "./screens/DetailsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
          options={{
            title: "XClients",
            headerStyle: {
              backgroundColor: "#5D49C6", // Ustawienie koloru tła nagłówka na niebieski tylko dla ekranu "Details"
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Details",
            headerStyle: {
              backgroundColor: "#5D49C6", // Ustawienie koloru tła nagłówka na niebieski tylko dla ekranu "Details"
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

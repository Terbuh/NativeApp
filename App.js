import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./screens/List";
import DetailsScreen from "./screens/DetailsScreen";
import HistoryScreen from './screens/HistoryScreen';


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
              backgroundColor: "#F5E4D7",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Details",
            headerStyle: {
              backgroundColor: "#F5E4D7",
            },
          }}
        />
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} options={{
          title: "History",
          headerStyle: {
            backgroundColor: "#F5E4D7",
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

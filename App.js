import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./screens/List";
import DetailsScreen from "./screens/DetailsScreen";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  let [fontsLoaded] = useFonts({
    "Roboto": require("./media/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./media/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./media/fonts/Roboto-Medium.ttf"),
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider theme={{ fontFamily: "Roboto" }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={List}
            options={{
              title: "XClients",
              headerStyle: {
                backgroundColor: "#F5E4D7", // Ustawienie koloru tła nagłówka na niebieski tylko dla ekranu "Details"
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: "Details",
              headerStyle: {
                backgroundColor: "#F5E4D7", // Ustawienie koloru tła nagłówka na niebieski tylko dla ekranu "Details"
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

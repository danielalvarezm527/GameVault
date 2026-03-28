import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GameListScreen from "./src/screens/GameListScreen";
import GameDetailScreen from "./src/screens/GameDetailScreen";
import AddGameScreen from "./src/screens/AddGameScreen";
import GamingNewsScreen from "./src/screens/GamingNewsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CatalogStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GameList" component={GameListScreen} options={{title: 'Catálogo'}} />
      <Stack.Screen name="GameDetail" component={GameDetailScreen} options={{title: 'Detalle'}} />
    </Stack.Navigator>
  );
};

const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Catálogo" component={CatalogStack} options={{headerShown: false}} />
        <Tab.Screen name="Agregar" component={AddGameScreen} />
        <Tab.Screen name="Noticias" component={GamingNewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

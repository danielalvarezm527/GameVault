import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GameDetailScreen = ({navigation, route}) => {
  const {game} = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>Game Detail</Text>
        <Text>{game.game_name}</Text>
        <Text>{game.platform}</Text>
        <Text>{game.genre}</Text>
        <Text>${game.price.toFixed(2)}</Text>
        <Text>{game.age_rating}</Text>
        <Text>{game.multiplayer ? 'Multijugador' : 'Un jugador'}</Text>
        <Text>{game.emoji}</Text>
        <Text>{game.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default GameDetailScreen;

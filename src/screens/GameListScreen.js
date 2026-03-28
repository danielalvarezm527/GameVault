import React, {useState, useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {gameList} from "../data/data";
import {styles} from "../styles/GameListStyles";

const GameListScreen = ({navigation}) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGames(gameList);
      setLoading(false);
    }, 1500);
  }, []);

  const renderGame = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('GameDetail', {game: item})}
      >
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{item.emoji}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{item.game_name}</Text>
          <View style={styles.cardMeta}>
            <View style={styles.platformBadge}>
              <Text style={styles.platformText}>{item.platform}</Text>
            </View>
            <Text style={styles.genreText}>{item.genre}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#FF6B00" />
        <Text style={styles.loaderText}>Cargando catálogo...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GameVault</Text>
        <Text style={styles.headerSubtitle}>Catálogo de videojuegos</Text>
      </View>
      <FlatList
        data={games}
        renderItem={renderGame}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default GameListScreen;

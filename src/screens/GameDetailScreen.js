import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {styles} from "../styles/GameDetailStyles";

const GameDetailScreen = ({navigation, route}) => {
  const {game_name, platform, genre, price, age_rating, multiplayer, emoji, description} = route.params.game;

  const [like, setLike] = useState(false);
  const [likeMessage, setLikeMessage] = useState('');

  useEffect(() => {
    setLikeMessage(like ? 'Agregado a favoritos ❤️' : '');
  }, [like]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.emojiContainer}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.gameTitle}>{game_name}</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Plataforma</Text>
            <View style={styles.platformBadge}>
              <Text style={styles.platformText}>{platform}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Género</Text>
            <Text style={styles.value}>{genre}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Precio</Text>
            <Text style={styles.value}>${price.toFixed(2)}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Clasificación</Text>
            <Text style={styles.value}>{age_rating}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Modo de juego</Text>
            <Text style={styles.value}>{multiplayer ? 'Multijugador' : 'Un jugador'}</Text>
          </View>
        </View>

        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionLabel}>Descripción</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={[styles.likeButton, like && styles.likeButtonActive]}
            onPress={() => setLike(!like)}
          >
            <Text style={styles.likeButtonText}>{like ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        </View>

        {likeMessage ? <Text style={styles.likeMessage}>{likeMessage}</Text> : null}

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Volver al catálogo</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameDetailScreen;

import React, {useState, useEffect} from "react";
import { View, Text, TextInput, Switch, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {styles} from "../styles/AddGameStyles";

const AddGameScreen = () => {
  const [gameName, setGameName] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [multiplayer, setMultiplayer] = useState(false);
  const [emoji, setEmoji] = useState("");
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const priceIsValid = !isNaN(price) && price.trim() !== "";
    setIsFormValid(
      gameName.trim() !== "" &&
      platform.trim() !== "" &&
      genre.trim() !== "" &&
      priceIsValid &&
      ageRating.trim() !== "" &&
      emoji.trim() !== "" &&
      description.trim() !== ""
    );
  }, [gameName, platform, genre, price, ageRating, emoji, description]);

  const handleCleanFields = () => {
    setGameName("");
    setPlatform("");
    setGenre("");
    setPrice("");
    setAgeRating("");
    setMultiplayer(false);
    setEmoji("");
    setDescription("");
  };

  const handleSaveGame = () => {
    if (!gameName || !platform || !genre || !price || !ageRating || !emoji || !description) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    Alert.alert(
      "¡Juego agregado!",
      `${emoji} ${gameName}\nPlataforma: ${platform}\nGénero: ${genre}\nPrecio: $${price}\nClasificación: ${ageRating}\nModo: ${multiplayer ? 'Multijugador' : 'Un jugador'}`
    );
    handleCleanFields();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Agregar Juego</Text>
            <Text style={styles.headerSubtitle}>Completa todos los campos para guardar</Text>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Título del juego</Text>
            <TextInput
              style={styles.input}
              placeholder="Ej. God of War"
              placeholderTextColor="#444444"
              value={gameName}
              onChangeText={setGameName}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Plataforma</Text>
            <TextInput
              style={styles.input}
              placeholder="PS5, Xbox, PC, Switch"
              placeholderTextColor="#444444"
              value={platform}
              onChangeText={setPlatform}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Género</Text>
            <TextInput
              style={styles.input}
              placeholder="Acción, RPG, Aventura..."
              placeholderTextColor="#444444"
              value={genre}
              onChangeText={setGenre}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Precio (USD)</Text>
            <TextInput
              style={styles.input}
              placeholder="59.99"
              placeholderTextColor="#444444"
              value={price}
              onChangeText={setPrice}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Clasificación de edad</Text>
            <TextInput
              style={styles.input}
              placeholder="E, T, M"
              placeholderTextColor="#444444"
              value={ageRating}
              onChangeText={setAgeRating}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Emoji representativo</Text>
            <TextInput
              style={styles.input}
              placeholder="⚔️"
              placeholderTextColor="#444444"
              value={emoji}
              onChangeText={setEmoji}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={styles.input}
              placeholder="Describe el juego..."
              placeholderTextColor="#444444"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={3}
            />
          </View>

          <View style={styles.fieldContainer}>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Multijugador</Text>
              <Switch
                value={multiplayer}
                onValueChange={setMultiplayer}
                trackColor={{false: '#2A2A2A', true: '#FF6B00'}}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.saveButton, !isFormValid && styles.saveButtonDisabled]}
              onPress={handleSaveGame}
              disabled={!isFormValid}
            >
              <Text style={[styles.saveButtonText, !isFormValid && styles.saveButtonTextDisabled]}>
                Agregar Juego
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearButton} onPress={handleCleanFields}>
              <Text style={styles.clearButtonText}>Limpiar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddGameScreen;

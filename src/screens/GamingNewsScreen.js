import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { GAMING_NEWS } from "../data/gamingNewsData";
import { styles } from "../styles/GamingNewsStyles";

const GamingNewsScreen = () => {
  const [newsNumber, setNewsNumber] = useState(0);
  const [news, setNews] = useState(GAMING_NEWS[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewsNumber(prev => {
        if (prev < GAMING_NEWS.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setNews(GAMING_NEWS[newsNumber]);
  }, [newsNumber]);

  const nextNews = () => {
    if (newsNumber < GAMING_NEWS.length - 1) {
      setNewsNumber(newsNumber + 1);
    } else {
      setNewsNumber(0);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Noticias Gaming</Text>
        <Text style={styles.headerSubtitle}>Últimas novedades del mundo gamer</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.counter}>Noticia {newsNumber + 1} de {GAMING_NEWS.length}</Text>

        <View style={styles.newsCard}>
          <Text style={styles.newsEmoji}>{news.emoji}</Text>
          <View style={styles.categoryRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{news.category}</Text>
            </View>
            <Text style={styles.dateText}>{news.date}</Text>
          </View>
          <Text style={styles.newsTitle}>{news.title}</Text>
          <Text style={styles.newsBody}>{news.body}</Text>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={nextNews}>
          <Text style={styles.nextButtonText}>Siguiente noticia</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GamingNewsScreen;

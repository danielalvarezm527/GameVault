import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  header: {
    backgroundColor: '#111111',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B00',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF6B00',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#888888',
    marginTop: 2,
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginBottom: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B00',
  },
  emojiContainer: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  emoji: {
    fontSize: 26,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  platformBadge: {
    backgroundColor: '#FF6B00',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  platformText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  genreText: {
    fontSize: 12,
    color: '#888888',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111111',
  },
  loaderText: {
    marginTop: 12,
    color: '#888888',
    fontSize: 14,
  },
});

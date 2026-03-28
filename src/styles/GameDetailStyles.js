import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  emojiContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  emoji: {
    fontSize: 72,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B00',
  },
  gameTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 13,
    color: '#888888',
    width: 110,
  },
  value: {
    fontSize: 14,
    color: '#FFFFFF',
    flex: 1,
  },
  platformBadge: {
    backgroundColor: '#FF6B00',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  platformText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  descriptionCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  descriptionLabel: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#CCCCCC',
    lineHeight: 22,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  likeButton: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  likeButtonActive: {
    borderColor: '#FF6B00',
  },
  likeButtonText: {
    fontSize: 22,
  },
  likeMessage: {
    textAlign: 'center',
    color: '#FF6B00',
    fontSize: 13,
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#FF6B00',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

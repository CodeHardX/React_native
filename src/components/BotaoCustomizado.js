import { StyleSheet, Text, TouchableOpacity } from 'react-native';
 
export default function BotaoCustomizado({ titulo }) {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#E2725B',
    padding: 10,
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#2E2B2B',
    fontSize: 16,
    fontFamily: 'sans-serif',
    fontWeight: '600'
  }
});

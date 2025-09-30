import { StyleSheet, Text, TouchableOpacity } from 'react-native';
 
export default function BotaoCustomizado({ titulo, onApertar }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onApertar}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#ff6b35',
    padding: 10,
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#2e1c1c',
    fontSize: 16,
    fontFamily: 'sans-serif',
    fontWeight: '600'
  }
});

import { Image, StyleSheet, Text, View } from 'react-native';
 const styles = StyleSheet.create({
  cartao: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profissao: {
    fontSize: 16,
    color: 'gray',
  }
});
 
export default function App() {
  return (
    <View  style={styles.cartao}>
      <View> { /* View do Cartão */ }
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
          style={styles.foto}
        />
        <Text style={styles.nome}>Carlos Vitor</Text>
        <Text style={styles.profissao}>Professor de Física</Text>
      </View>
    </View>
  );
}




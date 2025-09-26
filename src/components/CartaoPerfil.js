import { Image, StyleSheet, Text, View } from 'react-native';
import BotaoCustomizado from './BotaoCustomizado';
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
  },
   botaoContainer: {
    marginTop: 20, // Adicionando espaço entre o texto e o botão
  }
});
// Recebe os dados via props (com desestruturação)
export default function CartaoPerfil({ nome, profissao, urlFoto}) {
  return (
    <View style={styles.cartao}>
      <Image source={{ uri: urlFoto }} style={styles.foto} />
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <View style={styles.botaoContainer}>
        <BotaoCustomizado titulo="entrar"/>
      </View>
    </View>
  );
}
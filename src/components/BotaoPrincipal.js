import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BotaoPrincipal({onApertar}){
    return(
        <TouchableOpacity style={styles.botao} onPress={onApertar}>
            <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    botao: {
    width: 130,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }

})
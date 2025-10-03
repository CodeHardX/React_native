import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function BotaoPrincipal({onApertar}){
    return(
        <TouchableOpacity style={styles.botao} onPress={onApertar}>
           <Icon name="home" size={20} color="white" style={styles.icone} />
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
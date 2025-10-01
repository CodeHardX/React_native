import { StyleSheet, View } from 'react-native';
import BotaoPrincipal from '../components/BotaoPrincipal';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',    // centraliza verticalmente
        alignItems: 'center',        // centraliza horizontalmente
        padding: 20,
        backgroundColor: '#d6ecfa',
    }
})

export default function HomeScreen() {
    return(
          <View style={styles.container}>
            <BotaoPrincipal/>
          </View>
    );
}
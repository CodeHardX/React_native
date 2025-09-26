import { Image, StyleSheet, TextInput, View } from 'react-native';
import BotaoCustomizado from './BotaoCustomizado';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',    // centraliza verticalmente
        alignItems: 'center',        // centraliza horizontalmente
        padding: 20,
        backgroundColor: '#fff',
    },
    logo:{
        width: 400,
        height: 400,
    },
    cpf:{
       color: '#999999',
       height: 50,
       width: 300,
       borderColor: '#66b2ff',
       borderWidth: 1,
       borderRadius: 8,
       paddingHorizontal: 20,
       marginVertical: 15,
       fontSize: 16,
       backgroundColor: '#fff',
        
    },
    senha:{
       color: '#999999',
       height: 50,
       width: 300,
       borderColor: '#66b2ff',
       borderWidth: 1,
       borderRadius: 8,
       paddingHorizontal: 20,
       marginVertical: 15,
       fontSize: 16,
       backgroundColor: '#fff',
    },
    cardBotao:{

    }
    

});

export default function Login() {
    return(
        <View style={styles.container}>
                <Image source={require('../img/logoG.png')} style={styles.logo}/>

            <View style={styles.form}>
                <TextInput 
                style={styles.cpf}
                placeholder='Digite seu CPF'
                />            
                <TextInput 
                style={styles.senha} 
                placeholder='Digite sua Senha'
                />
            </View>
            <View style={styles.cardBotao}>
                <BotaoCustomizado titulo='Entrar'/>
            </View>

        </View>
    );
}
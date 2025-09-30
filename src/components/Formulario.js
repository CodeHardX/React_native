import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import BotaoPrincipal from './BotaoPrincipal';


export default function Formulario(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        alert(`Email: ${email}\n Senha: ${senha}`);
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Formulario Básico</Text>
            <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address" 
            />

            <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            />    

            <BotaoPrincipal onApertar={handleLogin}/>
            
        </View>
    );
}
 


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alingItems: 'center',
        backgroundColor: '#e6fff5'

    },
    input:{
        width: 320,
        height: 50,
        color: '#888',
        borderColor: '#4a90e2',
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#f9f9f9',
        margin: 12
    },
    titulo:{
       fontSize: 24,
       fontWeight: 'bold',
       color: '#2c3e50', 
       textAlign: 'center',
       marginBottom: 20,
       textTransform: 'uppercase',
       letterSpacing: 1.5,
    }
})
import { Image, StyleSheet, Text, View } from 'react-native';


export default function Card(){
    return(
        <View style={styles.container}>
            <Image style={styles.foto} source={require('../img/mickey.jpg')} />
            <View style={styles.card}>
                <Text style={styles.titulo}>REDE CASA VERDE</Text>
                <Text style={styles.frase}>Noticia Urgente</Text>
                <Text style={styles.subtitulo}>Bombando 3 guerra mundial é iniciada</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
       
    },
    card:{
        flex: 1,
        flexDirection: 'column',
       
    },
    titulo:{
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color:'#481'
    },
    subtitulo:{
        fontFamily:'Courier New',
        fontWeight: 'bold',
        color: '#604'
    },
    frase:{
         fontFamily: 'Roboto-Black',
         fontWeight: 'bold',
    },
    foto:{
        marginTop: 45,
        width: 150,
         
    }

});
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
     container:{
        flex:1, 
        flexDirection: 'row',
        justifyContent: 'space-between',    
        alignItems: 'center',        
        padding: 15,
        backgroundColor: '#ccc',
    },
    texto:{
        color: 'white',
        fontsize: 16,
        fontFamily: 'san-serif'
    },
     foto:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    cardImg:{
        flex: 2
    },
    cardTxt:{
        flex: 1
    }

})

export default function Header({rotulo, urlFoto}){
    return(
        <View style={styles.container}>
            <View style={styles.cardTxt}>
                <Text style={styles.texto}>{rotulo}</Text>
            </View>
            <View style={styles.cardImg}>
                <Image  source={{ uri: urlFoto }} style={styles.foto}/>
            </View>
        </View>
    );
}
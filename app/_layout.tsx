import { StyleSheet, View } from 'react-native';
// import CartaoPerfil from '../src/components/CartaoPerfil';
// import Login from '../src/components/Login';
import Header from '../src/components/Header';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  }
});
 
export default function App() {
  return (
    <View >
    {/*
      <CartaoPerfil 
        nome="Vitor Santos"
        profissao="Desenvolvedor Backend"
        urlFoto="https://preview.redd.it/yall-want-some-profile-pictures-v0-7rw4xzppx9ze1.jpg?width=640&crop=smart&auto=webp&s=a4ca09c4792591a45b9aab0d3b90ba1155de00c4"
      />
      
      <Login/>
      */}

      <Header
      rotulo="Perfil"
      urlFoto="https://encurtador.com.br/DiAW8"
      />
    </View>
  );
}




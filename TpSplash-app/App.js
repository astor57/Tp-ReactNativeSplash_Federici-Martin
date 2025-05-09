import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const img= require('./assets/fotomila.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={img}></Image>
      <StatusBar style="dark" />
      <Text>Email</Text>
      <TextInput
      style={styles.input}
      placeholder='sarobeLPM@gmail.com'
      keyboardType='default'
      />
      <Text>Contraseña</Text>
      <TextInput
      style={styles.input}
      placeholder='soyFranSaro333             '
      keyboardType='default'
      />
      <Button
      title='Ingresar'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 35, borderColor:'green', borderWidth:2, padding:2,
  }
});

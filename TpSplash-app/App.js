import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';

const img= require('./assets/fotomila.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <Image
        source={img} 
        style={styles.imagen}
        resizeMode="contain"
      />

      <TextInput
        placeholder="soyfranSaro@gmail.com"
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="contraseña333"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={()=> Alert.alert('Registro Exitoso')}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    width: '80%',
    height: 55,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
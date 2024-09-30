import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import credenciais from './credenciais';

const App = () => {
  const [senha, setSenha] = useState('');

  const handleSubmit = () => {
    console.log(senha);
  };

  const LoginScreen = () => {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleLogin = () => {
      const usuarioValido = credenciais.find(
        (user) => user.nome === nome && user.senha === senha
      );

      if (usuarioValido) {
        navigation.navigate('PaginaSeparada'); 
      } else {
        setErro('Nome ou senha incorretos');
      }
    };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo }>Seja Bem Vindo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui seu Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite aqui sua Senha"
        secureTextEntry={true} 
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#747474'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: '25px',
    backgroundColor: 'white'
  },
   
});

export default App;

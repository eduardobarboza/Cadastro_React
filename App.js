import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, Pressable, ImageBackground } from 'react-native';
import  usuarios  from './src/credenciais.js';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const validarCredenciais = () => {
    console.log("Email:", email);
    console.log("Senha:", senha);

    const emailTrimmed = email.trim();
    const senhaTrimmed = senha.trim();
  
    const usuarioEncontrado = usuarios.find(
      (user) => user.email === emailTrimmed && user.senha === senhaTrimmed
    );

    if (usuarioEncontrado) {
      setUsuarioLogado(usuarioEncontrado);
    } else {
      setModalVisible(true); 
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://assets.nflxext.com/ffe/siteui/vlv3/057eabb8-8e70-44a6-abe8-12e92e6b1b02/967e2dc4-9b30-499d-99d6-71264eb6b393/BR-pt-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg' }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {!usuarioLogado ? (
          <>
            <Text style={styles.Nome}>DuduhGames</Text>
            <Text style={styles.title}>Entrar</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#8c8c8c"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={senha}
              onChangeText={setSenha}
              placeholder="Senha"
              placeholderTextColor="#8c8c8c"
              secureTextEntry
            />
            <Pressable style={styles.loginButton} onPress={validarCredenciais}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </Pressable>

            
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Email ou senha inválidos. Por favor, tente novamente.</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>OK</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </>
        ) : (
          <View>
            <Text style={styles.welcomeText}>Bem-vindo(a), {usuarioLogado.nome}!</Text>
            <Text style={styles.welcomeText}>Email: {usuarioLogado.email}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 5,
    color: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#e50914',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  welcomeText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  Nome: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  }
});

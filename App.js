import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  let [number, setNumber] = useState('');

  console.log(number);

/*
  var resultado = number;
  for (var i = 1; i < number; i++) {
    resultado *= i;
  }
  console.log(resultado);
*/
  let resultado = number;

  function exibir(){
    for (var i = 1; i < number; i++) {
      resultado *= i;
    }
    var resposta = resultado;
    console.log(resposta);
    resultado = number;
    if(resposta == "Infinity"){
      return Alert.alert('Resultado Infinito!!!');
    }else{
      return resposta;
    }
  }
  
  var resposta = exibir();

  const showMessage = () => {
    //console.log(resultado)
    Alert.alert('Foi');
  }

  return (
    <View>
      <View >

        <View style={styles.navbar}>
          <Text style={styles.h1}>FATORIAL</Text>
        </View>

        <View style={styles.conteudo}>
          <TextInput
            style={styles.input}
            placeholder="Informe um número"
            keyboardType="numeric"
            onChangeText={setNumber}
            value={number}>
          </TextInput>

          <Text style={styles.size}>Fatorial: {resposta}</Text>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    backgroundColor: 'purple',
    height: 60,
    paddingTop: 15,
    marginBottom: 20
  },
  conteudo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  h1: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    flex: 1,
    alignItems: 'center'
  },
  size: {
    fontSize: 20,
    marginBottom: 10
  },
  textInput: {
    borderColor: 'blue',
    color: 'blue',
    backgroundColor: 'blue'
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  input: {
    //backgroundColor: 'blue',
    marginTop: 10,
    marginBottom: 10,
    width: '50%',
    height: 50,
    fontSize: 20,
    color: 'black',
    borderWidth: 1,
    borderColor: 'purple',
  }

});
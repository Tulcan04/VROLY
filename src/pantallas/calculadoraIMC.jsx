import { useState } from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { styles } from './CalculadoraIMC.styles';

export const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const calcularIMC = (peso, altura) => {
    if (peso && altura) {
      let imc = peso / (altura * altura);
      return imc.toFixed(2);
    }
    return null;
  };

  const calcularNivelPeso = (peso, altura) => {
    let imc = calcularIMC(peso, altura);
    if (imc === null) return "Por favor, ingrese peso y altura válidos.";

    let respuesta = `Su IMC es: ${imc}. `;
    if (imc < 18.5) {
      respuesta += "Bajo peso.";
    } else if (imc >= 18.5 && imc <= 24.9) {
      respuesta += "Peso normal.";
    } else if (imc >= 25 && imc <= 29.9) {
      respuesta += "Sobrepeso.";
    } else {
      respuesta += "Obesidad.";
    }
    return respuesta;
  };

  const handleCalcular = () => {
    const resultado = calcularNivelPeso(peso, altura);
    Alert.alert("Información", resultado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Calculadora IMC</Text>
      <Text style={styles.texto2}>
        Bienvenido al programa para calcular su índice de masa corporal. La fórmula para calcularlo es:
      </Text>

      <Image style={styles.imagen} source={require('../../assets/icon.png')} />

      <TextInput
        onChangeText={setPeso}
        style={styles.textInput}
        keyboardType='numeric'
        placeholder='Ingrese su Peso (kg):'
      />
      <TextInput
        onChangeText={setAltura}
        style={styles.textInput}
        keyboardType='numeric'
        placeholder='Ingrese su Altura (m):'
      />
      <Button
        style={styles.buttonText}
        title='Calcular'
        onPress={handleCalcular}
      />
    </View>
  );
};

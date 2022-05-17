import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
  StyleSheet,
  Animated,
  Keyboard,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { RNS3 } from "react-native-aws3";
import * as keys from "./../../keys";
import "core-js/features/array/at";


export default function UploadImagens({ navigation }) {
  const [image, setImage] = useState(null);
  const [nome, onChangeNome] = useState("");
  const [modeloVeiculo, onChangeModVeic] = useState("");
  const [chassi, onChangeChassi] = useState("");
  const [cnh, onChangeCNH] = useState("");
  const [cpf, onChangeCPF] = useState("");
  const [crv, onChangeCRV] = useState("");
  const [crlv, onChangeCRLV] = useState("");

  let disabled;

  if(nome === "" || modeloVeiculo === "" || chassi === "" ||
   cnh === "" || cpf === "" || crv === "" || crlv === ""){
    disabled = true;
  } else{
    disabled = false;
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/logo.png")}
        />
      </View>

      <View style={[styles.container]}>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nome}
          autoCorrect={false}
          onChangeText={onChangeNome}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          autoCorrect={false}
          onChangeText={onChangeCPF}
          keyboardType="numeric"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Veículo"
          value={modeloVeiculo}
          autoCorrect={false}
          onChangeText={onChangeModVeic}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Chassi"
          value={chassi}
          autoCorrect={false}
          onChangeText={onChangeChassi}
          keyboardType="numeric"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="CNH"
          value={cnh}
          autoCorrect={false}
          onChangeText={onChangeCNH}
          keyboardType="numeric"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="CRV"
          value={crv}
          autoCorrect={false}
          onChangeText={onChangeCRV}
          keyboardType="numeric"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="CRLV"
          value={crlv}
          autoCorrect={false}
          onChangeText={onChangeCRLV}
          keyboardType="numeric"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          disabled={disabled}
          onPress={() => {
            navigation.navigate("Envio de Imagens", {
              id: 30,
            });
          }}
        >
          <Text style={styles.submitText}>Próximo</Text>
        </TouchableOpacity>
      </View>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 150, height: 150, position: "absolute" }}
        />
      )}
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    marginTop: -150,
    marginBottom: -100,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 100,
  },
  input: {
    backgroundColor: "#FFF",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  btnSubmit: {
    backgroundColor: "#35AAFF",
    width: "90%",
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginTop: 10,
  },
  btnRegister: {
    marginTop: 10,
  },
  submitText: {
    color: "#FFF",
    fontSize: 18,
  },
  registerText: {
    color: "#FFF",
  },
  images: {
    position: "relative",
  },
});

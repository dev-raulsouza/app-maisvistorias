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

let extensao;
let resultado;

export default function UploadImagens({ navigation }) {
  const [image, setImage] = useState(null);

  var keysReturn = keys;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      allowsMultipleSelection: true,
    });

    resultado = result;
    console.log(resultado.uri);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  function buckets3put() {
    extensao = resultado.uri.split(".");

    const file = {
      uri: resultado.uri,
      name: resultado.uri.split("/").at(-1),
      type: "image/" + extensao.at(-1),
    };

    let data = new Date();
    let dataAtu = data.toLocaleDateString();
    dataAtu = dataAtu.replace("/", "_");
    let dataAtual = dataAtu.replace("/", "_");

    const options = {
      keyPrefix: dataAtual + "/" ,
      bucket: keysReturn.bucket,
      region: keysReturn.region,
      accessKey: keysReturn.accessKeyID,
      secretKey: keysReturn.secretAccessKeyID,
      successActionStatus: 201,
    };

    console.log(options);
    console.log(file);

    RNS3.put(file, options).then((response) => {
      console.log(response);
      if (response.status !== 201)
        throw new Error("Failed to upload image to S3");
    });
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
        <TouchableOpacity style={styles.btnSubmit} onPress={pickImage}>
          <Text style={styles.submitText}>Selecionar imagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSubmit} onPress={buckets3put}>
          <Text style={styles.submitText}>Enviar imagem</Text>
        </TouchableOpacity>
      </View>
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

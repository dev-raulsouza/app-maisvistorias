import "core-js/features/array/at";
import { RNS3 } from "react-native-aws3";
import * as keys from "./../../keys.js";
import { Alert } from "react-native";

export const alertSucesso = () =>
  Alert.alert("Envio de Imagem", "A imagem foi enviada com sucesso!", [
    { text: "OK", onPress: () => {} },
  ]);

export const alertFalha = () =>
  Alert.alert("Envio de Imagem", "Não foi possível enviar a imagem.", [
    { text: "OK", onPress: () => {} },
  ]);

export function putToBucket(resultado) {
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
    keyPrefix: dataAtual + "/",
    bucket: keys.bucket,
    region: keys.region,
    accessKey: keys.accessKeyID,
    secretKey: keys.secretAccessKeyID,
    successActionStatus: 201,
  };

  RNS3.put(file, options).then((response) => {
    if (response.status !== 201) {
      alertFalha();
      throw new Error("Failed to upload image to S3");
    }
    if (response.status === 201) {
      alertSucesso();
    }
  });
}

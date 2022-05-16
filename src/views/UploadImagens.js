import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { RNS3 } from "react-native-aws3";

export default function UploadImagens({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }

    let extensao = result.uri.split(".")[1];

    const file = {
      uri: result.uri,
      name: result.uri.split("/")[14],
      type: "image/" + extensao,
    };

    const options = {
      keyPrefix: "",
      bucket: "",
      region: "",
      accessKey: "",
      secretKey: "",
      successActionStatus: 201,
    };

    try{
      const response = await RNS3.put(file, options)
      console.log("response aqui" + response);
      if (response.status === 201){
        console.log("Success: ", response.body)
        /**
         * {
         *   postResponse: {
         *     bucket: "your-bucket",
         *     etag : "9f620878e06d28774406017480a59fd4",
         *     key: "uploads/image.png",
         *     location: "https://your-bucket.s3.amazonaws.com/uploads%2Fimage.png"
         *   }
         * }
         */
      } else {
        console.log("Failed to upload image to S3: ", response)
      }
    } catch(error){
      console.log(error)
    }

  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
